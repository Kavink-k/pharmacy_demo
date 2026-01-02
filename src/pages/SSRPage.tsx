import { PageTemplate } from '../components/PageTemplate';
import { ssrContent } from '../data/ssrData';

export const SSRPage = () => {
  // Transform the ssrContent to match the expected PageTemplate data format
  const pageData = {
    label: ssrContent.title,
    href: '#ssr',
    vision: ssrContent.vision,
    mission: ssrContent.mission,
    content: ssrContent.sections.map(section => `${section.title}: ${section.content}`).join('\n\n')
  };

  return (
    <PageTemplate 
      data={pageData}
    />
  );
};
