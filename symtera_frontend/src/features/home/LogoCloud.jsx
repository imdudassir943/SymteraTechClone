import React from 'react';

const logos = [
  'Appparel.webp',
  'DonValleys.webp',
  'GearsPK.webp',
  'I2C.webp',
  'Orbit.webp',
  'Purely.webp',
  'QMS.webp',
  'Ramada.webp',
  'SKEnterprises.webp',
  'TheCorporate.webp',
  'Vitamin92.webp',
  'outfitter.webp'
];

const LogoCloud = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12 border-t border-gray-100">
      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] items-center">
        {/* First set of logos */}
        <div className="flex justify-around items-center">
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="mx-12 flex-shrink-0">
              <img 
                src={`/${logo}`} 
                alt={`Client Logo ${index}`} 
                className="max-h-24 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
        {/* Second set of logos for seamless loop */}
        <div className="flex justify-around items-center">
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="mx-12 flex-shrink-0">
              <img 
                src={`/${logo}`} 
                alt={`Client Logo ${index} Duplicate`} 
                className="max-h-24 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
