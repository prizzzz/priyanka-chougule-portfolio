// Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle link clicks and close the menu
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo/Name */}
                <div className="navbar-logo">Priyanka Chougule</div> 
                
                {/* Desktop Menu */}
                <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="hero" smooth={true} duration={500} onClick={handleLinkClick}>Home</Link>
                    <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>About</Link>
                    <Link to="projects" smooth={true} duration={500} onClick={handleLinkClick}>Projects</Link>
                    <Link to="work-experience" smooth={true} duration={500} onClick={handleLinkClick}>Experience</Link>
                    <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick}>Contact</Link>
                </div>
                
                {/* Social Icons (Desktop) */}
                <div className="navbar-icons">
                    <a href="https://www.linkedin.com/in/priyanka-chougule-227569284/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                    <a href="https://github.com/prizzzz" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                </div>
                
                {/* Hamburger for Mobile */}
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span className={isOpen ? 'open' : ''}></span>
                    <span className={isOpen ? 'open' : ''}></span>
                    <span className={isOpen ? 'open' : ''}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;