import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { services } from '../data/site';
import './ServicesPreview.css';

export default function ServicesPreview() {
  return (
    <section className="services-preview section" id="services-preview">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">خدماتنا المتخصصة</div>
          <h2>حلول متكاملة من التصميم إلى التنفيذ</h2>
          <p>
            نقدم مجموعة متكاملة من الخدمات الهندسية والتنفيذية، نغطي بها جميع مراحل
            المشروع، مع التزام كامل بالجودة والدقة والاشتراطات المعتمدة في المملكة.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.features.map((f, i) => (
                  <li key={i}>
                    <FiCheckCircle />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="service-link">
                اطلب الخدمة الآن
                <FiArrowLeft />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
