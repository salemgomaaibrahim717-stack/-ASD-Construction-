import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiPlay } from 'react-icons/fi';
import { siteInfo } from '../data/site';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Decorative shapes */}
      <div className="hero-decor decor-1" aria-hidden="true"></div>
      <div className="hero-decor decor-2" aria-hidden="true"></div>
      <div className="hero-decor decor-circle" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="container-custom">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-badge-dot"></span>
            شركة رائدة في تنفيذ المشاريع داخل المملكة
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            ننفّذ رؤيتك بمعايير <br />
            <span className="text-gradient-orange">هندسية دقيقة</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            نحوّل أفكارك إلى مشاريع متكاملة تُنفَّذ بأعلى معايير الجودة والدقة،
            بخبرة هندسية وإدارة احترافية في كل مرحلة.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-custom btn-primary-custom">
              اطلب استشارة
              <FiArrowLeft />
            </Link>
            <Link to="/projects" className="btn-custom btn-outline-custom">
              <FiPlay />
              مشاهدة سابقة الأعمال
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="hero-stat">
              <strong>{siteInfo.stats.experience}</strong>
              <span>سنة خبرة</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <strong>{siteInfo.stats.projects}</strong>
              <span>مشروع مكتمل</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <strong>{siteInfo.stats.cities}</strong>
              <span>مدينة مغطاة</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
