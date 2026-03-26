import React from 'react';
import Hero from '../features/home/Hero';
import LogoCloud from '../features/home/LogoCloud';
import ClientSection from '../features/home/ClientSection';
import AboutSection from '../features/home/AboutSection';
import ServiceSection from '../features/home/ServiceSection';
import AboutUs from '../features/home/AboutUs';

const Home = () => {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ClientSection />
      <AboutSection />
      <ServiceSection />
      <AboutUs />
    </>
  );
};

export default Home;
