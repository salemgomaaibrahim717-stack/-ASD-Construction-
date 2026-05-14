import MethodologyPreview from '../components/MethodologyPreview';
import WhyLeaders from '../components/WhyLeaders';
import QuoteSection from '../components/QuoteSection';
import CTA from '../components/CTA';

export default function Methodology() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1>منهجية العمل</h1>
          <p>
            منهجية واضحة … نتائج يمكن الوثوق بها. نعمل وفق خطوات مدروسة ومنهجية تنفيذ
            دقيقة تضمن وضوح الرؤية، وكفاءة التنفيذ، وتسليم المشاريع بأعلى معايير الجودة.
          </p>
        </div>
      </section>
      <MethodologyPreview />
      <QuoteSection />
      <WhyLeaders />
      <CTA title="تواصل معنا وابدأ مشروعك بثقة" />
    </>
  );
}
