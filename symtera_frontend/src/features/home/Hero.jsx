import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const slides = [
  {
    subtitle: "Next-Generation AI Solutions",
    title: "Powered by Generative AI, LLMs, and RAG Architectures",
    description: "We build intelligent software systems that transform complex data into actionable business intelligence",
    image: "/Hero/generative_ai_2.jpg",
  },
  {
    subtitle: "Advanced AI Solutions for Real-World Impact",
    title: "Intelligent Systems Built for Scale and Security",
    description: "We design and deploy enterprise-ready AI systems tailored to complex business challenges.",
    image: "/Hero/generative_ai_1.jpg",
  },
  {
    subtitle: "Production-Grade Generative AI Solutions",
    title: "Context-Aware, Intelligence-Driven, and Secure by Design",
    description: "We engineer AI platforms that reason, retrieve, and deliver accurate outcomes.",
    image: "/Hero/generative_ai_3.jpg",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // Auto-slide every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] min-h-[600px] xl:min-h-[800px] overflow-hidden bg-black text-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-start max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32 z-20">
            <div className="max-w-3xl">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-200 font-light tracking-wide drop-shadow-md"
              >
                {slide.subtitle}
              </motion.p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-xl flex flex-wrap pb-2">
                {slide.title.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-[0.25em] whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        initial={{ opacity: 0, x: 80 }}
                        animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                        transition={{
                          duration: 0.5,
                          delay: index === currentSlide ? 0.3 + (wordIndex * 0.1) + (charIndex * 0.05) : 0,
                          type: "spring",
                          stiffness: 120,
                          damping: 12
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.p 
                initial={{ opacity: 0, x: 30 }}
                animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed drop-shadow-md"
              >
                {slide.description}
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="bg-[#00BEFF] hover:bg-[#009ACE] text-white px-8 py-3.5 font-bold text-lg transition-colors duration-300 shadow-lg hover:shadow-cyan-500/50 rounded-xl"
              >
                Contact Now
              </motion.button>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls Wrapper */}
      <div className="absolute bottom-10 inset-x-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center pointer-events-auto">
          <div className="flex items-center space-x-6 text-xl">
            <button 
              onClick={prevSlide} 
              className="hover:text-[#00BEFF] transition-colors p-2 -ml-2"
              aria-label="Previous Slide"
            >
              <FiArrowLeft size={24} />
            </button>
            <span className="font-medium text-lg tracking-widest text-gray-400">
              <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>/
              {String(slides.length).padStart(2, '0')}
            </span>
            <button 
              onClick={nextSlide} 
              className="hover:text-[#00BEFF] transition-colors p-2"
              aria-label="Next Slide"
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
