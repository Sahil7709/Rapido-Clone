import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BlogPosts from '../components/blog/BlogPosts';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, idx) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: idx * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-3xl py-16 px-4 text-center shadow-lg"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Rapido Blog</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Stay updated with the latest from Rapido—news, rider stories, safety tips, and more.
        </p>
      </section>

      {/* Blog Posts */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="mt-16 py-12"
      >
        <h2 className="text-2xl font-bold text-gray-500 text-center mb-10">Recent Posts</h2>
        <BlogPosts />
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="mt-16 py-12 mb-12 bg-gray-900 text-white text-center rounded-3xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Join the Conversation</h2>
        <p className="text-base md:text-lg mb-6 max-w-xl mx-auto">
          Subscribe for updates or share your own Rapido story with us!
        </p>
        <a
          href="mailto:blog@rapido.bike"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-6 rounded-full shadow-md"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Blog;
