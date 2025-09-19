import React from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  color: string;
  image: string;
}

interface MapProps {
  locations: Location[];
  selectedLocation: string;
}

const Map: React.FC<MapProps> = ({ locations, selectedLocation }) => {
  const currentLocation = locations.find(loc => loc.id === selectedLocation) || locations[0];

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
      {/* Full-size Location Image */}
      <img
        src={currentLocation.image}
        alt={`${currentLocation.name} location`}
        className="w-full h-full object-cover transition-all duration-500"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.svg'; // Fallback image
        }}
      />
      
      {/* Location Info Overlay */}
      <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="font-semibold">{currentLocation.name}</span>
        </div>
        <div className="text-xs text-gray-600 mt-1">
          {currentLocation.address}
        </div>
      </div>
      
    </div>
  );
};

export default Map;
