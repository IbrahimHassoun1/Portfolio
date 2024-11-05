import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SlideComponent = ({ direction, way, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current); // Stop observing once it comes into view
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Define the base class for the slide effect
    let slideClass = 'transition-transform duration-500 ease-in-out transform';
    slideClass += isVisible ? ' translate-y-0 translate-x-0' : 
                direction === 'horizontal' ? (way === 'left' ? '-translate-x-full' : 'translate-x-full') : 
                (way === 'up' ? '-translate-y-full' : 'translate-y-full');

    return (
        <div ref={ref} className={slideClass}>
            {children}
        </div>
    );
};

// PropTypes validation
SlideComponent.propTypes = {
    direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
    way: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
    children: PropTypes.node.isRequired,
};

export default SlideComponent;
