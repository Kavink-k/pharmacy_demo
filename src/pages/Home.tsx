import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Programs } from '../components/Programs';
import { Departments } from '../components/Departments';
import { Research } from '../components/Research';
import { CampusLife } from '../components/CampusLife';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Departments />
      <Research />
      <CampusLife />
      <Testimonials />
      <Contact />
    </>
  );
};