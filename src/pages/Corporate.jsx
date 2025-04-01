// Corporate.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CorporateCard from '../components/corporate/CorporateCard';
import { corporateSolutions } from '../data/corporate';

gsap.registerPlugin(ScrollTrigger);

const Corporate = () => {
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
      <section className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center rounded-3xl py-16 px-4 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Corporate Solutions</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Partner with Rapido for hassle-free employee commute, last-mile delivery, and fleet solutions for your business.
        </p>
      </section>

      <section ref={sectionRef} className="mt-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {corporateSolutions.map((solution) => (
            <CorporateCard key={solution.id} solution={solution} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Corporate;