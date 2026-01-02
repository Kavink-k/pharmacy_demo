// src/components/PageDetail.tsx
import { useParallax } from '../hooks/useParallax';

export const PageDetail = ({ item }: { item: any }) => {
  const parallaxY = useParallax(0.2);

  return (
    <section id={item.href.replace('#', '')} className="relative py-24 overflow-hidden min-h-screen">
      {/* Background Parallax Effect */}
      <div 
        className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <span className="text-[15rem] font-bold text-[#184D47] uppercase leading-none">
          {item.label}
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-[#184D47] mb-12 text-center animate-fade-in">
          {item.label}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Vision Section */}
          <div className="bg-[#184D47] p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-[#FAD586] text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-[#D6EFC7] text-lg italic leading-relaxed">"{item.vision}"</p>
          </div>

          {/* Mission Section */}
          <div className="bg-white border-2 border-[#184D47] p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-[#184D47] text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-[#34495E] text-lg leading-relaxed">{item.mission}</p>
          </div>
        </div>

        {/* Content Render */}
        <div className="bg-white/50 backdrop-blur-md p-10 rounded-2xl border border-gray-100 shadow-lg">
          <p className="text-xl text-[#34495E] leading-loose">{item.content}</p>
        </div>
      </div>
    </section>
  );
};