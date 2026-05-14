import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '../data/site';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">آراء عملائنا</div>
          <h2>ثقة العملاء .. شهادة نعتز بها</h2>
          <p>
            آراء حقيقية من عملاء عاشوا تجربة التعامل مع ASD، ووجدوا فيها الاحترافية
            والالتزام الذي طالما بحثوا عنه.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <motion.article
              key={t.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="testimonial-quote">"</div>
              <p>{t.content}</p>
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} />
                ))}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.split(' ').slice(-1)[0].charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.position}</small>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
