import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMapPin } from 'react-icons/fi';
import { projects } from '../data/site';
import './ProjectsPreview.css';

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="projects-preview section" id="projects-preview">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">مشاريعنا</div>
          <h2>نماذج من أعمالنا التي تعكس جودة التنفيذ</h2>
          <p>
            نقدّم مجموعة مختارة من مشاريعنا التي نُفّذت وفق أعلى المعايير الهندسية،
            وتعكس التزامنا بالجودة، ودقة التفاصيل، والالتزام بالجداول الزمنية.
          </p>
        </motion.div>

        <div className="projects-grid">
          {featured.map((project, idx) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                <Link to="/projects" className="project-link">
                  عرض التفاصيل
                  <FiArrowLeft />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="btn-custom btn-dark-custom">
            استعرض جميع المشاريع
            <FiArrowLeft />
          </Link>
        </div>
      </div>
    </section>
  );
}
