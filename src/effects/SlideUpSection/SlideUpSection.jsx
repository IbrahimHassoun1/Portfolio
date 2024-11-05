
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const SlideUpSection = ({ children, className }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const styles = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)', // Slide effect
    transition: 'opacity 2.5s ease, transform 2.5s ease',
  };

  return (
    <div 
      ref={ref} 
      className={`${className} slide-up-section`} 
      style={styles}
    >
      {children}
    </div>
  );
};

SlideUpSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SlideUpSection;
