import { departments } from '../data/departments';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export const Departments = () => {
  return (
    <section id="departments" className="relative py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D6EFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184D47] mb-4">
            Our Departments
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
            Explore specialized departments equipped with cutting-edge facilities and expert faculty
            dedicated to advancing pharmaceutical sciences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = (LucideIcons as any)[dept.icon] || LucideIcons.Beaker;

            return (
              <div
                key={dept.id}
                className="group relative bg-[rgba(24,77,71,0.08)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.15)] rounded-2xl p-8 hover:bg-[rgba(24,77,71,0.12)] hover:border-[rgba(250,213,134,0.3)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                style={{
                  WebkitBackdropFilter: 'blur(12px)',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FAD586] to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${dept.color}, ${dept.color}dd)`,
                    }}
                  >
                    <IconComponent className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#184D47] mb-4 group-hover:text-[#2A6B62] transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-[#34495E] leading-relaxed mb-6">{dept.description}</p>

                  <button className="inline-flex items-center text-[#184D47] font-semibold group-hover:text-[#FAD586] transition-colors">
                    Learn More
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                      size={18}
                    />
                  </button>
                </div>

                <div
                  className="absolute bottom-4 right-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ color: dept.color }}
                >
                  <IconComponent size={96} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div
            className="inline-block bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.1)] rounded-2xl p-8"
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
          >
            <h3 className="text-2xl font-bold text-[#184D47] mb-4">
              State-of-the-Art Facilities
            </h3>
            <p className="text-[#34495E] max-w-2xl mb-6">
              Each department features modern laboratories, advanced equipment, and collaborative
              spaces designed to foster innovation and hands-on learning experiences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#184D47] to-[#2A6B62] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Schedule a Campus Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
