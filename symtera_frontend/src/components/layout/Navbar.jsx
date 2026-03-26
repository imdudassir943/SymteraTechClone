import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
              <img src="/SymteraLogo.png" alt="Symtera Technologies" className="h-10 object-contain" />
            </Link>
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6 h-full items-center">
            
            <div className="relative group flex items-center h-16">
              <Link to="/" className="my-1 text-sm text-gray-700 font-bold hover:text-[#76bd45] group-hover:text-[#76bd45] transition-colors md:mx-4 md:my-0 inline-flex items-center gap-1">
                Home <span className="text-[10px] leading-none">▼</span>
              </Link>
              <div className="absolute left-0 md:left-4 top-full w-56 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                  <Link to="/home/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">ABOUT US</Link>
                  <Link to="/home/sub2" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">MANAGEMENT TEAM</Link>
                  <Link to="/home/sub3" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">CERTIFICATIONS</Link>
                  <Link to="/home/sub4" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">OUR AFFILIATIONS</Link>
                </div>
              </div>
            </div>

            <div className="relative group flex items-center h-16">
              <Link to="/products" className="my-1 text-sm text-gray-700 font-bold hover:text-[#76bd45] group-hover:text-[#76bd45] transition-colors md:mx-4 md:my-0 inline-flex items-center gap-1">
                Products & Services <span className="text-[10px] leading-none">▼</span>
              </Link>
              <div className="absolute left-0 md:left-4 top-full w-60 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                  {/* Nested Dropdown: PRODUCTS */}
                  <div className="relative group/products">
                    <Link to="/products/items" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black group-hover/products:text-black uppercase transition-colors tracking-wide">
                      <span>PRODUCTS</span> <span className="text-[9px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-64 pl-1 opacity-0 invisible group-hover/products:opacity-100 group-hover/products:visible transition-all duration-300 z-20">
                      <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                        <Link to="/products/education-erp" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">EDUCATION ERP</Link>
                        <Link to="/products/symscan" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">SYMSCAN</Link>
                        <Link to="/products/job-management" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">JOB MANAGEMENT SYSTEM</Link>
                        <Link to="/products/patient-management" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">PATIENT MANAGEMENT SYSTEM</Link>
                        <Link to="/products/assets-management" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">ASSETS MANAGEMENT SYSTEM</Link>
                      </div>
                    </div>
                  </div>

                  {/* Nested Dropdown: SERVICES */}
                  <div className="relative group/services">
                    <Link to="/services" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black group-hover/services:text-black uppercase transition-colors tracking-wide">
                      <span>SERVICES</span> <span className="text-[9px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-64 pl-1 opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300 z-20">
                      <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                        <Link to="/services/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">AI SERVICES</Link>
                        <Link to="/services/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">SOFTWARE DEVELOPMENT</Link>
                        <Link to="/services/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">E-COM DEVELOPMENT</Link>
                        <Link to="/services/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">SEO / SEM</Link>
                        <Link to="/services/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">SOCIAL MEDIA</Link>
                        <Link to="/services/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">ENTERPRISE CLOUD SERVICES</Link>
                        <Link to="/services/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">IT INFRASTRUCTURE</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group flex items-center h-16">
              <Link to="/cloud" className="my-1 text-sm text-gray-700 font-bold hover:text-[#76bd45] group-hover:text-[#76bd45] transition-colors md:mx-4 md:my-0 inline-flex items-center gap-1">
                Cloud Services <span className="text-[10px] leading-none">▼</span>
              </Link>
              <div className="absolute left-0 md:left-4 top-full w-64 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                  <Link to="/cloud/sub1" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">ENTERPRISE EMAIL SOLUTIONS</Link>
                  <Link to="/cloud/sub2" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">CLOUD ENTERPRISE SERVER</Link>
                  <Link to="/cloud/sub3" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">CPANEL HOSTING</Link>
                  <Link to="/cloud/sub4" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">WINDOW HOSTING</Link>
                  <Link to="/cloud/sub5" className="block px-5 py-3 text-[13px] font-bold text-white uppercase hover:text-black transition-colors tracking-wide">SHARED HOSTING PLUS</Link>
                </div>
              </div>
            </div>

            <div className="relative group flex items-center h-16">
              <Link to="/partners" className="my-1 text-sm text-gray-700 font-bold hover:text-[#76bd45] group-hover:text-[#76bd45] transition-colors md:mx-4 md:my-0 inline-flex items-center gap-1">
                Partners & Clients <span className="text-[10px] leading-none">▼</span>
              </Link>
              <div className="absolute left-0 md:left-4 top-full w-[260px] pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                  
                  {/* Nested Dropdown 1 */}
                  <div className="relative group/network">
                    <Link to="/partners/network" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black group-hover/network:text-black uppercase transition-colors tracking-wide">
                      <span>NETWORK SECURITY PARTNERS</span> <span className="text-[9px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-60 pl-1 opacity-0 invisible group-hover/network:opacity-100 group-hover/network:visible transition-all duration-300 z-20">
                      <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                        <Link to="/partners/network/barracuda" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">BARRACUDA</Link>
                        <Link to="/partners/network/fortinet" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">FORTINET</Link>
                        <Link to="/partners/network/sonicwall" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">SONICWALL</Link>
                        <Link to="/partners/network/sophos" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">SOPHOS</Link>
                        <Link to="/partners/network/safeutm" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">SAFEUTM</Link>
                        <Link to="/partners/network/sangfor" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">SANGFOR</Link>
                      </div>
                    </div>
                  </div>

                  {/* Nested Dropdown 2 */}
                  <div className="relative group/compliance">
                    <Link to="/partners/compliance" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black group-hover/compliance:text-black uppercase transition-colors tracking-wide">
                      <span>COMPLIANCE PARTNERS</span> <span className="text-[9px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-56 pl-1 opacity-0 invisible group-hover/compliance:opacity-100 group-hover/compliance:visible transition-all duration-300 z-20">
                      <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                        <Link to="/partners/compliance/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">DIGICERT SSL CERTIFICATES</Link>
                        <Link to="/partners/compliance/placeholder2" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">GEO TRUST SSL CERTIFICATES</Link>
                        <Link to="/partners/compliance/placeholder2" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">THAWTE TRUST SSL CERTIFICATES</Link>
                        <Link to="/partners/compliance/placeholder2" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">SECTIGO SSL CERTIFICATES</Link>
                        <Link to="/partners/compliance/placeholder2" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">GODADDY SSL CERTIFICATES</Link>
                        <Link to="/partners/compliance/placeholder2" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">SSL.COM SSL CERTIFICATES</Link>

                      </div>
                    </div>
                  </div>

                  {/* Nested Dropdown 3 */}
                  <div className="relative group/endpoint">
                    <Link to="/partners/endpoint" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black group-hover/endpoint:text-black uppercase transition-colors tracking-wide">
                      <span>END-POINT SECURITY PARTNERS</span> <span className="text-[9px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-56 pl-1 opacity-0 invisible group-hover/endpoint:opacity-100 group-hover/endpoint:visible transition-all duration-300 z-20">
                      <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                        <Link to="/partners/endpoint/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">KASPERSKY</Link>
                        <Link to="/partners/endpoint/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">BITDEFENDER</Link>
                      </div>
                    </div>
                  </div>

                  {/* Nested Dropdown 4 */}
                  <div className="relative group/other">
                    <Link to="/partners/other" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black group-hover/other:text-black uppercase transition-colors tracking-wide">
                      <span>OTHER BRAND PARTNERS</span> <span className="text-[9px]">▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-56 pl-1 opacity-0 invisible group-hover/other:opacity-100 group-hover/other:visible transition-all duration-300 z-20">
                      <div className="bg-[#76bd45] rounded shadow-[0_8px_30px_rgb(0,0,0,0.15)] divide-y divide-white/50 divide-dotted">
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">DELL</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">CISCO</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">HP</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">LENOVO</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">MICROSOFT</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">HUAWEI</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">D-LINK</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">CPANEL</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">GRANDSTREAM</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">UBIQUITI</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">AMAZOM WEB SERVICES</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">VEEFAM</Link>
                        <Link to="/partners/other/placeholder" className="block px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">HIKVISION</Link>
                      </div>
                    </div>
                  </div>

                  {/* Base Items (No arrows) */}
                  <Link to="/partners/general" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">
                    <span>PARTNERS</span>
                  </Link>
                  <Link to="/partners/clients" className="w-full flex justify-between items-center px-5 py-3 text-[13px] font-bold text-white hover:text-black uppercase transition-colors tracking-wide">
                    <span>VALUABLE CLIENTS</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center h-16">
              <Link to="/solutions" className="my-1 text-sm text-gray-700 font-bold hover:text-[#76bd45] transition-colors md:mx-4 md:my-0">Solutions</Link>
            </div>
            
            <div className="flex items-center h-16">
              <Link to="/contact" className="my-1 text-sm text-gray-700 font-bold hover:text-[#76bd45] transition-colors md:mx-4 md:my-0">Contact Us</Link>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-500" />
            <div className="ml-2 text-sm">
              <p className="font-medium">Have Any Questions?</p>
              <p className="text-gray-600">+1 (646) 505-7083</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
