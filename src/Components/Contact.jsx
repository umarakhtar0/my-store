
/*
import React from 'react';
import '../App.scss'; // Ensure this file includes all styles

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-description">
        I'm always excited to work on new projects and collaborate with talented individuals. If you have any questions, want to work together, or just want to say hi, feel free to reach out!
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
*/ /*
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure you have this package installed
import '../App.scss'; // Ensure this file includes all styles

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_1rlx9f9', // Service ID
      'template_sx2b3yw', // Template ID
      {
        from_name: form.from_name,
        from_email: form.from_email,
        message: form.message
      },
      'FpbtK9jgN-gptlepA' // Public Key
    )
    .then((response) => {
      console.log('Success:', response);
      setStatus('Message sent successfully!');
      setForm({ from_name: '', from_email: '', message: '' }); // Clear form fields
    })
    .catch((error) => {
      console.log('Error:', error);
      setStatus('Error sending message. Please try again.');
    });
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-description">
        I'm always excited to work on new projects and collaborate with talented individuals. If you have any questions, want to work together, or just want to say hi, feel free to reach out!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
        {status && <p>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
*/

/*
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Ensure this package is installed
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import '../App.scss'; // Ensure this file includes all styles

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_1rlx9f9', // Service ID
      'template_sx2b3yw', // Template ID
      {
        from_name: form.from_name,
        from_email: form.from_email,
        message: form.message
      },
      'FpbtK9jgN-gptlepA' // Public Key
    )
    .then((response) => {
      console.log('Success:', response);
      toast.success('Message sent successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
      setForm({ from_name: '', from_email: '', message: '' }); // Clear form fields
    })
    .catch((error) => {
      console.log('Error:', error);
      toast.error('Error sending message. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      });
    });
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-description">
        I'm always excited to work on new projects and collaborate with talented individuals. If you have any questions, want to work together, or just want to say hi, feel free to reach out!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      <ToastContainer /> 
    </section>
  );
};

export default Contact;
*/


// src/Components/Contact.jsx
// src/Components/Contact.jsx
// src/Components/Contact.jsx
// src/Components/Contact.jsx

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.scss'; // Ensure this file includes all styles

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_1rlx9f9', // Service ID
      'template_sx2b3yw', // Template ID
      {
        from_name: form.from_name,
        from_email: form.from_email,
        message: form.message
      },
      'FpbtK9jgN-gptlepA' // Public Key
    )
    .then((response) => {
      console.log('Success:', response);
      toast.success('Message sent successfully!', {
        position: "top-center", // Position of the toast
        autoClose: 3000, // Duration in milliseconds
      });
      setForm({ from_name: '', from_email: '', message: '' }); // Clear form fields
    })
    .catch((error) => {
      console.log('Error:', error);
      toast.error('Error sending message. Please try again.', {
        position: "top-center", // Position of the toast
        autoClose: 3000, // Duration in milliseconds
      });
    });
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-description">
        I'm always excited to work on new projects and collaborate with talented individuals. If you have any questions, want to work together, or just want to say hi, feel free to reach out!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false} // Ensure the toast does not close on click
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false} // Ensure the toast does not stop on hover
      />
    </section>
  );
};

export default Contact;
