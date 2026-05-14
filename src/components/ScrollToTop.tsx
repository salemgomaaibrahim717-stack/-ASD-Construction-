import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-top-btn ${visible ? 'show' : ''}`}
      onClick={goTop}
      aria-label="العودة إلى الأعلى"
    >
      <FiArrowUp />
      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 28px;
          left: 28px;
          z-index: 999;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--orange-normal);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          box-shadow: var(--shadow-orange);
          opacity: 0;
          visibility: hidden;
          transform: translateY(12px);
          transition: all var(--trans-base);
        }
        .scroll-top-btn.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .scroll-top-btn:hover {
          background: var(--orange-normal-hover);
          transform: translateY(-3px);
        }
      `}</style>
    </button>
  );
}
