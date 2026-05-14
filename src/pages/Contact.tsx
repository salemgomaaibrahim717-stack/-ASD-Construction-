import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { siteInfo } from '../data/site';
import './Contact.css';

const serviceOptions = [
  'اختر نوع الخدمة',
  'المقاولات والتنفيذ',
  'إدارة المشاريع الإنشائية',
  'التصميم المعماري والهندسي',
  'الاستشارات الهندسية',
  'استشارة عامة',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: serviceOptions[0], message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', service: serviceOptions[0], message: '' });
    }, 4000);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1>تواصل معنا</h1>
          <p>
            خطوات بسيطة تفصلك عن استشارة هندسية متكاملة. سواء كنت في مرحلة الفكرة أو
            التخطيط أو التنفيذ، فريقنا جاهز لتقديم الاستشارة المناسبة ومرافقتك في جميع
            مراحل المشروع.
          </p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container-custom">
          <div className="contact-grid">
            {/* Info side */}
            <motion.aside
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-info-card">
                <div className="info-badge">
                  <FiCheckCircle />
                  <span>استشارة احترافية مجاناً</span>
                </div>
                <h2>لنحوّل رؤيتك إلى واقع ملموس</h2>
                <p>
                  يسعدنا الاستماع إلى متطلبات مشروعك ومناقشة أفضل الحلول المناسبة له.
                  تواصل معنا، وسنكون معك خطوة بخطوة منذ البداية وحتى التسليم.
                </p>

                <ul className="info-list">
                  <li>
                    <div className="info-icon"><FiMapPin /></div>
                    <div>
                      <strong>العنوان</strong>
                      <span>{siteInfo.address}</span>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon"><FiPhone /></div>
                    <div>
                      <strong>الهاتف</strong>
                      <span dir="ltr">{siteInfo.phone}</span>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon"><FiMail /></div>
                    <div>
                      <strong>البريد الإلكتروني</strong>
                      <span>{siteInfo.email}</span>
                    </div>
                  </li>
                  <li>
                    <div className="info-icon"><FiClock /></div>
                    <div>
                      <strong>أوقات الدوام</strong>
                      <span>الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.aside>

            {/* Form side */}
            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>ناقش مشروعك مع خبرائنا</h2>
              <p className="form-subtitle">
                املأ النموذج وسنتواصل معك خلال 24 ساعة عمل.
              </p>

              {submitted ? (
                <div className="success-message">
                  <FiCheckCircle />
                  <h3>تم إرسال طلبك بنجاح!</h3>
                  <p>سيتواصل معك أحد خبرائنا قريباً، شكراً لثقتك.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">الاسم الكامل</label>
                      <div className="input-wrap">
                        <FiUser />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="محمد بن فهد"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">رقم الجوال</label>
                      <div className="input-wrap">
                        <FiPhone />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="05xxxxxxxx"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          dir="ltr"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <div className="input-wrap">
                      <FiMail />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="info@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">نوع الخدمة المطلوبة</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      {serviceOptions.map((option, i) => (
                        <option key={i} value={option} disabled={i === 0}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">تفاصيل المشروع</label>
                    <div className="input-wrap textarea-wrap">
                      <FiMessageSquare />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="اكتب لنا نبذة مختصرة عن رؤيتك للمشروع..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn-custom btn-primary-custom w-100 submit-btn">
                    <FiSend />
                    ابدأ المحادثة
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
