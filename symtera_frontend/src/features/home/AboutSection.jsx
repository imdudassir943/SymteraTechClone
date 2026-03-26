import React from 'react';

const AboutSection = () => {
  return (
    <section 
      className="relative w-full py-24 bg-[#1b1c35] bg-cover bg-center bg-no-repeat overflow-hidden font-sans"
      style={{ backgroundImage: `url('/BlueBG.webp')` }}
    >
      
      <div className="absolute inset-0 bg-[#1b1c35]/80 mix-blend-multiply z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          
          <div className="w-full lg:w-1/2 text-left">
            <h4 className="text-[#a5b4fc] text-xs font-bold tracking-widest uppercase mb-2">
              Expanding Possibilities
            </h4>
            <h4 className="text-[#a5b4fc] text-xs font-bold tracking-widest uppercase mb-6">
              With Business IT Solutions
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.2] mb-8 max-w-xl">
              Transform Your Business: Unleash the Power of Innovative Software Technology to Propel Your Growth
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
              Symtera Technologies is a professional and custom business IT solutions & digital marketing solution provider with a proven track record of excellent managed service to our regional and global clients.
            </p>
          </div>

          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-lg">
              
              
              <div className="relative aspect-square overflow-hidden rounded group shadow-xl">
                
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src="/ImageVal/vl1.jpg" 
                    alt="Our Mission" 
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                  
                  <div className="absolute inset-0 bg-[#0d3f4f]/80 mix-blend-multiply"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold z-10 text-center shadow-sm">
                    Our Mission
                  </h3>
                </div>
                
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#00a2e8] rotate-45 z-20"></div>
              </div>

              
              <div className="relative aspect-square overflow-hidden rounded group shadow-xl mt-12">
                
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src="/ImageVal/vl2.jpg" 
                    alt="Our Vision" 
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                  
                  <div className="absolute inset-0 bg-[#0d3f4f]/80 mix-blend-multiply"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold z-10 text-center shadow-sm">
                    Our Vision
                  </h3>
                </div>
                
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#00a2e8] rotate-45 z-20"></div>
              </div>

              
              <div className="relative aspect-square overflow-hidden rounded group shadow-xl -mt-12">
                
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src="/ImageVal/vl3.jpg" 
                    alt="History" 
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                  
                  <div className="absolute inset-0 bg-[#0d3f4f]/80 mix-blend-multiply"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold z-10 text-center shadow-sm">
                    History
                  </h3>
                </div>
                
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#00a2e8] rotate-45 z-20"></div>
              </div>

              
              <div className="relative aspect-square overflow-hidden rounded group shadow-xl mt-0">
                
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src="/ImageVal/vl4.jpg" 
                    alt="Values" 
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                  
                  <div className="absolute inset-0 bg-[#0d3f4f]/80 mix-blend-multiply"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold z-10 text-center shadow-sm">
                    Values
                  </h3>
                </div>
                
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#00a2e8] rotate-45 z-20"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
