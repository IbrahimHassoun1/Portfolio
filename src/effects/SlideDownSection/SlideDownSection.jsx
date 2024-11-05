
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const SlideDownSection = ({ children, className }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true }); // Increased threshold

  const styles = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-40px)', // Increased upward slide
    transition: 'opacity 2.5s ease 0.5s, transform 2.5s ease 0.5s', // Added delay
  };

  return (
    <div 
      ref={ref} 
      className={`${className} slide-down-section`} 
      style={styles}
    >
      {children}
    </div>
  );
};

SlideDownSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SlideDownSection;
