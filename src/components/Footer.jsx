// Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { Mail } from 'lucide-react'; 
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-typo-bar">
      <div className="footer-content-typo">
        
        {/* 1. Name/Signature */}
        <span className="footer-typo-name">Priyanka Chougule</span>
        
        {/* 2. Social Links */}
        <div className="footer-typo-icons">
            <a href="https://www.linkedin.com/in/priyanka-chougule-227569284/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin size={18} /></a>
            <a href="https://github.com/prizzzz" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub size={18} /></a>
            <a href="mailto:priyankachougule154@gmail.com" title="Email"><Mail size={18} /></a>
        </div>

        {/* 3. Copyright */}
        <p className="footer-typo-copyright">
            © {currentYear} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;