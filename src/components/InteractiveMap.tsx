
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { landmarks } from "@/data/landmarks";
import { MapPin } from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [hoveredLandmark, setHoveredLandmark] = useState<string | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Clean up any previous map instance
    if (map.current) {
      map.current.remove();
    }

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [9.5375, 33.8869], // Center of Tunisia
        zoom: 6,
      });

      // Add markers for each landmark
      landmarks.forEach((landmark) => {
        const marker = new mapboxgl.Marker({
          color: '#0A3B99', // tunisia-blue
        })
          .setLngLat([landmark.coordinates.lng, landmark.coordinates.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div dir="rtl" class="p-2">
                  <h3 class="font-bold text-tunisia-blue font-[Noto_Kufi_Arabic]">${landmark.name}</h3>
                  <p class="text-sm text-gray-600 font-[Noto_Kufi_Arabic]">${landmark.shortDescription}</p>
                </div>
              `)
          )
          .addTo(map.current as mapboxgl.Map);

        // Add click event to navigate
        marker.getElement().addEventListener('click', () => {
          navigate(`/landmark/${landmark.id}`);
        });
      });

      // Handle map errors
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken, navigate]);

  if (!mapboxToken) {
    return (
      <div className="p-4 bg-white rounded-lg shadow text-center" dir="rtl">
        <h3 className="text-lg font-bold mb-4 font-[Noto_Kufi_Arabic]">أدخل مفتاح Mapbox الخاص بك</h3>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4 text-right"
          placeholder="مفتاح Mapbox العام"
          onChange={(e) => setMapboxToken(e.target.value)}
        />
        <p className="text-sm text-gray-600 font-[Noto_Kufi_Arabic]">
          يمكنك الحصول على مفتاح Mapbox مجاني من خلال التسجيل في 
          <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-tunisia-blue mx-1">
            موقع Mapbox
          </a>
        </p>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-[600px] rounded-lg overflow-hidden" />
  );
}
