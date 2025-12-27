import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../data/navigation';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(24,77,71,0.15)] backdrop-blur-[10px] border-b border-[rgba(250,213,134,0.2)] shadow-lg'
          : 'bg-[rgba(24,77,71,0.08)] backdrop-blur-[8px]'
      }`}
      style={{
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-[#184D47]">Vihan College</h1>
                <p className="text-xs text-[#34495E]">of Pharmacy</p>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#34495E] hover:text-[#FAD586] font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FAD586] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FAD586] to-[#F5C456] text-[#184D47] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

          <button
            className="lg:hidden text-[#184D47] hover:text-[#FAD586] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-[rgba(214,239,199,0.95)] backdrop-blur-[12px] border-t border-[rgba(24,77,71,0.15)]"
          style={{ WebkitBackdropFilter: 'blur(12px)' }}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-[#34495E] hover:bg-[rgba(24,77,71,0.1)] hover:text-[#184D47] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 rounded-lg bg-gradient-to-r from-[#FAD586] to-[#F5C456] text-[#184D47] font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
