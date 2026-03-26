import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden font-sans">
      {/* Background shape/pattern container */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 lg:w-96 h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 h-full w-full stroke-gray-300">
          <path d="M 0 100 L 150 100 L 200 150 L 300 150" strokeWidth="1" />
          <path d="M 0 150 L 100 150 L 150 200 L 200 200" strokeWidth="1" />
          <path d="M 0 250 L 250 250 L 300 300 L 400 300" strokeWidth="1" />
          <path d="M 0 350 L 200 350 L 250 300 L 350 300" strokeWidth="1" />
          <path d="M 0 450 L 100 450 L 150 500 L 250 500" strokeWidth="1" />
          <path d="M 0 550 L 150 550 L 200 600 L 300 600" strokeWidth="1" />
          <circle cx="150" cy="100" r="3" fill="#cbd5e1" stroke="none" />
          <circle cx="200" cy="150" r="4" fill="#cbd5e1" stroke="none" />
          <circle cx="100" cy="150" r="3" fill="#cbd5e1" stroke="none" />
          <circle cx="150" cy="200" r="4" fill="#cbd5e1" stroke="none" />
          <circle cx="250" cy="250" r="5" fill="#cbd5e1" stroke="none" />
          <circle cx="200" cy="350" r="4" fill="#cbd5e1" stroke="none" />
          <circle cx="100" cy="450" r="3" fill="#cbd5e1" stroke="none" />
          <circle cx="150" cy="550" r="4" fill="#cbd5e1" stroke="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Block */}
          <div className="w-full lg:w-[55%] text-left pl-0 lg:pl-[10%]">
            <h4 className="text-[#8847ff] text-sm font-bold uppercase tracking-wider mb-3">
              ABOUT US
            </h4>
            <h2 className="text-4xl md:text-[50px] font-extrabold text-[#111827] leading-[1.1] mb-6">
              Who we are?
            </h2>
            <p className="text-[#6b7280] text-base md:text-[15px] leading-[1.8] max-w-[580px]">
              Symtera technologies is an IT solution company and part of a
              multi-national group of companies with headquarters in the USA
              and a global footprint. We specialize in business IT solution
              includes ICT, AI, BI, data center, web apps, mobile apps,
              eCommerce suite, SMS notifications services, digital
              identifications services, SEO SEM, hosting services cloud service,
              IT infrastructure, and customized solution.
            </p>
          </div>

          {/* Right Logo Block */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-center pr-0 lg:pr-[5%] mt-12 lg:mt-0">
            <img 
              src="/SymteraLogo.png" 
              alt="Symtera Technologies" 
              className="max-w-full w-[450px] md:w-[600px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
