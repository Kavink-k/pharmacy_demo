// // src/components/PageTemplate.tsx
// import { useParallax } from '../hooks/useParallax';

// export const PageTemplate = ({ data }: { data: any }) => {
//   const parallaxY = useParallax(0.3);

//   return (
//     <div className="pt-20 min-h-screen">
//       {/* Dynamic Parallax Hero */}
//       <div className="relative h-[40vh] overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ 
//             backgroundImage: `url(${data.heroImage})`,
//             transform: `translateY(${parallaxY}px)` 
//           }}
//         >
//           <div className="absolute inset-0 bg-[#184D47]/70 backdrop-blur-sm" />
//         </div>
//         <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
//           <h1 className="text-5xl font-bold mb-4 animate-fade-in">{data.title}</h1>
//         </div>
//       </div>

//       {/* Unique Layout Rendering */}
//       <main className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Main Content Area */}
//           <div className="lg:col-span-2 space-y-12">
//             {data.sections.map((sec: any, i: number) => (
//               <section key={i} className="animate-slide-up">
//                 <h2 className="text-3xl font-bold text-[#184D47] mb-4">{sec.title}</h2>
//                 <p className="text-[#34495E] leading-relaxed text-lg">{sec.content}</p>
//               </section>
//             ))}
//           </div>

//           {/* Sidebar Area for Vision/Mission */}
//           <aside className="space-y-6">
//             <div className="bg-[#D6EFC7] p-8 rounded-3xl border border-[#184D47]/10">
//               <h3 className="font-bold text-[#184D47] text-xl mb-4">Our Vision</h3>
//               <p className="italic text-sm">"{data.vision}"</p>
//             </div>
//             {data.documents && (
//               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
//                 <h3 className="font-bold text-[#184D47] mb-4">Quick Downloads</h3>
//                 {/* Document List Rendering */}
//               </div>
//             )}
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// };


// src/components/PageTemplate.tsx
import { useParallax } from '../hooks/useParallax';

export const PageTemplate = ({ data }: { data: any }) => {
  const y = useParallax(0.3);

  // If data is missing entirely, show a loader or empty state
  if (!data) return <div className="pt-20 text-center">Loading...</div>;

  return (
    <div className="pt-20">
      <div className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${data.image || 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg'})`, 
            transform: `translateY(${y}px)` 
          }}
        />
        <div className="absolute inset-0 bg-[#184D47]/60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase">{data.title || data.label}</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#184D47] p-10 rounded-3xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="italic text-lg">"{data.vision || 'To lead in pharmaceutical excellence.'}"</p>
          </div>
          <div className="bg-white border-2 border-[#184D47] p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#184D47] mb-4">Our Mission</h3>
            <p className="text-gray-700">{data.mission || 'To provide quality education and research.'}</p>
          </div>
        </div>

        {/* FIX: Use optional chaining (?.) and provide a fallback empty array ([]) before mapping */}
        <div className="space-y-8">
          {data.sections?.map((section: any, index: number) => (
            <div key={index} className="prose max-w-none">
              <h2 className="text-2xl font-bold text-[#184D47]">{section.title}</h2>
              <p className="text-gray-600 leading-loose">{section.content}</p>
            </div>
          )) || (
            <p className="text-gray-600 leading-loose">
              {data.content || 'Detailed information for this section is currently being updated.'}
            </p>
          )}
        </div>
      </main>
    </div>
  );
};