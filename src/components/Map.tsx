import React, { useState } from 'react';
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
}

const Map: React.FC<MapProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]); // Default to East Dulwich

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200 relative">
      {/* Full-size Location Image */}
      <img
        src={selectedLocation.image}
        alt={`${selectedLocation.name} location`}
        className="w-full h-full object-cover transition-all duration-500"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/placeholder.svg'; // Fallback image
        }}
      />
      
      {/* Overlay with Location Markers */}
      <div className="absolute inset-0 bg-black/20">
        {/* Location Markers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* East Dulwich */}
            <div 
              className="absolute top-8 left-1/4 transform -translate-x-1/2"
              onMouseEnter={() => setSelectedLocation(locations[0])}
            >
              <div className="flex flex-col items-center group cursor-pointer">
                <div className={`px-4 py-2 rounded-full shadow-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedLocation.id === locations[0].id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/95 text-gray-800 group-hover:bg-white'
                }`}>
                  East Dulwich
                </div>
              </div>
            </div>
            
            {/* Forest Hill */}
            <div 
              className="absolute top-16 right-1/3 transform translate-x-1/2"
              onMouseEnter={() => setSelectedLocation(locations[1])}
            >
              <div className="flex flex-col items-center group cursor-pointer">
                <div className={`px-4 py-2 rounded-full shadow-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedLocation.id === locations[1].id 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white/95 text-gray-800 group-hover:bg-white'
                }`}>
                  Forest Hill
                </div>
              </div>
            </div>
            
            {/* Sydenham */}
            <div 
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              onMouseEnter={() => setSelectedLocation(locations[2])}
            >
              <div className="flex flex-col items-center group cursor-pointer">
                <div className={`px-4 py-2 rounded-full shadow-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedLocation.id === locations[2].id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/95 text-gray-800 group-hover:bg-white'
                }`}>
                  Sydenham
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Info Overlay */}
        <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="font-semibold">{selectedLocation.name}</span>
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {selectedLocation.address}
          </div>
        </div>
        
        {/* Location Counter */}
        <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-2 rounded-lg shadow-lg">
          <div className="text-sm text-gray-700 font-semibold">
            3 Locations
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
