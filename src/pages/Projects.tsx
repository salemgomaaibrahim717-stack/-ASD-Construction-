import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiArrowLeft, FiFilter } from 'react-icons/fi';
import { projects } from '../data/site';
import CTA from '../components/CTA';
import './Projects.css';

const filters = [
  { id: 'all', label: 'جميع المشاريع' },
  { id: 'سكني', label: 'سكني' },
  { id: 'تجاري', label: 'تجاري' },
  { id: 'بنية تحتية', label: 'بنية تحتية' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1>مشاريعنا</h1>
          <p>
            مشاريع نوعية ساهمت في نهضة المملكة العمرانية وفق أعلى المعايير. نماذج من
            أعمالنا التي تعكس جودة التنفيذ ودقة التفاصيل والالتزام بالجداول الزمنية.
          </p>
        </div>
      </section>

      <section className="projects-page section">
        <div className="container-custom">
          {/* Filters */}
          <div className="filter-bar">
            <div className="filter-label">
              <FiFilter />
              <span>تصنيف:</span>
            </div>
            <div className="filter-chips">
              {filters.map(f => (
                <button
                  key={f.id}
                  className={`filter-chip ${activeFilter === f.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="projects-page-grid">
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                className="project-card-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <span className={`project-status status-${project.status === 'مكتمل' ? 'done' : 'progress'}`}>
                    {project.status}
                  </span>
                  <div className="project-tag">{project.category}</div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <div className="project-location">
                    <FiMapPin />
                    <span>{project.location}</span>
                  </div>
                  <p>{project.desc}</p>
                  <div className="project-scope">
                    <strong>نطاق العمل:</strong>
                    <div className="scope-chips">
                      {project.scope.map((s, i) => (
                        <span key={i} className="scope-chip">{s}</span>
                      ))}
                    </div>
                  </div>
                  <button className="project-link">
                    عرض التفاصيل
                    <FiArrowLeft />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
