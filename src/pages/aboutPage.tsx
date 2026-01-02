import React from 'react';
import {useParallax }from "/home/kavin/Desktop/Demo/pharmacy_demo/src/hooks/useParallax";
import { aboutData } from "/home/kavin/Desktop/Demo/pharmacy_demo/src/data/AboutData";

export const AboutPage: React.FC = () => {
  const parallaxHeader = useParallax(0.5);

  return (
    <div className="pt-20 bg-white">
      {/* Parallax Hero Header */}
      <div className="relative h-[40vh] overflow-hidden flex items-center justify-center bg-[#184D47]">
        <div 
          className="absolute inset-0 opacity-20 text-white text-[10rem] font-bold whitespace-nowrap select-none"
          style={{ transform: `translateY(${parallaxHeader}px)` }}
        >
          DISCOVER VIHAN
        </div>
        <h1 className="relative z-10 text-5xl font-bold text-white uppercase tracking-widest animate-fade-in">
          About Our Institution
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">
        {aboutData.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <section 
              key={section.id} 
              id={section.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 scroll-mt-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Aside Content (Section Name) */}
              <aside className="lg:w-1/4 text-center lg:text-left">
                <span className="text-[#FAD586] font-bold uppercase tracking-widest text-sm">
                  {section.asideTitle}
                </span>
                <h2 className="text-3xl font-bold text-[#184D47] mt-2">
                  {section.title}
                </h2>
                <div className="w-12 h-1 bg-[#184D47] mx-auto lg:mx-0 mt-4"></div>
              </aside>

              {/* Descriptive Content */}
              <div className="lg:w-2/4 space-y-6 text-[#34495E] leading-relaxed text-lg">
                {section.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Zigzag Image with Hover Effect */}
              <div className="lg:w-1/4">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#184D47]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};