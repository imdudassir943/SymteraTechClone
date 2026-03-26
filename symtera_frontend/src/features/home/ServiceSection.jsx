import React from 'react';
import { MdMemory, MdCloud, MdStar, MdSettings, MdPieChart, MdOutlineCloudSync } from 'react-icons/md';

const services = [
  {
    title: 'IoT Solutions',
    description: 'Internet of things (IoT) is a modern infrastructure of things interconnected, centrally managed, and controlled. We specialize in automation by using modern technologies sensors and their integration with mobile and web applications.',
    icon: MdMemory,
  },
  {
    title: 'Cloud Services',
    description: 'Businesses require new management solutions. So that they can optimize performance, control costs, and secure complicated mixes of apps and environments. Regardless of the fact whether they are inside the data center or in the cloud.',
    icon: MdCloud,
  },
  {
    title: 'IT Infrastructure',
    description: 'We address our client\'s key business assets from the multiple perspectives required to allow an organization to become an effective digital enterprise with the help of our end-to-end IT infrastructure solutions.',
    icon: MdStar,
  },
  {
    title: 'System Integrations',
    description: 'All modern businesses use different apps for different purposes. The biggest challenge is to communicate across all apps and systems effectively. Therefore, we focus on application integration and API development.',
    icon: MdSettings,
  },
  {
    title: 'Business Intelligence (BI)',
    description: 'We render a full range of BI services to help companies leverage business analytics. That allows driving cost-saving, improving performance, and expanding business. As we have hands-on experience in MS-SQL server SharePoint and Power BI.',
    icon: MdPieChart,
  },
  {
    title: 'Artificial Intelligence (AI)',
    description: 'We have the experience to design & develop AI and ML (machine learning) based solutions through signal processing multi-source information knowledge-based and expert systems. Symtera technologies collaborate with multiple startups and top-level universities.',
    icon: MdOutlineCloudSync, 
  }
];

const ServiceSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-gray-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h4 className="text-[#8847ff] text-sm font-bold uppercase tracking-widest mb-3">
            ENTERPRISE IT SERVICES
          </h4>
          <h2 className="text-4xl md:text-[46px] font-extrabold text-[#111827] leading-[1.2]">
            Introduce Prime <br /> Services for Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="relative bg-white pt-12 pb-14 px-10 shadow-[0_5px_25px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-50 transition-all duration-300 overflow-hidden group"
              >
              
                <div className="absolute top-0 right-0 w-[110px] h-[110px] bg-gradient-to-br from-[#00bcec] to-[#006bb3] rounded-bl-[100%] flex items-start justify-end p-[22px] transition-transform duration-300 group-hover:scale-105 origin-top-right">
                  <Icon className="text-white text-[32px] mt-[-2px] mr-[-2px]" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-[#111827] mb-5 pr-14 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] text-[15px] leading-[1.8] font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
