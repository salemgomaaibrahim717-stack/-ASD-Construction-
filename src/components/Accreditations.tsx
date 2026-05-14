import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import './Accreditations.css';

const logos = [
  { label: 'وزارة الشؤون البلدية', text: 'وزارة الشؤون البلدية والقروية والإسكان', color: '#2d7a3f' },
  { label: 'تصنيف', text: 'تصنيف مقدمي الخدمات', color: '#2d7a3f' },
  { label: 'SCA', text: 'الهيئة السعودية للمقاولين', color: '#1a5fb4' },
  { label: 'MOMRA', text: 'وزارة الشؤون البلدية', color: '#2d7a3f' },
  { label: 'REGA', text: 'الهيئة العامة للعقار', color: '#1a5fb4' },
  { label: 'ISO', text: 'شهادة الأيزو 9001', color: '#ff6900' },
];

export default function Accreditations() {
  return (
    <section className="accred-section section" id="accreditations">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">
            <FiShield /> موثوقية هندسية معتمدة
          </div>
          <h2>ثقة مدعومة باعتمادات رسمية داخل المملكة</h2>
          <p>
            نعمل وفق الأنظمة المعتمدة في المملكة العربية السعودية، ونحمل الاعتمادات
            الرسمية التي تضمن التزامنا بأعلى معايير الجودة، السلامة، والمهنية في
            جميع مشاريعنا.
          </p>
        </motion.div>

        <div className="accred-logos">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className="accred-logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="accred-logo-mark" style={{ color: logo.color }}>
                <span className="logo-abbr">{logo.label}</span>
              </div>
              <span className="accred-logo-text">{logo.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
