import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiBriefcase } from 'react-icons/fi';
import './CTA.css';

type CTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTA({
  title = 'نُنفّذ رؤيتك بمعايير هندسية دقيقة',
  description = 'نحوّل أفكارك إلى مشاريع متكاملة تُنفذ بأعلى معايير الجودة والدقة، بخبرة هندسية وإدارة احترافية في كل مرحلة.',
  primaryLabel = 'اطلب استشارة',
  primaryHref = '/contact',
  secondaryLabel = 'مشاهدة سابقة الأعمال',
  secondaryHref = '/projects',
}: CTAProps) {
  return (
    <section className="cta-section" aria-label="دعوة لاتخاذ إجراء">
      <div className="container-custom">
        <motion.div
          className="cta-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-decor cta-decor-1" aria-hidden="true"></div>
          <div className="cta-decor cta-decor-2" aria-hidden="true"></div>

          <div className="cta-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="cta-actions">
              <Link to={primaryHref} className="btn-custom btn-primary-custom">
                <FiBriefcase />
                {primaryLabel}
              </Link>
              <Link to={secondaryHref} className="btn-custom btn-outline-custom">
                {secondaryLabel}
                <FiArrowLeft />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
