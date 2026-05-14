import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import MethodologyPreview from '../components/MethodologyPreview';
import CTA from '../components/CTA';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1>خدماتنا المتخصصة</h1>
          <p>
            نقدّم مجموعة متكاملة من الخدمات الهندسية والتنفيذية، نغطي بها جميع مراحل
            المشروع، مع التزام كامل بالجودة، والدقة، والاشتراطات المعتمدة في المملكة.
          </p>
        </div>
      </section>
      <ServicesPreview />
      <WhyChooseUs />
      <MethodologyPreview />
      <CTA
        title="تواصل معنا وابدأ مشروعك بثقة"
        description="فريق ASD جاهز لمرافقتك في كل خطوة من دراسة المتطلبات إلى التسليم النهائي."
      />
    </>
  );
}
