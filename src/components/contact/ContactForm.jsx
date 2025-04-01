// ContactForm.jsx
import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { submitContactForm } from '../../api/contactApi';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setResponseMessage('');
    try {
      const response = await submitContactForm(formData);
      setResponseMessage(response.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setResponseMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white rounded-2xl p-6 shadow space-y-4 text-gray-700"
    >
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded p-2 h-32 resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className={`w-full bg-orange-500 text-white py-2 rounded-2xl hover:bg-orange-600 transition ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
      {responseMessage && (
        <p className={`text-center text-sm ${responseMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;