import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PressCard from '../components/press/PressCard';
import { pressArticles } from '../data/press'; // ✅ Imported from data file

gsap.registerPlugin(ScrollTrigger);

const Press = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center rounded-3xl py-16 px-4 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">In the News</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Discover the latest news, press releases, and media coverage about Rapido.
        </p>
      </section>

      {/* Press Cards */}
      <section ref={sectionRef} className="mt-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pressArticles.map((article) => (
            <PressCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Press;
