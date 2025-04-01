import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import FAQSection from '../components/home/FAQSection';
import HeroBanner from '../components/home/HeroBanner';
import Testimonials from '../components/home/Testimonials';
import BookingForm from '../components/ride/BookingForm';
import ServiceCards from '../components/ride/ServiceCards';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
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
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <div ref={(el) => (sectionRefs.current[0] = el)}>
        <HeroBanner />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)}>
        <BookingForm />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)}>
        <ServiceCards />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)}>
        <Testimonials />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)}>
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
