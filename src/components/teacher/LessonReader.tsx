
import React, { useEffect, useState, useRef } from 'react';
import { Bot, Volume2, Speaker, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLessonSpeech } from "@/hooks/useLessonSpeech";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LessonReaderProps {
  text: string;
  initialAutoPlay?: boolean;
}

const LessonReader = ({ text, initialAutoPlay = false }: LessonReaderProps) => {
  const { speak, pauseSpeech, resumeSpeech, stopSpeech, isSpeaking, isPaused, apiKey, saveApiKey, progress, currentChunk } = useLessonSpeech();
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  const [inputApiKey, setInputApiKey] = useState('');
  const highlightRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (currentChunk && isSpeaking) {
      // Remove previous highlights
      document.querySelectorAll('.reading-highlight').forEach(el => {
        el.classList.remove('reading-highlight');
      });
      
      document.querySelectorAll('.reading-current').forEach(el => {
        const parent = el.parentNode;
        if (parent) {
          parent.textContent = parent.textContent; // Reset the innerHTML by setting textContent
        }
      });

      // Find the best matching paragraph for the current chunk
      const allParagraphs = document.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6');
      let bestMatch: { element: Element | null; matchLength: number } = { element: null, matchLength: 0 };

      const cleanChunk = currentChunk.trim();

      allParagraphs.forEach((p) => {
        if (p.textContent) {
          // Try for exact match first
          if (p.textContent.includes(cleanChunk)) {
            const matchLength = cleanChunk.length;
            if (matchLength > bestMatch.matchLength) {
              bestMatch = { element: p, matchLength };
            }
          } else {
            // Try partial word match
            const words = cleanChunk.split(' ');
            for (let i = words.length; i > 2; i--) {
              const partialChunk = words.slice(0, i).join(' ');
              if (p.textContent.includes(partialChunk)) {
                const matchLength = partialChunk.length;
                if (matchLength > bestMatch.matchLength) {
                  bestMatch = { element: p, matchLength };
                  break; // Exit after finding the first good match
                }
              }
            }
          }
        }
      });

      if (bestMatch.element && bestMatch.matchLength > 5) {
        console.log("Found matching element");
        
        // Add highlight class to the element
        bestMatch.element.classList.add('reading-highlight');
        
        if (bestMatch.element.textContent) {
          const text = bestMatch.element.textContent;
          
          // Create a regex that's not case sensitive and escapes special characters
          const cleanChunkRegex = new RegExp(cleanChunk.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
          const match = text.match(cleanChunkRegex);
          
          if (match) {
            const chunkIndex = match.index || 0;
            const beforeText = text.substring(0, chunkIndex);
            const highlightedText = match[0];
            const afterText = text.substring(chunkIndex + highlightedText.length);
            
            bestMatch.element.innerHTML = `${beforeText}<span class="reading-current">${highlightedText}</span>${afterText}`;

            // Force scrolling to the element
            setTimeout(() => {
              const highlightedElement = bestMatch.element?.querySelector('.reading-current');
              if (highlightedElement) {
                highlightRef.current = highlightedElement as HTMLElement;
                
                highlightedElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              } else {
                // Fallback to scrolling to the entire element
                bestMatch.element?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }
            }, 100); // Small timeout to ensure DOM has updated
          }
        }
      }
    }
  }, [currentChunk, isSpeaking]);

  useEffect(() => {
    if (initialAutoPlay && text && apiKey) {
      const timer = setTimeout(() => {
        speak(text);
        toast("جاري قراءة النص", {
          duration: 3000,
        });
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [text, initialAutoPlay, speak, apiKey]);

  const handleSaveApiKey = () => {
    if (inputApiKey.trim()) {
      saveApiKey(inputApiKey.trim());
      setShowApiKeyInput(false);
      toast("تم حفظ مفتاح API بشكل آمن", {
        description: "سيتم تخزين المفتاح بشكل محلي في متصفحك",
        duration: 3000,
      });
      
      if (text) {
        setTimeout(() => speak(text), 500);
      }
    }
  };

  const handleSpeakText = () => {
    if (!isSpeaking) {
      speak(text);
      toast("بدأ القراءة", {
        duration: 2000,
      });
    } else {
      stopSpeech();
      toast("تم إيقاف القراءة", {
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-tunisia-blue/5 rounded-lg border border-tunisia-blue/20">
      <style>
        {`
          .reading-highlight {
            background-color: rgba(0, 123, 255, 0.08);
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }
          .reading-current {
            background-color: rgba(0, 123, 255, 0.2);
            border-radius: 3px;
            padding: 0 2px;
            position: relative;
            display: inline-block;
            transition: all 0.3s ease;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
            line-height: 1.6;
          }
          .reading-current::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 2px;
            background-color: rgba(0, 123, 255, 0.6);
            animation: readingProgress 1.5s infinite;
          }
          @keyframes readingProgress {
            0% { transform: scaleX(0); transform-origin: left; }
            50% { transform: scaleX(1); transform-origin: left; }
            50.1% { transform: scaleX(1); transform-origin: right; }
            100% { transform: scaleX(0); transform-origin: right; }
          }
        `}
      </style>
      {showApiKeyInput ? (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-tunisia-blue font-[Noto_Kufi_Arabic]">
            لتفعيل قراءة النص العربي، الرجاء إدخال مفتاح API من ElevenLabs
          </p>
          <div className="flex gap-2">
            <Input
              value={inputApiKey}
              onChange={(e) => setInputApiKey(e.target.value)}
              placeholder="ElevenLabs API Key"
              className="flex-1"
              type="password"
            />
            <Button onClick={handleSaveApiKey} size="sm">حفظ</Button>
          </div>
          <p className="text-xs text-gray-500">
            يمكنك الحصول على مفتاح API من <a href="https://elevenlabs.io" className="text-tunisia-blue underline" target="_blank" rel="noreferrer">elevenlabs.io</a>
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Bot className={`h-8 w-8 text-tunisia-blue ${isSpeaking ? 'animate-pulse' : ''}`} />
              <span className="font-[Noto_Kufi_Arabic] text-sm text-tunisia-blue">
                {isSpeaking ? (isPaused ? "متوقف مؤقتًا" : "يقرأ...") : "جاهز للقراءة"}
              </span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowApiKeyInput(true)}
              className="text-xs"
            >
              تغيير API Key
            </Button>
          </div>

          {isSpeaking && (
            <Progress value={progress} className="h-1" />
          )}
          
          <div className="flex gap-2">
            {isSpeaking && (
              <Button
                variant="outline"
                size="icon"
                onClick={isPaused ? resumeSpeech : pauseSpeech}
                className={`transition-all duration-300 ${isPaused ? 'bg-gray-100' : 'bg-green-50'}`}
              >
                {isPaused ? <Speaker className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
            )}
            <Button
              variant="outline"
              size="icon"
              onClick={handleSpeakText}
              className={`transition-colors duration-300 ${
                isSpeaking ? "bg-red-50 hover:bg-red-100" : "bg-tunisia-blue/10 hover:bg-tunisia-blue/20"
              }`}
            >
              {isSpeaking ? <MicOff className="h-5 w-5" /> : <Speaker className="h-5 w-5" />}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LessonReader;
