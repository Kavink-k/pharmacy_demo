export interface CourseDetails {
  duration: string;
  eligibility: string;
}

export interface CourseData {
  id: string;
  courseName: string;
  courseDetails: CourseDetails;
  departmentAbout: string[];
  courseOpportunities: string[];
  image: string; // Added for background effects
}

export const courseData: CourseData[] = [
  {
    id: 'dpharm',
    courseName: 'Diploma in Pharmacy',
    image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
    courseDetails: {
      duration: '2 Years',
      eligibility: '10+2 with Physics, Chemistry, and Biology or Mathematics',
    },
    departmentAbout: [
      'The Department of Diploma in Pharmacy focuses on building strong foundational knowledge in pharmaceutical sciences.',
      'The program emphasizes practical training, ethical practices, and patient-oriented skills required in the healthcare system.',
    ],
    courseOpportunities: [
      'Registered Pharmacist in hospitals and community pharmacies',
      'Pharmacy assistant in retail and wholesale medical stores',
      'Medical representative in pharmaceutical companies',
      'Opportunities in primary healthcare centers',
    ],
  },
  {
    id: 'bpharm',
    courseName: 'Bachelor of Pharmacy',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg',
    courseDetails: {
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, and Biology or Mathematics',
    },
    departmentAbout: [
      'The Bachelor of Pharmacy department aims to produce competent pharmaceutical professionals with scientific and technical expertise.',
      'The curriculum integrates theory, laboratory practice, industrial exposure, and research-oriented learning.',
    ],
    courseOpportunities: [
      'Pharmacist in hospitals and clinical settings',
      'Quality control and quality assurance executive',
      'Production executive in pharmaceutical industries',
      'Medical coding and pharmacovigilance',
      'Higher studies and research opportunities',
    ],
  },
  {
    id: 'pharmd',
    courseName: 'Doctor of Pharmacy',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
    courseDetails: {
      duration: '6 Years (5 Years Academic + 1 Year Internship)',
      eligibility: '10+2 with Physics, Chemistry, and Biology or Mathematics',
    },
    departmentAbout: [
      'The Doctor of Pharmacy program focuses on clinical pharmacy practice and patient-centered care.',
      'The department emphasizes hospital training, clinical research, and direct involvement in healthcare teams.',
    ],
    courseOpportunities: [
      'Clinical Pharmacist in hospitals',
      'Clinical research associate',
      'Pharmacovigilance specialist',
      'Medical advisor in healthcare organizations',
      'Opportunities abroad and in clinical academia',
    ],
  },
  {
    id: 'mpharm',
    courseName: 'Master of Pharmacy',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    courseDetails: {
      duration: '2 Years',
      eligibility: 'Bachelor of Pharmacy (B.Pharm) from a recognized institution',
    },
    departmentAbout: [
      'The Master of Pharmacy department focuses on advanced pharmaceutical research and specialization.',
      'The program encourages innovation, research publications, and industry-oriented skill development.',
    ],
    courseOpportunities: [
      'Research scientist in pharmaceutical and biotech industries',
      'Academic positions in colleges and universities',
      'Regulatory affairs specialist',
      'Formulation and development scientist',
      'Doctoral research and post-graduate studies',
    ],
  },
];