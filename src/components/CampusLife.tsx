import { GraduationCap, Users, Heart, Trophy } from 'lucide-react';

const campusFeatures = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Modern classrooms and digital learning resources',
  },
  {
    icon: Users,
    title: 'Student Clubs',
    description: 'Active pharmaceutical associations and cultural clubs',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Sports facilities, gym, and wellness programs',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    description: 'National competitions and recognition',
  },
];

export const CampusLife = () => {
  return (
    <section id="campus" className="relative py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D6EFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184D47] mb-4">Campus Life</h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
            Experience a vibrant campus community where learning extends beyond the classroom through
            diverse activities and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {campusFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.15)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.7)] hover:border-[rgba(250,213,134,0.3)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#184D47] mb-2">{feature.title}</h3>
                <p className="text-[#34495E] text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-gradient-to-br from-[#184D47] to-[#2A6B62] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Campus"
                className="w-full h-full object-cover mix-blend-overlay opacity-70"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-[#2A6B62] to-[#184D47] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students"
                className="w-full h-full object-cover mix-blend-overlay opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
