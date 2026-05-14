import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiArrowLeft } from 'react-icons/fi';
import { navLinks, siteInfo, services } from '../data/site';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container-custom">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <div className="footer-logo-mark">
                  <span>AS</span>
                  <span className="footer-logo-orange">D</span>
                </div>
                <div>
                  <strong>ASD</strong>
                  <small>حلول هندسية متكاملة</small>
                </div>
              </Link>
              <p className="footer-desc">
                شركة رائدة في تنفيذ المشاريع الإنشائية داخل المملكة العربية السعودية، نقدم حلولاً هندسية متكاملة بجودة عالية والتزام كامل.
              </p>
              <div className="footer-socials">
                <a href="#" aria-label="انستجرام" className="social-icon"><FiInstagram /></a>
                <a href="#" aria-label="تويتر" className="social-icon"><FiTwitter /></a>
                <a href="#" aria-label="لينكدإن" className="social-icon"><FiLinkedin /></a>
                <a href="#" aria-label="يوتيوب" className="social-icon"><FiYoutube /></a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-col">
              <h4>روابط سريعة</h4>
              <ul>
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <FiArrowLeft />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>خدماتنا</h4>
              <ul>
                {services.map(s => (
                  <li key={s.id}>
                    <Link to="/services">
                      <FiArrowLeft />
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>تواصل معنا</h4>
              <ul className="footer-contact">
                <li>
                  <div className="contact-icon"><FiMapPin /></div>
                  <div>
                    <strong>العنوان</strong>
                    <span>{siteInfo.address}</span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><FiPhone /></div>
                  <div>
                    <strong>الهاتف</strong>
                    <span dir="ltr">{siteInfo.phone}</span>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><FiMail /></div>
                  <div>
                    <strong>البريد الإلكتروني</strong>
                    <span>{siteInfo.email}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-custom">
          <div className="footer-bottom-inner">
            <p>© {year} ASD - جميع الحقوق محفوظة.</p>
            <div className="footer-bottom-links">
              <a href="#">سياسة الخصوصية</a>
              <span>•</span>
              <a href="#">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
