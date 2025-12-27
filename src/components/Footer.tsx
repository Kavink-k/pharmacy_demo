import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-[#184D47] overflow-hidden">
      <div
        className="absolute inset-0 bg-[rgba(214,239,199,0.05)] backdrop-blur-[8px]"
        style={{ WebkitBackdropFilter: 'blur(8px)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="footer-pattern"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="2" fill="#FAD586" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#footer-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FAD586] to-[#F5C456] flex items-center justify-center">
                <span className="text-[#184D47] font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Vihan College</h3>
                <p className="text-[#D6EFC7] text-sm">of Pharmacy</p>
              </div>
            </div>
            <p className="text-[#D6EFC7] text-sm leading-relaxed mb-6">
              Pioneering excellence in pharmaceutical education and research for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(250,213,134,0.2)] flex items-center justify-center hover:bg-[rgba(250,213,134,0.3)] transition-colors"
              >
                <Facebook className="text-[#FAD586]" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(250,213,134,0.2)] flex items-center justify-center hover:bg-[rgba(250,213,134,0.3)] transition-colors"
              >
                <Twitter className="text-[#FAD586]" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(250,213,134,0.2)] flex items-center justify-center hover:bg-[rgba(250,213,134,0.3)] transition-colors"
              >
                <Instagram className="text-[#FAD586]" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(250,213,134,0.2)] flex items-center justify-center hover:bg-[rgba(250,213,134,0.3)] transition-colors"
              >
                <Linkedin className="text-[#FAD586]" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#departments"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#campus"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  Campus Life
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#programs"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  D.Pharm
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  B.Pharm
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  M.Pharm
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm"
                >
                  Ph.D. Pharmacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[#FAD586] flex-shrink-0 mt-1" size={16} />
                <span className="text-[#D6EFC7] text-sm">
                  123 Education Road, Pharmacy Campus, City - 123456
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-[#FAD586] flex-shrink-0" size={16} />
                <span className="text-[#D6EFC7] text-sm">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[#FAD586] flex-shrink-0" size={16} />
                <span className="text-[#D6EFC7] text-sm">info@vihancollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(214,239,199,0.2)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#D6EFC7] text-sm">
              © 2024 Vihan College of Pharmacy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-[#D6EFC7] hover:text-[#FAD586] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
