import { motion } from 'framer-motion';
import { FiSmartphone } from 'react-icons/fi';
import { whyChooseUs } from '../data/site';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section section" id="why-choose">
      <div className="container-custom">
        <div className="why-choose-grid">
          {/* Left: cards */}
          <div className="why-cards">
            {whyChooseUs.map((item, idx) => (
              <motion.article
                key={idx}
                className="why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="why-card-icon" style={{ background: item.bg, color: item.color }}>
                  <item.icon />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </motion.article>
            ))}
          </div>

          {/* Right: text */}
          <motion.div
            className="why-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">
              <FiSmartphone /> ما الذي يميزنا؟
            </div>
            <h2 className="why-heading">
              <span className="text-orange">شركاؤك في التنفيذ</span><br />
              منذ الفكرة وحتى التسليم
            </h2>
            <p>
              نرافقك في كل مرحلة من مراحل المشروع، بدءاً من دراسة المتطلبات ووضع الرؤية،
              مروراً بالتخطيط والإشراف والتنفيذ، وحتى تسليم المشروع بأعلى معايير الجودة.
            </p>
            <p>
              نؤمن أن نجاح المشروع لا يعتمد فقط على التصميم الجيد، بل على إدارة محكمة،
              والتزام واضح، وتواصل مستمر يضمن تحقيق الأهداف دون مفاجآت.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
