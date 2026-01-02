// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { navigationItems } from '../data/navigation';

// import { ChevronDown } from 'lucide-react';

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  // return (
  //   <nav
  //     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  //       isScrolled
  //         ? 'bg-[rgba(24,77,71,0.15)] backdrop-blur-[10px] border-b border-[rgba(250,213,134,0.2)] shadow-lg'
  //         : 'bg-[rgba(24,77,71,0.08)] backdrop-blur-[8px]'
  //     }`}
  //     style={{
  //       WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'blur(8px)',
  //     }}
  //   >
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center justify-between h-20">
  //         <div className="flex items-center">
  //           <a href="#home" className="flex items-center space-x-3">
  //             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center shadow-lg">
  //               <span className="text-white font-bold text-xl">V</span>
  //             </div>
  //             <div className="hidden md:block">
  //               <h1 className="text-xl font-bold text-[#184D47]">Vihan College</h1>
  //               <p className="text-xs text-[#34495E]">of Pharmacy</p>
  //             </div>
  //           </a>
  //         </div>

  //         <div className="hidden lg:flex items-center space-x-8">
  //           {navigationItems.map((item) => (
  //             <a
  //               key={item.href}
  //               href={item.href}
  //               className="text-[#34495E] hover:text-[#FAD586] font-medium transition-colors duration-200 relative group"
  //             >
  //               {item.label}
  //               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FAD586] group-hover:w-full transition-all duration-300"></span>
  //             </a>
  //           ))}
  //         </div>

  //         <div className="hidden lg:block">
  //           <a
  //             href="#contact"
  //             className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FAD586] to-[#F5C456] text-[#184D47] font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
  //           >
  //             Apply Now
  //           </a>
  //         </div>

  //         <button
  //           className="lg:hidden text-[#184D47] hover:text-[#FAD586] transition-colors"
  //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  //         >
  //           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
  //         </button>
  //       </div>
  //     </div>

  //     {isMobileMenuOpen && (
  //       <div
  //         className="lg:hidden bg-[rgba(214,239,199,0.95)] backdrop-blur-[12px] border-t border-[rgba(24,77,71,0.15)]"
  //         style={{ WebkitBackdropFilter: 'blur(12px)' }}
  //       >
  //         <div className="px-4 pt-2 pb-4 space-y-2">
  //           {navigationItems.map((item) => (
  //             <a
  //               key={item.href}
  //               href={item.href}
  //               className="block px-4 py-3 rounded-lg text-[#34495E] hover:bg-[rgba(24,77,71,0.1)] hover:text-[#184D47] font-medium transition-colors"
  //               onClick={() => setIsMobileMenuOpen(false)}
  //             >
  //               {item.label}
  //             </a>
  //           ))}
  //           <a
  //             href="#contact"
  //             className="block px-4 py-3 rounded-lg bg-gradient-to-r from-[#FAD586] to-[#F5C456] text-[#184D47] font-semibold text-center"
  //             onClick={() => setIsMobileMenuOpen(false)}
  //           >
  //             Apply Now
  //           </a>
  //         </div>
  //       </div>
  //     )}
  //   </nav>
  // );


//   return (
//     <nav className="...">
//       <div className="flex items-center space-x-8">
//         {navigationItems.map((item) => (
//           <div key={item.label} className="relative group py-4">
//             <a href={item.href} className="flex items-center text-[#34495E] hover:text-[#184D47] font-medium">
//               {item.label}
//               {item.dropdown && <ChevronDown size={14} className="ml-1" />}
//             </a>
//             {item.dropdown && (
//               <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
//                 {item.dropdown.map((sub) => (
//                   <a key={sub.label} href={sub.href} className="block px-4 py-2 text-sm text-[#34495E] hover:bg-[#D6EFC7] hover:text-[#184D47]">
//                     {sub.label}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// };


import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems } from '../data/navigation';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#184D47] to-[#2A6B62] flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div className="leading-tight">
                <h1 className="text-lg font-bold text-[#184D47] uppercase tracking-tight">Vihan College</h1>
                <p className="text-[10px] font-semibold text-[#34495E] uppercase tracking-widest">of Pharmacy</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors flex items-center ${
                    isScrolled ? 'text-[#34495E]' : 'text-[#184D47]'
                  } hover:text-[#184D47] hover:bg-gray-50`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className={`bg-white shadow-2xl rounded-xl border border-gray-100 py-3 ${item.dropdown.length > 10 ? 'w-80 grid grid-cols-1' : 'w-64'}`}>
                      <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-[#D6EFC7]/30 hover:text-[#184D47] transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block ml-4">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-[#184D47] text-white text-sm font-bold hover:bg-[#2A6B62] transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#184D47] hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 pb-8 px-6 h-full overflow-y-auto">
          {navigationItems.map((item) => (
            <div key={item.label} className="py-2 border-b border-gray-50">
              <div className="flex justify-between items-center py-2">
                <a href={item.href} className="text-lg font-bold text-[#184D47]" onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>
              </div>
              {item.dropdown && (
                <div className="pl-4 mt-2 space-y-3">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block text-gray-500 text-sm hover:text-[#184D47]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className="mt-8 block w-full py-4 rounded-xl bg-[#FAD586] text-[#184D47] font-bold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};