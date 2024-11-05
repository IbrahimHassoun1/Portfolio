import { useInView } from 'react-intersection-observer';
import './FadeInSection.css'; // Minimal CSS to avoid conflicts
import PropTypes from 'prop-types';

const FadeInSection = ({ children, className, time = '1s' }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div 
      ref={ref} 
      className={`${className} fade-in-section ${inView ? 'visible' : ''}`}
      style={{ transitionDuration: time }} // Apply the transition duration
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,  // Validates any renderable content
  className: PropTypes.string,           // Optional string for custom CSS class
  time: PropTypes.string,                // Optional string for transition duration
};

export default FadeInSection;
