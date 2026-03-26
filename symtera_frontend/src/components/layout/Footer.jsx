import React, { useState, useEffect } from 'react';
import { FaGlobe, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event to show/hide to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1b1c35] text-white pt-16 pb-8 relative font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section: Logo */}
        <div className="flex justify-center mb-16">
          <img src="/SymteraLogo.png" alt="Symtera Technologies" className="h-20 object-contain" />
        </div>

        {/* Middle Section: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-16">
          {/* PK Address */}
          <div className="flex flex-col items-center">
            <FaGlobe className="text-[#00a2e8] text-3xl mb-4" />
            <p className="text-[15px] mb-2 leading-relaxed">263 H1 Johar Town Lahore, PK</p>
            <p className="text-sm text-gray-400">PK Address</p>
          </div>

          {/* USA Address */}
          <div className="flex flex-col items-center">
            <FaGlobe className="text-[#00a2e8] text-3xl mb-4" />
            <p className="text-[15px] mb-2 leading-relaxed">
              1806 State Route 35, Suite 304<br />Oakhurst, NJ 07755, USA
            </p>
            <p className="text-sm text-gray-400">USA Address</p>
          </div>

          {/* Mailbox */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-[#00a2e8] text-3xl mb-4" />
            <p className="text-[15px] mb-2 leading-relaxed">sales@symteratech.com</p>
            <p className="text-sm text-gray-400">Our Mailbox</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-[#00a2e8] text-3xl mb-4" />
            <p className="text-[15px] mb-2 leading-relaxed">+1 (646) 505-7083</p>
            <p className="text-sm text-gray-400">Our Phone</p>
          </div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col items-center space-y-6">
          <p className="text-[14px] text-gray-300 text-center">
            Copyright © 2026 <span className="text-[#72159c] font-medium">Symtera Technologies LLC</span>. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0a66c2] hover:bg-gray-200 transition-colors">
              <FaLinkedinIn size={15} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1877f2] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={15} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1da1f2] hover:bg-gray-200 transition-colors">
              <FaTwitter size={15} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#e1306c] hover:bg-gray-200 transition-colors">
              <FaInstagram size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements Workspace */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4 z-50">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white flex items-center justify-center shadow-lg transition-opacity hover:bg-gray-100"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-[#72159c] text-lg font-light" />
          </button>
        )}

        {/* WhatsApp Chat Widget */}
        <div className="flex items-center space-x-3">
          <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded shadow-lg">
            Need Help? <strong>Chat with us</strong>
          </div>
          <a
            href="https://wa.me/16465057083"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-white text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
