import { motion } from 'framer-motion';
import { whyLeaders } from '../data/site';
import './WhyLeaders.css';

export default function WhyLeaders() {
  return (
    <section className="leaders-section section" id="why-leaders">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>لماذا يختارنا القادة؟</h2>
          <p>
            لأننا لا ننفّذ المشاريع فقط، بل نُديرها بعقلية قيادية، ومنهجية دقيقة، ورؤية تضع
            الجودة والالتزام في المقام الأول.
          </p>
        </motion.div>

        <div className="leaders-grid">
          {whyLeaders.map((item, idx) => (
            <motion.article
              key={idx}
              className="leader-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="leader-icon-wrap">
                <item.icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
