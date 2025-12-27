import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#D6EFC7] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184D47] mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
            Hear from our alumni about their transformative experiences at Vihan College of
            Pharmacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.15)] rounded-2xl p-8 hover:bg-[rgba(255,255,255,0.7)] hover:border-[rgba(250,213,134,0.3)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{
                WebkitBackdropFilter: 'blur(12px)',
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Quote className="text-[#FAD586] mb-4" size={32} />
              <p className="text-[#34495E] mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="border-t border-[rgba(24,77,71,0.1)] pt-4">
                <div className="font-bold text-[#184D47]">{testimonial.name}</div>
                <div className="text-sm text-[#34495E]">{testimonial.batch}</div>
                <div className="text-sm text-[#2A6B62] font-semibold mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
