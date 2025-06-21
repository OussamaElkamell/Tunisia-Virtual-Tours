import { useState, useEffect, useCallback, useRef } from 'react';

const DEFAULT_API_KEY = 'sk_d5f620dd9c912f0dda4cdea759beec2829f0dcff9ebd58a6';

export const useLessonSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(() => {
    const storedApiKey = localStorage.getItem('elevenLabsApiKey');
    
    if (!storedApiKey) {
      localStorage.setItem('elevenLabsApiKey', DEFAULT_API_KEY);
      return DEFAULT_API_KEY;
    }
    
    return storedApiKey;  
  });
  const [progress, setProgress] = useState(0);
  const [currentChunk, setCurrentChunk] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chunksRef = useRef<string[]>([]);
  const currentChunkIndexRef = useRef(0);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.onended = () => {
        if (currentChunkIndexRef.current < chunksRef.current.length - 1) {
          currentChunkIndexRef.current++;
          const progressValue = (currentChunkIndexRef.current / chunksRef.current.length) * 100;
          setProgress(progressValue);
          setCurrentChunk(chunksRef.current[currentChunkIndexRef.current]);
          speakCurrentChunk();
        } else {
          setIsSpeaking(false);
          setIsPaused(false);
          setProgress(0);
          setCurrentChunk('');
          currentChunkIndexRef.current = 0;
          chunksRef.current = [];
        }
      };
      audioRef.current.onpause = () => {
        setIsPaused(true);
      };
      audioRef.current.onplay = () => {
        setIsPaused(false);
      };
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const splitTextIntoChunks = (text: string, maxLength: number = 200): string[] => {
    const chunks: string[] = [];
    let currentIndex = 0;
    
    while (currentIndex < text.length) {
      let endIndex = Math.min(currentIndex + maxLength, text.length);
      
      if (endIndex < text.length) {
        const sentenceBreak = text.substring(currentIndex, endIndex).lastIndexOf('. ');
        if (sentenceBreak !== -1 && sentenceBreak > maxLength / 2) {
          endIndex = currentIndex + sentenceBreak + 1;
        } else {
          const paragraphBreak = text.substring(currentIndex, endIndex).lastIndexOf('\n\n');
          if (paragraphBreak !== -1 && paragraphBreak > maxLength / 3) {
            endIndex = currentIndex + paragraphBreak;
          } else {
            const lineBreak = text.substring(currentIndex, endIndex).lastIndexOf('\n');
            if (lineBreak !== -1 && lineBreak > maxLength / 3) {
              endIndex = currentIndex + lineBreak;
            } else {
              const commaBreak = text.substring(currentIndex, endIndex).lastIndexOf(', ');
              if (commaBreak !== -1 && commaBreak > maxLength / 2) {
                endIndex = currentIndex + commaBreak + 1;
              } else {
                const spaceBreak = text.substring(currentIndex, endIndex).lastIndexOf(' ');
                if (spaceBreak !== -1) {
                  endIndex = currentIndex + spaceBreak;
                }
              }
            }
          }
        }
      }
      
      chunks.push(text.substring(currentIndex, endIndex).trim());
      currentIndex = endIndex;
      
      while ((text[currentIndex] === ' ' || text[currentIndex] === '\n') && currentIndex < text.length) {
        currentIndex++;
      }
    }
    
    return chunks.filter(chunk => chunk.length > 0);
  };

  const speakCurrentChunk = useCallback(async () => {
    if (currentChunkIndexRef.current >= chunksRef.current.length) {
      setIsSpeaking(false);
      setProgress(0);
      setCurrentChunk('');
      return;
    }

    try {
      const chunk = chunksRef.current[currentChunkIndexRef.current];
      setCurrentChunk(chunk);
      
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/CwhRBWXzGAHq8TQ4Fs17/stream', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey as string,
        },
        body: JSON.stringify({
          text: chunk,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`ElevenLabs API error: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
      }
    } catch (error) {
      console.error('Error with ElevenLabs TTS:', error);
      currentChunkIndexRef.current++;
      const progressValue = (currentChunkIndexRef.current / chunksRef.current.length) * 100;
      setProgress(progressValue);
      speakCurrentChunk();
    }
  }, [apiKey]);

  const speak = useCallback(async (text: string) => {
    if (!text) return;
    
    if (!apiKey) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar';
        utterance.rate = 0.8;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
      return;
    }

    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }

      setIsSpeaking(true);
      setProgress(0);
      currentChunkIndexRef.current = 0;
      
      chunksRef.current = splitTextIntoChunks(text);
      console.log(`Text split into ${chunksRef.current.length} chunks`);
      
      setCurrentChunk(chunksRef.current[0]);
      speakCurrentChunk();
    } catch (error) {
      console.error('Error with ElevenLabs TTS:', error);
      setIsSpeaking(false);
    }
  }, [apiKey, speakCurrentChunk]);

  const pauseSpeech = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPaused(true);
    }
  }, []);

  const resumeSpeech = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPaused(false);
    }
  }, []);

  const stopSpeech = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      setIsSpeaking(false);
      setIsPaused(false);
      setProgress(0);
      currentChunkIndexRef.current = 0;
      chunksRef.current = [];
    }
  }, []);

  const saveApiKey = useCallback((key: string) => {
    localStorage.setItem('elevenLabsApiKey', key);
    setApiKey(key);
  }, []);

  return {
    speak,
    pauseSpeech,
    resumeSpeech,
    stopSpeech,
    isSpeaking,
    isPaused,
    apiKey,
    saveApiKey,
    progress,
    currentChunk
  };
};
