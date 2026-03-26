import React, { useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';

const ClientSection = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative w-full py-24 bg-[#FAFAFC] flex flex-col items-center justify-center font-sans overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        
        <div className="w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 via-transparent to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        
        <div className="text-center mb-16">
          <p className="text-[#72159c] font-bold text-sm tracking-widest uppercase mb-4">
            We are Symtera Technologies
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] leading-[1.3] md:leading-snug max-w-3xl mx-auto">
            We're Trusted Worldwide:<br />
            Serving Clients Across Multiple Countries
          </h2>
        </div>

        
        <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[650px] lg:h-[750px] mb-20">
          
         
          <div className="absolute left-0 md:left-[5%] top-0 md:top-[5%] w-[75%] md:w-[55%] h-[60%] md:h-[65%] rounded overflow-hidden shadow-2xl z-10 border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="/ClientSection/client_1.jpg" 
              alt="Team discussing project on whiteboard" 
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="absolute right-0 md:right-[5%] top-[20%] md:top-[25%] w-[40%] md:w-[32%] h-[35%] md:h-[38%] rounded overflow-hidden shadow-xl z-20 border-[6px] border-[#FAFAFC] transition-transform duration-500 hover:scale-[1.05]">
            <img 
              src="/ClientSection/client_2.jpg" 
              alt="Colleagues collaborating at desk" 
              className="w-full h-full object-cover"
            />
          </div>

          
           <div className="absolute left-[30%] md:left-[45%] bottom-[10%] md:bottom-[5%] w-[45%] md:w-[35%] h-[30%] md:h-[35%] rounded overflow-hidden shadow-xl z-30 border-[6px] border-[#FAFAFC] bg-white transition-transform duration-500 hover:scale-[1.05]">
            <img 
              src="/ClientSection/client_3.jpg" 
              alt="Office conference room" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>

        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-[1000px] mx-auto">
          
          
          <div 
            ref={card1Ref}
            data-animation="animate-fade-in-left"
            className="relative w-full md:w-1/2 bg-white px-8 py-10 md:py-12 rounded shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-6 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-gray-100 opacity-0"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#72159c] flex items-center justify-center flex-shrink-0 text-white shadow-md z-10 text-sm md:text-base">
              <FaCheck />
            </div>
            <div className="z-10 relative">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Machine Learning</h3>
              <p className="text-gray-400 text-sm">Support and Evolution</p>
            </div>
            
            <div className="absolute -bottom-6 -right-2 text-[120px] font-black text-gray-50 leading-none select-none z-0 group-hover:text-gray-100 transition-colors duration-300">
              01
            </div>
          </div>

          
          <div 
            ref={card2Ref}
            data-animation="animate-fade-in-up"
            className="relative w-full md:w-1/2 bg-white px-8 py-10 md:py-12 rounded shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-6 overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-gray-100 opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00a2e8] flex items-center justify-center flex-shrink-0 text-white shadow-md z-10 text-sm md:text-base">
              <FaCheck />
            </div>
            <div className="z-10 relative">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Artificial Intelligence</h3>
              <p className="text-gray-400 text-sm">Support and Evolution</p>
            </div>
            
            <div className="absolute -bottom-6 -right-2 text-[120px] font-black text-gray-50 leading-none select-none z-0 group-hover:text-gray-100 transition-colors duration-300">
              02
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientSection;
