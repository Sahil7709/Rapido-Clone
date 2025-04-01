export const submitContactForm = (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData); // Simulate server logging
        resolve({ message: 'Thank you! Your message has been sent.' });
      }, 1000); // Simulate network delay
    });
  };