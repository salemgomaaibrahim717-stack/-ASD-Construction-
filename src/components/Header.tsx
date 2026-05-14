import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiLogIn } from 'react-icons/fi';
import { navLinks } from '../data/site';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} id="site-header">
      <div className="container-custom">
        <nav className="nav-wrapper" aria-label="القائمة الرئيسية">
          {/* Logo */}
          <Link to="/" className="logo" aria-label="الانتقال إلى الصفحة الرئيسية">
            <div className="logo-mark">
              <span>AS</span>
              <span className="logo-mark-orange">D</span>
            </div>
            <div className="logo-text">
              <strong>ASD</strong>
              <small>حلول هندسية متكاملة</small>
            </div>
          </Link>

          {/* Nav links - Desktop */}
          <ul className="nav-links" role="menubar">
            {navLinks.map((link) => (
              <li key={link.path} role="none">
                <NavLink
                  to={link.path}
                  role="menuitem"
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <button
              className="btn-login"
              onClick={() => navigate('/contact')}
              aria-label="تسجيل الدخول"
            >
              <FiLogIn />
              <span>تسجيل دخول</span>
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => 'mobile-link' + (isActive ? ' active' : '')}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-custom btn-primary-custom w-100"
            >
              اطلب استشارة
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
