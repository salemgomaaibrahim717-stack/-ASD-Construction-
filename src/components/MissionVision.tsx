import { motion } from 'framer-motion';
import './MissionVision.css';

export default function MissionVision() {
  return (
    <section className="mv-section section" id="mission-vision">
      <div className="container-custom">
        <div className="mv-grid">
          {/* Mission - Dark card (shown on right for RTL) */}
          <motion.article
            className="mv-card mv-dark"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>رسالتنا</h3>
            <p>
              تقديم حلول هندسية وإنشائية مبتكرة تجمع بين التكلفة المثالية، الجودة الفائقة،
              والالتزام الصارم بمعايير الاستدامة والبيئة، مع خلق قيمة مضافة حقيقية لكل
              مشروع نتولاه.
            </p>
          </motion.article>

          {/* Vision - Light card */}
          <motion.article
            className="mv-card mv-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>رؤيتنا</h3>
            <p>
              أن نكون الخيار الأول والاسم الأكثر ثقة في قطاع الإنشاءات بالمملكة، مساهمين
              بفعالية في تحقيق مستهدفات رؤية 2030 من خلال بنية تحتية ومعالم عمرانية تلهم
              الأجيال.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
