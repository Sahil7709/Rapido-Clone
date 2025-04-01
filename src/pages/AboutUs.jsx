import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TeamSection from '../components/about/TeamSection';
import CareersCTA from '../components/about/CareersCTA';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%', // delayed animation trigger
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* About Hero Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white py-16 px-4 text-center rounded-3xl shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4">About Rapido</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Rapido is India’s largest bike taxi service, revolutionizing urban mobility with fast,
          affordable, and reliable rides. Our mission is to make commuting seamless for millions.
        </p>
      </section>

      {/* Team Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="mt-16 py-12"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Team</h2>
        <TeamSection />
      </section>

      {/* Careers CTA Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="mt-16 py-12"
      >
        <CareersCTA />
      </section>
    </div>
  );
};

export default AboutUs;
