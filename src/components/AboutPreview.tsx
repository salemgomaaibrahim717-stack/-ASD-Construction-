import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import './AboutPreview.css';

const features = [
  'التزام بالمواعيد',
  'تقنيات حديثة',
  'شفافية مالية',
  'معايير أمان',
];

export default function AboutPreview() {
  return (
    <section className="about-preview-section section" id="about-preview">
      <div className="container-custom">
        <div className="about-preview-grid">
          {/* Left - image + quote card */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image">
              <img src="/images/about-office.jpg" alt="مكاتب ASD" />
            </div>

            <div className="about-quote-card">
              <div className="quote-mark">"</div>
              <p>الجودة ليست خياراً، بل هي أساس كل بناء.</p>
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              <span className="text-dark-blue">قصة شغف</span>{' '}
              <span className="text-orange">لا تعرف الحدود.</span>
            </h2>

            <div className="about-quote">
              "بدأت ASD كحلم وطني يهدف إلى تغيير ملامح العمران في المملكة، واليوم نحن
              نقود مشاريع ترسم خارطة طريق رؤية 2030."
            </div>

            <p>
              منذ انطلاقتنا، وضعنا الجودة والنزاهة والابتكار كركائز أساسية لكل مشروع
              نتولاه. لم يكن هدفنا مجرد بناء هياكل خرسانية، بل خلق بيئات مستدامة تعزز
              من جودة الحياة وتدفع بعجلة الاقتصاد الوطني نحو آفاق جديدة.
            </p>
            <p>
              نحن نؤمن بأن كل حجر نضعه هو لبنة في صرح نهضة الوطن، ولذلك نستثمر في
              الكفاءات السعودية الشابة ونتبنى أحدث المعايير العالمية في الهندسة والتشييد.
            </p>

            <div className="about-features">
              {features.map((f) => (
                <div className="about-feature" key={f}>
                  <FiCheckCircle />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
