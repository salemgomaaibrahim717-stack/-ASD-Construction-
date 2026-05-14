import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import MissionVision from '../components/MissionVision';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesPreview from '../components/ServicesPreview';
import MethodologyPreview from '../components/MethodologyPreview';
import QuoteSection from '../components/QuoteSection';
import WhyLeaders from '../components/WhyLeaders';
import ProjectsPreview from '../components/ProjectsPreview';
import Accreditations from '../components/Accreditations';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MissionVision />
      <ServicesPreview />
      <WhyChooseUs />
      <MethodologyPreview />
      <QuoteSection />
      <WhyLeaders />
      <ProjectsPreview />
      <Accreditations />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
