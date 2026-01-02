// import { Navbar } from './components/Navbar';
// import { Hero } from './components/Hero';
// import { About } from './components/About';
// import { Programs } from './components/Programs';
// import { Departments } from './components/Departments';
// import { Research } from './components/Research';
// import { CampusLife } from './components/CampusLife';
// import { Testimonials } from './components/Testimonials';
// import { Contact } from './components/Contact';
// import { Footer } from './components/Footer';
// import { navigationItems } from './data/navigation';
// import { PageDetail } from './components/pageDetails';
// // function App() {
// //   return (
// //     <div className="min-h-screen">
// //       <Navbar />
// //       <main>
// //         <Hero />
// //         <About />
// //         <Programs />
// //         <Departments />
// //         <Research />
// //         <CampusLife />
// //         <Testimonials />
// //         <Contact />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }
// // src/App.tsx
// function App() {
//   const allSubPages = navigationItems.flatMap(nav => nav.dropdown || []);

//   return (
//     <div className="min-h-screen scroll-smooth">
//       <Navbar />
//       <main>
//         <Hero />
//         {/* Render each sub-page as a separate section */}
//         {/* {allSubPages.map((page, index) => (
//           <PageDetail key={index} item={page} />
//         ))} */}
//         <Programs />
// <Departments />
//      <Research />
//          <CampusLife />
//          <Testimonials />
//          <Contact />      </main>
//       <Footer />
//     </div>
//   );
// }
// export default App;
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { navigationItems } from './data/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Page Components
import { Home } from './pages/Home';
import { AboutPage } from './pages/aboutPage'; // New zigzag descriptive page
import { ProgramsPage } from './pages/ProgramsPage';
import { FacultyPage } from './pages/FacultyPage';
import { SSRPage } from './pages/SSRPage';
import { PageTemplate } from './components/PageTemplate';

function App() {
  // Filter out 'About' sub-items from dynamic routing since they now render on a single page
  const dynamicRoutes = navigationItems
    .filter(nav => nav.label !== 'About') 
    .flatMap((nav) => nav.dropdown || []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col scroll-smooth">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* 1. Main Home Route */}
            <Route path="/" element={<Home />} />

            {/* 2. About Page - Renders all sections (Chairman, Principal, etc.) on one page */}
            <Route path="/about" element={<AboutPage />} />
                        <Route path="/Programs" element={<ProgramsPage />} />


            {/* 3. Specialized Layout Pages */}
            <Route path="/faculties" element={<FacultyPage />} />
            <Route path="/ssr" element={<SSRPage />} />

            {/* 4. Dynamic Routes for remaining sections (IQAC, Committees, etc.) */}
            {dynamicRoutes.map((subItem) => (
              <Route 
                key={subItem.href} 
                path={subItem.href.replace('#', '/')} 
                element={<PageTemplate data={subItem} />} 
              />
            ))}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;