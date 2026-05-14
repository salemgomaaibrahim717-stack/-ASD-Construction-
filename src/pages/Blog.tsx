import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiCalendar, FiUser } from 'react-icons/fi';
import { blogPosts } from '../data/site';
import CTA from '../components/CTA';
import './Blog.css';

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <h1>المدونة</h1>
          <p>
            معرفة تُبنى … وخبرة تُطبّق. نشاركك أحدث التوجهات، وأفضل الممارسات، وتجارب
            حقيقية من مشاريعنا لمساعدتك على اتخاذ قرارات أكثر وعياً.
          </p>
        </div>
      </section>

      <section className="blog-page section">
        <div className="container-custom">
          {/* Featured post */}
          <motion.article
            className="featured-post"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to={`/blog/${featured.slug}`} className="featured-link">
              <div className="featured-image">
                <img src={featured.image} alt={featured.title} />
                <span className="blog-category">{featured.category}</span>
              </div>
              <div className="featured-body">
                <div className="blog-meta">
                  <span><FiUser /> {featured.author}</span>
                  <span><FiCalendar /> {featured.date}</span>
                  <span><FiClock /> {featured.readTime}</span>
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="blog-read-more">
                  اقرأ المقال كاملاً <FiArrowLeft />
                </span>
              </div>
            </Link>
          </motion.article>

          <div className="blog-grid-page">
            {rest.map((post, idx) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
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

      <CTA />
    </>
  );
}
