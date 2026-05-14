import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi';
import { blogPosts } from '../data/site';
import './BlogPreview.css';

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="blog-preview section" id="blog-preview">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-badge">المدونة</div>
          <h2>معرفة تُبنى … وخبرة تُطبّق</h2>
          <p>
            نشاركك أحدث التوجهات، وأفضل الممارسات، وتجارب حقيقية من مشاريعنا في مجالات
            البناء، إدارة المشاريع، والتصميم، لمساعدتك على اتخاذ قرارات أكثر وعياً.
          </p>
        </motion.div>

        <div className="blog-grid">
          {featured.map((post, idx) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-img">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span><FiCalendar /> {post.date}</span>
                    <span><FiClock /> {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-read-more">
                    اقرأ المزيد <FiArrowLeft />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
