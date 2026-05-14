import AboutPreview from '../components/AboutPreview';
import MissionVision from '../components/MissionVision';
import WhyChooseUs from '../components/WhyChooseUs';
import WhyLeaders from '../components/WhyLeaders';
import Accreditations from '../components/Accreditations';
import QuoteSection from '../components/QuoteSection';
import CTA from '../components/CTA';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1>عن الشركة</h1>
          <p>
            تعرّف على قصتنا ورؤيتنا ورسالتنا، ومسيرة حافلة بالإنجاز والتميّز في السوق
            السعودي وتطوير البنية التحتية على مدى أكثر من 15 عاماً.
          </p>
        </div>
      </section>
      <AboutPreview />
      <MissionVision />
      <WhyChooseUs />
      <QuoteSection />
      <WhyLeaders />
      <Accreditations />
      <CTA />
    </>
  );
}
