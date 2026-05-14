import { motion } from 'framer-motion';
import './QuoteSection.css';

export default function QuoteSection() {
  return (
    <section className="quote-section section" aria-label="اقتباس">
      <div className="container-custom">
        <motion.div
          className="quote-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="quote-icon" aria-hidden="true">"</div>
          <blockquote>
            العمارة الحقيقية هي تلك التي تخاطب الروح قبل أن تخاطب العين، وهي التي تنمو
            من الأرض التي تقف عليها.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
