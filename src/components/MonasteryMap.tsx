import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const monasteries = [
  { name: "Rumtek Monastery", lat: 27.3100, lng: 88.5800, info: "The largest monastery in Sikkim" },
  { name: "Pemayangtse Monastery", lat: 27.3059, lng: 88.2461, info: "One of the oldest monasteries" },
  { name: "Tashiding Monastery", lat: 27.3333, lng: 88.2667, info: "Sacred monastery on hilltop" },
  { name: "Enchey Monastery", lat: 27.3389, lng: 88.6142, info: "Important Nyingma monastery" },
  { name: "Phensang Monastery", lat: 27.7000, lng: 88.5000, info: "Northern Sikkim gem" },
];

const MonasteryMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map centered on Sikkim
    mapInstance.current = L.map(mapRef.current).setView([27.3389, 88.6142], 10);

    // Add OpenStreetMap tiles with attribution
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      maxZoom: 18,
    }).addTo(mapInstance.current);

    // Custom monastery icon
    const monasteryIcon = L.divIcon({
      html: `<div style="
        width: 24px; 
        height: 24px; 
        background: hsl(35, 85%, 58%); 
        border: 2px solid hsl(45, 95%, 65%);
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 8px; 
          height: 8px; 
          background: hsl(25, 8%, 8%); 
          border-radius: 50%;
        "></div>
      </div>`,
      className: "monastery-marker",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // Add monastery markers
    monasteries.forEach((monastery) => {
      const marker = L.marker([monastery.lat, monastery.lng], {
        icon: monasteryIcon,
      }).addTo(mapInstance.current!);

      marker.bindPopup(`
        <div style="font-family: system-ui; padding: 8px;">
          <h3 style="margin: 0 0 8px 0; color: hsl(35, 85%, 58%); font-size: 14px; font-weight: 600;">
            ${monastery.name}
          </h3>
          <p style="margin: 0; color: hsl(25, 15%, 40%); font-size: 12px;">
            ${monastery.info}
          </p>
        </div>
      `);
    });

    // Add a subtle style to the map
    const style = document.createElement("style");
    style.textContent = `
      .leaflet-container {
        border-radius: 12px;
        border: 1px solid hsl(25, 15%, 22%);
      }
      .leaflet-popup-content-wrapper {
        background: hsl(25, 12%, 12%);
        border-radius: 8px;
        border: 1px solid hsl(35, 85%, 58%);
      }
      .leaflet-popup-tip {
        background: hsl(25, 12%, 12%);
        border: 1px solid hsl(35, 85%, 58%);
      }
      .monastery-marker {
        animation: monastery-pulse 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MonasteryMap;