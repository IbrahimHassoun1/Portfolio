
import { useInView } from 'react-intersection-observer';
import './SlideHorizontalSection.css'; // Custom CSS for horizontal slide effect
import PropTypes from 'prop-types';

const SlideHorizontalSection = ({ children, direction = 'right', className, time = '500ms' }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div 
      ref={ref} 
      className={`${className} slide-horizontal-section ${direction} ${inView ? 'visible' : ''}`}
      style={{ transitionDuration: time }}
    >
      {children}
    </div>
  );
};

SlideHorizontalSection.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['right', 'left']), // Slide in from either right or left
  className: PropTypes.string,
  time: PropTypes.string, // Animation duration (e.g., '500ms' or '1s')
};

export default SlideHorizontalSection;
