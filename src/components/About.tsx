import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: 'Accredited Excellence',
    description: 'PCI approved curriculum with NAAC A+ accreditation, ensuring world-class pharmaceutical education standards.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Industry-aligned programs combining theoretical knowledge with practical skills and research opportunities.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified professors with extensive industry and research experience guiding your academic journey.',
  },
  {
    icon: TrendingUp,
    title: 'Career Success',
    description: '100% placement assistance with tie-ups with leading pharmaceutical companies and healthcare institutions.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D6EFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184D47] mb-4">
            The Vihan Advantage
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
            Discover why thousands of students choose Vihan College of Pharmacy for their
            pharmaceutical education and career success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group bg-[rgba(24,77,71,0.1)] backdrop-blur-[12px] border border-[rgba(250,213,134,0.15)] rounded-2xl p-6 hover:bg-[rgba(24,77,71,0.15)] hover:border-[rgba(250,213,134,0.4)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                style={{
                  WebkitBackdropFilter: 'blur(12px)',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#184D47] mb-3">{advantage.title}</h3>
                <p className="text-[#34495E] leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.1)] rounded-3xl p-8 lg:p-12" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#184D47] mb-6">
                Building Leaders in Pharmaceutical Sciences
              </h3>
              <p className="text-[#34495E] mb-4 leading-relaxed">
                Established with a vision to create healthcare professionals who blend scientific
                expertise with compassionate care, Vihan College of Pharmacy has been at the
                forefront of pharmaceutical education for over two decades.
              </p>
              <p className="text-[#34495E] mb-4 leading-relaxed">
                Our state-of-the-art infrastructure, research facilities, and industry partnerships
                provide students with unparalleled opportunities to excel in their chosen fields.
              </p>
              <p className="text-[#34495E] leading-relaxed">
                From drug discovery to patient care, our graduates are making significant
                contributions to healthcare systems worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#184D47] to-[#2A6B62] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Campus"
                  className="w-full h-full object-cover mix-blend-overlay opacity-70"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FAD586] to-[#F5C456] rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-[#184D47]">25+</div>
                <div className="text-sm text-[#184D47] font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
