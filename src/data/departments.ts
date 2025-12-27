import { Department } from '../types';

export const departments: Department[] = [
  {
    id: 'pharmaceutics',
    name: 'Pharmaceutics',
    shortName: 'Pharmaceutics',
    description: 'Study of drug formulation, delivery systems, and pharmaceutical technology. Focus on developing innovative dosage forms and drug delivery mechanisms.',
    icon: 'Pill',
    color: '#184D47',
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology',
    shortName: 'Pharmacology',
    description: 'Understanding drug actions, mechanisms, therapeutic uses, and adverse effects. Bridging basic sciences with clinical medicine.',
    icon: 'HeartPulse',
    color: '#2A6B62',
  },
  {
    id: 'pharmaceutical-chemistry',
    name: 'Pharmaceutical Chemistry',
    shortName: 'Pharm. Chemistry',
    description: 'Chemical principles underlying drug design, synthesis, analysis, and quality control of pharmaceutical compounds.',
    icon: 'Beaker',
    color: '#FAD586',
  },
  {
    id: 'pharmacognosy',
    name: 'Pharmacognosy',
    shortName: 'Pharmacognosy',
    description: 'Study of medicinal plants, natural products, and herbal medicines. Exploring traditional and modern phytotherapy.',
    icon: 'Leaf',
    color: '#D6EFC7',
  },
  {
    id: 'clinical-pharmacy',
    name: 'Clinical Pharmacy',
    shortName: 'Clinical Pharmacy',
    description: 'Patient-centered care, medication therapy management, and clinical decision-making in healthcare settings.',
    icon: 'Stethoscope',
    color: '#34495E',
  },
  {
    id: 'pharmaceutical-analysis',
    name: 'Pharmaceutical Analysis',
    shortName: 'Analysis',
    description: 'Advanced analytical techniques for drug quality assurance, purity testing, and pharmaceutical research.',
    icon: 'Microscope',
    color: '#F5C456',
  },
];
