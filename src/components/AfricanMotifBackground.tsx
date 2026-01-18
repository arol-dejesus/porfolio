import React from 'react';
import {
  AfricanPattern1,
  AfricanPattern2,
  AfricanPattern3,
  AfricanPattern4,
  AfricanPattern5,
  AfricanPattern6,
} from './AfricanPatterns';

export function AfricanMotifBackground() {
  // Create a grid of patterns
  const patterns = [
    AfricanPattern1,
    AfricanPattern2,
    AfricanPattern3,
    AfricanPattern4,
    AfricanPattern5,
    AfricanPattern6,
  ];

  // We'll create enough tiles to cover most screens
  const tileCount = 48; // 8x6 grid roughly

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* We use a grid layout to distribute patterns evenly */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-12 p-8 opacity-[0.03]">
         {Array.from({ length: tileCount }).map((_, i) => {
            const PatternComponent = patterns[i % patterns.length];
            return (
              <div key={i} className="w-full h-full flex items-center justify-center transform hover:scale-110 transition-transform duration-700">
                 <div className="w-16 h-16 md:w-24 md:h-24 rotate-12">
                   <PatternComponent />
                 </div>
              </div>
            )
         })}
      </div>
    </div>
  );
}
