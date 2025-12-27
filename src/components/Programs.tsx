import { useState } from 'react';
import { programs } from '../data/programs';
import { CheckCircle2, Clock } from 'lucide-react';

export const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <section id="programs" className="relative py-24 bg-gradient-to-b from-[#D6EFC7] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184D47] mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
            Choose from our comprehensive range of pharmacy programs designed to shape your future
            in pharmaceutical sciences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program, index) => (
            <button
              key={program.id}
              onClick={() => setActiveProgram(index)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProgram === index
                  ? 'bg-gradient-to-r from-[#184D47] to-[#2A6B62] text-white shadow-lg scale-105'
                  : 'bg-[rgba(24,77,71,0.1)] backdrop-blur-[8px] border border-[rgba(24,77,71,0.2)] text-[#184D47] hover:bg-[rgba(24,77,71,0.15)]'
              }`}
              style={activeProgram !== index ? { WebkitBackdropFilter: 'blur(8px)' } : undefined}
            >
              {program.title}
            </button>
          ))}
        </div>

        <div className="relative">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`transition-all duration-500 ${
                activeProgram === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div
                className="bg-[rgba(24,77,71,0.08)] backdrop-blur-[12px] border border-[rgba(250,213,134,0.2)] rounded-3xl p-8 lg:p-12 shadow-2xl"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[rgba(250,213,134,0.3)] border border-[rgba(250,213,134,0.4)] mb-6">
                      <Clock className="text-[#184D47] mr-2" size={18} />
                      <span className="text-[#184D47] font-semibold">{program.duration}</span>
                    </div>
                    <h3 className="text-4xl font-bold text-[#184D47] mb-6">{program.title}</h3>
                    <p className="text-lg text-[#34495E] mb-8 leading-relaxed">
                      {program.description}
                    </p>

                    <h4 className="text-xl font-bold text-[#184D47] mb-4">Program Highlights</h4>
                    <ul className="space-y-3">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2
                            className="text-[#FAD586] mr-3 mt-1 flex-shrink-0"
                            size={20}
                          />
                          <span className="text-[#34495E]">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FAD586] to-[#F5C456] text-[#184D47] font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        Apply for {program.title}
                      </a>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-[#184D47] to-[#2A6B62] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={
                          index === 0
                            ? 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            : index === 1
                            ? 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            : index === 2
                            ? 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            : 'https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        }
                        alt={program.title}
                        className="w-full h-full object-cover mix-blend-overlay opacity-70"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#FAD586] to-[#F5C456] rounded-full blur-3xl opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
