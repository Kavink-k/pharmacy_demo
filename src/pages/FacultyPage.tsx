import { PageTemplate } from '../components/PageTemplate';
import { facultyData } from '../data/facultyData';

export const FacultyPage = () => {
  return (
    <PageTemplate 
      data={facultyData}
    />
  );
};
