import { Microscope, FlaskConical, Dna, TrendingUp } from 'lucide-react';

const researchAreas = [
  {
    icon: Microscope,
    title: 'Drug Discovery',
    description: 'Novel therapeutic compounds and advanced drug delivery systems',
    stats: '50+ Research Papers',
  },
  {
    icon: FlaskConical,
    title: 'Pharmaceutical Analysis',
    description: 'Quality control and analytical method development',
    stats: '15+ Patents',
  },
  {
    icon: Dna,
    title: 'Pharmacogenomics',
    description: 'Personalized medicine and genetic research',
    stats: '10+ Collaborations',
  },
  {
    icon: TrendingUp,
    title: 'Clinical Research',
    description: 'Evidence-based practice and patient outcomes',
    stats: '20+ Trials',
  },
];

export const Research = () => {
  return (
    <section id="research" className="relative py-24 bg-gradient-to-b from-[#D6EFC7] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184D47] mb-4">
            Research & Innovation
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
            Advancing pharmaceutical sciences through groundbreaking research and innovative
            solutions to global healthcare challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.15)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.7)] hover:border-[rgba(250,213,134,0.3)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#184D47] mb-2">{area.title}</h3>
                <p className="text-[#34495E] mb-4 text-sm">{area.description}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-[rgba(250,213,134,0.3)] border border-[rgba(250,213,134,0.4)]">
                  <span className="text-xs font-semibold text-[#184D47]">{area.stats}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-[#184D47] to-[#2A6B62] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Research Lab"
                className="w-full h-full object-cover mix-blend-overlay opacity-70"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#FAD586] to-[#F5C456] rounded-full blur-3xl opacity-60"></div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#184D47] mb-6">
              Leading Innovation in Pharmaceutical Sciences
            </h3>
            <p className="text-[#34495E] mb-4 leading-relaxed">
              Our research centers are equipped with cutting-edge technology and instrumentation,
              enabling faculty and students to pursue groundbreaking research across multiple
              disciplines.
            </p>
            <p className="text-[#34495E] mb-6 leading-relaxed">
              From molecular biology to clinical trials, our research initiatives contribute to the
              advancement of pharmaceutical knowledge and the development of innovative therapies.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FAD586] to-[#F5C456] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#184D47] font-bold text-xl">₹</span>
                </div>
                <div>
                  <div className="font-bold text-[#184D47]">5 Cr+ Research Funding</div>
                  <div className="text-sm text-[#34495E]">Annual research grants and funding</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">30+</span>
                </div>
                <div>
                  <div className="font-bold text-[#184D47]">Active Research Projects</div>
                  <div className="text-sm text-[#34495E]">Ongoing research initiatives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
