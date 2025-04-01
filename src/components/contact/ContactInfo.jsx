// ContactInfo.jsx
const contactDetails = [
  {
    title: 'Email Us',
    detail: 'support@rapido.bike',
    link: 'mailto:support@rapido.bike',
  },
  {
    title: 'Call Us',
    detail: '+91 123-456-7890',
    link: 'tel:+911234567890',
  },
  {
    title: 'Visit Us',
    detail: 'Rapido HQ, Pune, India',
    link: '#',
  },
];

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {contactDetails.map((item) => (
        <div
          key={item.title}
          className="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <a href={item.link} className="text-orange-500 hover:underline block">
            {item.detail}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;