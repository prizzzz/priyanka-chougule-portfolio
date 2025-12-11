// Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* ... (Typography remains the same) ... */}
        <motion.p
          className="hero-greeting" 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hello, I am
        </motion.p>
        
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Priyanka Chougule
        </motion.h1>

        <motion.h2 
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Building Scalable Web Solutions
        </motion.h2>

        <motion.p
          className="hero-description-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Full-Stack Developer focused on modern technologies and clean product design, with a background in AI/ML frameworks.
        </motion.p>

        <div className="hero-buttons">
          
          {/* 🚀 PRIMARY CTA: Change class to Filled Purple */}
          <motion.button
            className="btn-primary-hero-purple-fill" 
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="projects" smooth={true} duration={500}>View Featured Work</Link>
          </motion.button>
          
          {/* SECONDARY CTA: Outline Purple remains the same */}
          <motion.button
            className="btn-outline-hero-purple"
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="contact" smooth={true} duration={500}>Get in Touch</Link>
          </motion.button>
        </div>
      </motion.div>

      <div className="hero-bg-blur"></div>
    </section>
  );
};

export default Hero;