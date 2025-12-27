import { useParallax } from '../hooks/useParallax';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';

export const Hero = () => {
  const parallaxY1 = useParallax(0.5);
  const parallaxY2 = useParallax(0.3);
  const parallaxY3 = useParallax(0.15);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#D6EFC7] via-[#FFFFFF] to-[#D6EFC7]"
        style={{ transform: `translateY(${parallaxY1}px)` }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="molecules" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="3" fill="#184D47" />
              <circle cx="75" cy="75" r="3" fill="#184D47" />
              <circle cx="50" cy="50" r="2" fill="#2A6B62" />
              <line x1="25" y1="25" x2="50" y2="50" stroke="#184D47" strokeWidth="1" />
              <line x1="50" y1="50" x2="75" y2="75" stroke="#184D47" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#molecules)" />
          </svg>
        </div>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center opacity-20"
        style={{ transform: `translateY(${parallaxY2}px)` }}
      >
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-[#184D47] to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-8"
            style={{ transform: `translateY(${parallaxY3}px)` }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[rgba(250,213,134,0.2)] backdrop-blur-[8px] border border-[rgba(250,213,134,0.3)]">
              <span className="text-[#184D47] font-semibold text-sm">PCI Approved Institution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-tight">
              Pioneering <span className="text-[#184D47]">Future</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#184D47] to-[#2A6B62]">
                Pharmacists
              </span>
            </h1>

            <p className="text-xl text-[#34495E] leading-relaxed max-w-xl">
              Where Science Meets Compassion. Excellence in pharmaceutical education, research, and
              healthcare innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#programs"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#184D47] to-[#2A6B62] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                Explore Programs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[rgba(250,213,134,0.3)] backdrop-blur-[8px] border border-[rgba(250,213,134,0.4)] text-[#184D47] font-semibold hover:bg-[rgba(250,213,134,0.5)] transition-all duration-300"
                style={{ WebkitBackdropFilter: 'blur(8px)' }}
              >
                Apply Now
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-[#FAD586]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#184D47]">25+</div>
                <div className="text-sm text-[#34495E]">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-[#FAD586]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#184D47]">5000+</div>
                <div className="text-sm text-[#34495E]">Alumni</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="text-[#FAD586]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#184D47]">100%</div>
                <div className="text-sm text-[#34495E]">Placement</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative bg-[rgba(214,239,199,0.2)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.15)] rounded-3xl p-8 shadow-2xl"
              style={{
                WebkitBackdropFilter: 'blur(12px)',
                transform: `translateY(${parallaxY3 * 0.5}px)`,
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-[#184D47] to-[#2A6B62] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Pharmacy Lab"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[8px] rounded-xl p-4 border border-[rgba(24,77,71,0.1)]">
                  <div className="text-2xl font-bold text-[#184D47]">State-of-art</div>
                  <div className="text-sm text-[#34495E]">Laboratories</div>
                </div>
                <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[8px] rounded-xl p-4 border border-[rgba(24,77,71,0.1)]">
                  <div className="text-2xl font-bold text-[#184D47]">Expert</div>
                  <div className="text-sm text-[#34495E]">Faculty</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FAD586] to-[#F5C456] rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#184D47] to-[#2A6B62] rounded-full blur-2xl opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
