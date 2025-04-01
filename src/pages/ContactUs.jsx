// ContactUs.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import AddressDetails from "../components/contact/AddressDetails";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
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
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white py-16 px-4 text-center rounded-3xl shadow-lg"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Rapido</h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          We’re here to help! Reach out for support, feedback, or any questions about Rapido.
        </p>
      </section>

      <section ref={(el) => (sectionRefs.current[1] = el)} className="mt-16 py-12">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-10">Get in Touch</h2>
        <ContactInfo />
      </section>

      <section ref={(el) => (sectionRefs.current[2] = el)} className="mt-16 py-12 bg-gray-100 rounded-3xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Send Us a Message</h2>
        <ContactForm />
      </section>

      <section ref={(el) => (sectionRefs.current[3] = el)} className="mt-16 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Office</h2>
        <AddressDetails />
      </section>
    </div>
  );
};

export default ContactUs;