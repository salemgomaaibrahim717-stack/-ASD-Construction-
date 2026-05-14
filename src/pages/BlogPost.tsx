import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiUser, FiShare2, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { blogPosts } from '../data/site';
import CTA from '../components/CTA';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <>
      <section className="page-hero">
        <div className="container-custom">
          <div className="breadcrumb">
            <Link to="/blog">المدونة</Link>
            <FiArrowRight />
            <span>{post.category}</span>
          </div>
          <h1>{post.title}</h1>
        </div>
      </section>

      <article className="blog-post-page section">
        <div className="container-custom">
          <motion.div
            className="post-meta-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="meta-author">
              <img src="/images/author-avatar.jpg" alt={post.author} />
              <div>
                <strong>{post.author}</strong>
                <small>كاتب ومهندس</small>
              </div>
            </div>
            <div className="meta-info">
              <span><FiClock /> {post.readTime} قراءة</span>
              <span><FiCalendar /> {post.date}</span>
              <button className="share-btn" aria-label="مشاركة"><FiShare2 /></button>
            </div>
          </motion.div>

          <motion.div
            className="post-cover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={post.image} alt={post.title} />
          </motion.div>

          <div className="post-content">
            <p className="lead-paragraph">
              يمثّل التصميم المعماري في المملكة العربية السعودية انعكاساً لهوية ثقافية عميقة
              تمتد جذورها إلى تاريخ غني بالتقاليد والقيم، وفي الوقت نفسه يتجه نحو الحداثة
              والتطور العمراني السريع. ومن هنا تبرز الحاجة إلى تحقيق توازن ذكي بين الأصالة
              والمعاصرة.
            </p>

            <h2>الجذور العميقة للهوية</h2>
            <p>
              تُعتبر العمارة النجدية رمزاً للتكيّف الذكي مع البيئة الصحراوية القاسية. من خلال
              استخدام الطوب اللبني، والجدران السميكة، والفتحات الهندسية الدقيقة، استطاع
              أجدادنا خلق بيئات باردة ومريحة دون الحاجة لأي تكنولوجيا حديثة.
            </p>
            <p>
              اليوم، ونحن نعيش طفرة عمرانية غير مسبوقة تحت مظلة رؤية 2030، يبرز السؤال
              الجوهري: هل نتخلى عن هذه الحلول الذكية لصالح المباني الزجاجية الباردة؟ أم نعيد
              ابتكارها بأسلوب حديث؟
            </p>

            <figure className="post-image">
              <img src="/images/blog-interior.jpg" alt="تصميم داخلي معاصر" />
              <figcaption>التصميم الداخلي المعاصر يدمج بين الأصالة والحداثة</figcaption>
            </figure>

            <h2>الابتكار المستدام</h2>
            <p>
              في مشاريعنا الأخيرة، قمنا بتطبيق مفهوم "التبريد السلبي" المستوحى من العمارة
              التقليدية ولكن باستخدام مواد فائقة الأداء. لقد استبدلنا الطوب اللبني بالخرسانة
              المعزولة والواجهات المعدنية المقطوعة بالليزر التي تحاكي زخارف "المشربية".
            </p>
            <p>
              النتائج كانت مذهلة: انخفاض استهلاك الطاقة بنسبة 40%، مع الحفاظ على طابع
              معماري فريد يعكس هوية المكان. هذا هو معنى الاستدامة الحقيقية في عالم العمارة
              الحديثة.
            </p>

            <div className="post-quote">
              <div className="quote-mark">"</div>
              <blockquote>
                الهدف ليس محاكاة الشكل الخارجي فقط، بل فهم الوظيفة البيئية للمبنى التقليدي
                وترجمتها إلى لغة برمجية وهندسية حديثة تضمن الاستدامة وكفاءة الطاقة.
              </blockquote>
            </div>

            <div className="post-strategic">
              <h3>رؤية إستراتيجية</h3>
              <p>
                الهدف ليس محاكاة الشكل الخارجي فقط، بل فهم الوظيفة البيئية للمبنى التقليدي
                وترجمتها إلى لغة برمجية وهندسية حديثة تضمن الاستدامة وكفاءة الطاقة.
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="related-posts">
              <h3>مقالات ذات صلة</h3>
              <div className="related-grid">
                {related.map(p => (
                  <Link to={`/blog/${p.slug}`} key={p.id} className="related-card">
                    <div className="related-img">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div className="related-body">
                      <span className="related-category">{p.category}</span>
                      <h4>{p.title}</h4>
                      <span className="related-read">
                        اقرأ المزيد <FiArrowLeft />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTA />
    </>
  );
}
