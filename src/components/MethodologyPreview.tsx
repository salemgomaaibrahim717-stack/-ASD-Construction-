import { motion } from 'framer-motion';
import { methodology } from '../data/site';
import './MethodologyPreview.css';

export default function MethodologyPreview() {
  return (
    <section className="method-section section" id="methodology-preview">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">منهجيتنا في العمل</div>
          <h2>منهجية واضحة … نتائج يمكن الوثوق بها</h2>
          <p>
            نعمل وفق خطوات مدروسة ومنهجية تنفيذ دقيقة تضمن وضوح الرؤية، كفاءة التنفيذ،
            وتسليم المشاريع بأعلى معايير الجودة وفي الوقت المحدد.
          </p>
        </motion.div>

        <div className="method-steps">
          <div className="method-line" aria-hidden="true"></div>
          {methodology.map((step, idx) => (
            <motion.div
              key={step.step}
              className="method-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="method-icon">
                <step.icon />
                <span className="method-num">{step.step}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
