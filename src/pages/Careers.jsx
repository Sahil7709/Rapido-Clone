// Careers.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import JobListings from "../components/careers/JobListing";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
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
              start: "top 90%",
              toggleActions: "play none none none",
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
        className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white py-16 px-4 text-center rounded-3xl shadow-lg"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Careers at Rapido</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Join Rapido and help us redefine urban mobility. We’re looking for passionate individuals to drive innovation and growth across India.
        </p>
      </section>

      {/* Job Listings */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="mt-16 py-12"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-8">Open Positions</h2>
        <JobListings />
      </section>

      {/* Application CTA */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="mt-16 py-12 mb-12 bg-gray-900 text-white text-center rounded-3xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Ride with Us?</h2>
        <p className="text-base md:text-lg mb-6">
          Apply now and be part of a team that’s transforming how India moves.
        </p>
        <a
          href="mailto:careers@rapido.bike"
          className="inline-block bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition"
        >
          Send Your Resume
        </a>
      </section>
    </div>
  );
};

export default Careers;

