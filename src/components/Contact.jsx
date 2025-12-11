// Contact.jsx
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react'; 
import '../styles/contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 🎯 CRITICAL: REPLACE 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree URL 
    fetch('YOUR_FORMSPREE_ENDPOINT', { 
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        // Handle non-OK status codes (e.g., 400, 500)
        alert('Failed to send message. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('An error occurred. Please check the console.');
    });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-content-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Let's Connect</h2>

        {/* 🚀 Unique: The container holds the two visually distinct halves */}
        <div className="unique-contact-container">
          
          {/* 1. Contact Information - Floating Card */}
          <div className="contact-info-card">
            <h3 className="info-title">Drop a Line.</h3>
            <p className="info-text">
                I'm currently seeking new challenges and would love to hear about your project ideas or available roles.
            </p>
            
            <div className="contact-details">
                <div className="detail-item">
                    <Mail size={20} className="detail-icon" />
                    <span>priyankachougule154@gmail.com</span> 
                </div>
                <div className="detail-item">
                    <Linkedin size={20} className="detail-icon" />
                    <a href="https://www.linkedin.com/in/priyanka-chougule-227569284/" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                    </a>
                </div>
                <div className="detail-item">
                    <Github size={20} className="detail-icon" />
                    <a href="https://github.com/prizzzz" target="_blank" rel="noopener noreferrer">
                        GitHub Profile
                    </a>
                </div>
            </div>
          </div>
          
          {/* 2. Contact Form - Dominant Side */}
          <form onSubmit={handleSubmit} className="unique-contact-form">
            <span className="form-prompt">Ready to start a project?</span>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Best Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Tell me about your project, timeline, or just say hello." value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="btn-send">
                <MessageSquare size={18} className="btn-icon" /> Send Securely
            </button>
          </form>
          
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;