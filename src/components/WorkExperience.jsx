// WorkExperience.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react'; 
import { workData } from '../data/workExperience'; // 🎯 Data is correctly imported here
import '../styles/workExperience.css';

// Assuming your imported workData structure is:
/*
export const workData = [
    {
        category: "Internships",
        icon: "Briefcase", 
        items: [...]
    }
];
*/

const iconMap = {
    Briefcase: Briefcase,
};


const WorkExperience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const categoryGroup = workData[0]; 
    const IconComponent = iconMap[categoryGroup.icon];

    return (
        <section id="work-experience" className="work-experience" ref={ref}>
            <motion.div
                className="work-content-wrapper"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                
                <h2 className="main-section-title">My Professional Journey</h2>

                <div className="work-category-group">
                    {/* Category Title: Internships */}
                    <h3 className="section-title-work">
                        {IconComponent && <IconComponent size={30} className="title-icon" />} 
                        {categoryGroup.category}
                    </h3>

                    {/* Minimalist Stacked Job List */}
                    <div className="timeline-container">
                        {categoryGroup.items.map((job, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                {/* Job Content Card (Stacked vertically) */}
                                <div className="job-card">
                                    <div className="job-header">
                                        <h4 className="job-title">{job.title}</h4>
                                        <span className="job-company">{job.company}</span>
                                        <span className="job-duration">{job.duration} | {job.location}</span>
                                    </div>
                                    <ul className="job-details-list">
                                        {job.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex} className="job-detail-bullet">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default WorkExperience;