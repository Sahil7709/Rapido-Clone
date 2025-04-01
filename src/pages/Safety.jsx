import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SafetyFeatures from '../components/safety/SafetyFeatures';
import CaptainSafety from '../components/safety/CaptainSafety';
import RiderSafety from '../components/safety/RiderSafety';
import { ShieldCheck, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Safety = () => {
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
        className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl text-white py-16 px-4 text-center shadow-xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Safety at Rapido</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your safety is our priority. Ride with confidence knowing Rapido is committed to secure, reliable commuting for all.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover" />
      </section>

      {/* Safety Features */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="mt-16 py-12"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-2">
          <ShieldCheck className="text-orange-500" /> Our Safety Measures
        </h2>
        <SafetyFeatures />
      </section>

      {/* Captain Safety Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="mt-16 py-12"
      >
        <CaptainSafety />
      </section>

      {/* Rider Safety Section */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="mt-16 py-12"
      >
        <RiderSafety />
      </section>

      {/* Safety CTA */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="mt-16 py-12 mb-12 bg-gray-900 rounded-3xl text-white text-center shadow-xl"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
            <Phone className="text-orange-400" /> Ride Safe with Rapido
          </h2>
          <p className="text-lg mb-6">
            Learn more about our safety guidelines or reach out for 24/7 support.
          </p>
          <a
            href="mailto:support@rapido.bike"
            className="inline-block bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300 shadow-md"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default Safety;
