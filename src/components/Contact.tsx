import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D6EFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#184D47] mb-4">Get in Touch</h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
            Ready to start your journey in pharmaceutical sciences? Contact us or apply now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div
              className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.15)] rounded-3xl p-8 mb-8"
              style={{ WebkitBackdropFilter: 'blur(12px)' }}
            >
              <h3 className="text-2xl font-bold text-[#184D47] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#184D47] mb-1">Address</div>
                    <div className="text-[#34495E]">
                      Vihan College of Pharmacy
                      <br />
                      123 Education Road, Pharmacy Campus
                      <br />
                      City, State - 123456
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#184D47] mb-1">Phone</div>
                    <div className="text-[#34495E]">+91 1234567890</div>
                    <div className="text-[#34495E]">+91 0987654321</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#184D47] mb-1">Email</div>
                    <div className="text-[#34495E]">admissions@vihancollege.edu</div>
                    <div className="text-[#34495E]">info@vihancollege.edu</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-video bg-[rgba(24,77,71,0.1)] rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9876543210123!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjUiTiA3M8KwNTEnMjQuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div
            className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[12px] border border-[rgba(24,77,71,0.15)] rounded-3xl p-8"
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
          >
            <h3 className="text-2xl font-bold text-[#184D47] mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#184D47] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(24,77,71,0.2)] text-[#184D47] placeholder-[#34495E] focus:outline-none focus:border-[#FAD586] focus:ring-2 focus:ring-[rgba(250,213,134,0.3)] transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#184D47] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(24,77,71,0.2)] text-[#184D47] placeholder-[#34495E] focus:outline-none focus:border-[#FAD586] focus:ring-2 focus:ring-[rgba(250,213,134,0.3)] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#184D47] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(24,77,71,0.2)] text-[#184D47] placeholder-[#34495E] focus:outline-none focus:border-[#FAD586] focus:ring-2 focus:ring-[rgba(250,213,134,0.3)] transition-all"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-[#184D47] mb-2">
                  Program of Interest *
                </label>
                <select
                  id="program"
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(24,77,71,0.2)] text-[#184D47] focus:outline-none focus:border-[#FAD586] focus:ring-2 focus:ring-[rgba(250,213,134,0.3)] transition-all"
                >
                  <option value="">Select a program</option>
                  <option value="dpharm">D.Pharm</option>
                  <option value="bpharm">B.Pharm</option>
                  <option value="mpharm">M.Pharm</option>
                  <option value="phdpharm">Ph.D. Pharmacy</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#184D47] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.7)] border border-[rgba(24,77,71,0.2)] text-[#184D47] placeholder-[#34495E] focus:outline-none focus:border-[#FAD586] focus:ring-2 focus:ring-[rgba(250,213,134,0.3)] transition-all resize-none"
                  placeholder="Tell us more about your interests..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#184D47] to-[#2A6B62] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Submit Application
                <Send className="ml-2" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
