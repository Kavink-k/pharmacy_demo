export interface AboutSection {
  id: string;
  title: string;
  asideTitle?: string;
  content: string[];
  image?: string;
}

export const aboutData: AboutSection[] = [
  {
    id: 'about-sscop',
    title: 'About SSCOP',
    asideTitle: 'Institutional Excellence',
    content: [
      'Siddharth Institute of Pharmaceutical Sciences (SSCOP) is a premier institution dedicated to excellence in pharmaceutical education and research.',
      'Established with a vision to create healthcare professionals who blend scientific expertise with compassionate care, SSCOP offers modern infrastructure, advanced laboratories, and a student-centric learning environment.',
    ],
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
  },

  {
    id: 'about-trust',
    title: 'About Trust',
    asideTitle: 'Our Foundation',
    content: [
      'The Siddharth Educational Trust was founded with the mission of providing affordable, high-quality education to empower future generations.',
      'The Trust governs multiple educational institutions and ensures ethical governance, academic excellence, and inclusive growth across all campuses.',
    ],
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg',
  },

  {
    id: 'chairman',
    title: "Chairman's Message",
    asideTitle: 'Leadership Vision',
    content: [
      'Education is the most powerful tool for transforming society. At SSCOP, our focus is on nurturing disciplined, knowledgeable, and socially responsible professionals.',
      'We encourage innovation, integrity, and lifelong learning to prepare students for leadership roles in the global healthcare sector.',
    ],
    image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg',
  },

  {
    id: 'executive-director',
    title: 'Executive Director',
    asideTitle: 'Strategic Administration',
    content: [
      'The Executive Director plays a vital role in translating institutional vision into actionable strategies and operational excellence.',
      'By ensuring academic compliance, infrastructure development, and policy implementation, the Executive Director supports sustainable institutional growth.',
    ],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
  },

  {
    id: 'principal',
    title: 'Principal',
    asideTitle: 'Academic Leadership',
    content: [
      'The Principal provides academic leadership and ensures the delivery of quality education aligned with regulatory standards.',
      'Through faculty development, curriculum innovation, and student mentoring, the Principal fosters a culture of excellence and accountability.',
    ],
    image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg',
  },

  {
    id: 'vice-principal',
    title: 'Vice Principal',
    asideTitle: 'Academic Coordination',
    content: [
      'The Vice Principal supports academic administration by coordinating teaching-learning activities and monitoring academic performance.',
      'The role emphasizes student welfare, discipline, and continuous improvement in academic processes.',
    ],
    image: 'https://images.pexels.com/photos/5212697/pexels-photo-5212697.jpeg',
  },

  {
    id: 'accreditation-recognition',
    title: 'Accreditation & Recognition',
    asideTitle: 'Quality Assurance',
    content: [
      'SSCOP is recognized and approved by statutory and regulatory bodies, ensuring compliance with national education standards.',
      'Accreditation reflects our commitment to continuous quality improvement, transparency, and academic credibility.',
    ],
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
  },

  {
    id: 'governing-council',
    title: 'Governing Council',
    asideTitle: 'Institutional Governance',
    content: [
      'The Governing Council is the apex decision-making body responsible for policy formulation and institutional oversight.',
      'It ensures effective governance, financial accountability, and alignment with the institution’s vision and mission.',
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },

  {
    id: 'strategic-plan',
    title: 'Strategic Plan',
    asideTitle: 'Future Roadmap',
    content: [
      'SSCOP’s Strategic Plan outlines long-term goals for academic excellence, research development, and infrastructure enhancement.',
      'The plan emphasizes innovation, digital transformation, industry collaboration, and community engagement.',
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  },

  {
    id: 'organogram',
    title: 'Organogram',
    asideTitle: 'Organizational Structure',
    content: [
      'The Organogram presents a clear hierarchical structure of administration and academic governance at SSCOP.',
      'It defines roles, responsibilities, and reporting relationships to ensure efficient institutional functioning.',
    ],
    image: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg',
  },

  {
    id: 'code-conduct',
    title: 'Code of Conduct',
    asideTitle: 'Ethics & Values',
    content: [
      'SSCOP follows a well-defined code of conduct to maintain discipline, professionalism, and mutual respect on campus.',
      'All students, faculty, and staff are expected to uphold ethical behavior, integrity, and commitment to institutional values.',
    ],
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg',
  },
];
