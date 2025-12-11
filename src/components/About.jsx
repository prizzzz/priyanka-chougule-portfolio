// About.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/skills"; 
// Import Lucide icons used in the skill data
import { Server, Monitor, Database, Brain, Wrench } from 'lucide-react'; 
import "../styles/about.css";

// Helper map to connect string names in data to actual Lucide components
const iconMap = {
    monitor: Monitor,
    server: Server,
    database: Database,
    brain: Brain,
    wrench: Wrench,
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-inner-single-col"
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
          {/* 1. TOP ROW: About Me (Ultra-Brief Content) */}
          <div className="about-text-content">
            <h2 className="section-title-about">About Me</h2>
            <p className="about-paragraph">
                I’m Priyanka Chougule, a final-year Electronics & Computer Science student passionate about building full-stack web applications and data-driven solutions. I focus on writing clean, efficient code and creating user-friendly, scalable products.
            </p>
          </div>

          {/* 2. BOTTOM ROW: Skills Grid (The Aesthetic Showcase - Launched Directly) */}
          <div className="skills-showcase-stacked">
            
            <div className="skills-category-grid">
              {skillsData.map((skillGroup, groupIndex) => {
                const IconComponent = iconMap[skillGroup.icon];

                return (
                  <motion.div 
                    key={groupIndex} 
                    className="skill-category-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
                  >
                    
                    {/* Category Title and Icon */}
                    <div className="category-header">
                      {IconComponent && <IconComponent size={24} className="category-icon" />}
                      <h3 className="category-title">{skillGroup.category}</h3>
                    </div>

                    {/* Skill List (Tags) */}
                    <div className="skill-tags-wrapper">
                      {skillGroup.list.map((skillName, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skillName}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
      </motion.div>
    </section>
  );
};

export default About;