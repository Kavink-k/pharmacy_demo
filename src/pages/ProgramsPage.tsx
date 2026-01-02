import React, { useState } from 'react';
import { useParallax } from '../hooks/useParallax';
import { courseData } from '../data/courseData';
import { ChevronRight, GraduationCap, Clock, CheckCircle2 } from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState(courseData[0]);
  const parallaxHeader = useParallax(0.5);
const [isFading, setIsFading] = useState(false);



  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[45vh] overflow-hidden flex items-center justify-center bg-[#184D47]">
        <div 
          className="absolute inset-0 opacity-15 text-white text-[12rem] font-bold whitespace-nowrap select-none"
          style={{ transform: `translateY(${parallaxHeader}px)` }}
        >
          ACADEMICS
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter animate-fade-in">
            Explore Our Programs
          </h1>
          <p className="text-[#FAD586] mt-4 text-xl font-medium">Shaping the Future of Pharmaceutical Care</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/3 space-y-4">
            <h2 className="text-2xl font-bold text-[#184D47] mb-8 border-l-4 border-[#FAD586] pl-4 uppercase">
              Courses Offered
            </h2>
            <div className="flex flex-col space-y-3">
              {courseData.map((course) => (
                <button
                  key={course.id}
onClick={() => {
  if (course.id === activeCourse.id) return;

  setIsFading(true);

  setTimeout(() => {
    setActiveCourse(course);
    setIsFading(false);
  }, 300); // fade duration
}}
                  className={`flex items-center justify-between p-5 rounded-xl transition-all duration-300 group shadow-sm border ${
                    activeCourse.id === course.id
                      ? 'bg-[#184D47] text-white border-[#184D47] translate-x-2'
                      : 'bg-white text-[#34495E] border-gray-100 hover:bg-[#D6EFC7]/20'
                  }`}
                >
                  <span className="font-bold uppercase text-sm tracking-wide">
                    {course.courseName}
                  </span>
                  <ChevronRight 
                    size={20} 
                    className={`transition-transform duration-300 ${
                      activeCourse.id === course.id ? 'translate-x-1 text-[#FAD586]' : 'text-gray-300'
                    }`} 
                  />
                </button>
              ))}
            </div>
          </aside>

          {/* Dynamic Content Area */}
          <main className="lg:w-2/3">
<div
  className={`transition-all duration-300 transform ${
    isFading
      ? 'opacity-0 translate-x-4'
      : 'opacity-100 translate-x-0'
  }`}
>
              
              {/* Parallax Background Card */}
              <div className="relative h-[300px] rounded-3xl overflow-hidden mb-12 shadow-2xl group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${activeCourse.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col justify-end p-8">
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-[#FAD586] text-[#184D47] px-4 py-2 rounded-full flex items-center text-sm font-bold shadow-lg">
                      <Clock size={16} className="mr-2" /> {activeCourse.courseDetails.duration}
                    </div>
                    <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center text-sm font-medium border border-white/30">
                      <GraduationCap size={16} className="mr-2" /> {activeCourse.courseDetails.eligibility}
                    </div>
                  </div>
                </div>
              </div>

              {/* Textual Content */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-3xl font-bold text-[#184D47] mb-6">About the Department</h3>
                  <div className="space-y-4 text-lg text-[#34495E] leading-relaxed">
                    {activeCourse.departmentAbout.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#184D47] mb-6">Career Opportunities</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeCourse.courseOpportunities.map((opp, i) => (
                      <div key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                        <CheckCircle2 size={20} className="text-[#FAD586] mt-1 mr-3 flex-shrink-0" />
                        <span className="text-[#34495E] font-medium">{opp}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};