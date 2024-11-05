import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import FadeInSection from "../../effects/FadeInSection/FadeInSection";

const ProgressBar = ({ label, level,description }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const progressBarRef = useRef(null); // Ref to the progress bar element

  useEffect(() => {
    const targetWidth = (level / 10) * 100; // Assuming level is out of 10
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedWidth(targetWidth); // Start animation when in view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect);
    if (progressBarRef.current) {
      observer.observe(progressBarRef.current); // Observe the progress bar element
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current); // Cleanup on unmount
      }
    };
  }, [level, progressBarRef]); // Added progressBarRef to the dependencies

  return (
    <div className="mb-2 w-full flex items-center " ref={progressBarRef}>

      <div className="flex justify-center mb-1 text-4xl sm:w-1/6">
        <FadeInSection className="mr-4">{label}:</FadeInSection>
      </div>

      <div className="bg-secondary rounded-full h-4 w-full sm:w-3/6">
        <div
          className="bg-quaternary h-4 rounded-full transition-all duration-3000" 
          style={{ width: `${animatedWidth}%` }}
        ></div>
      </div>

      <FadeInSection className="text-4xl sm:w-2/6 text-center">{description}</FadeInSection>

    </div>
    
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  description:PropTypes.string.isRequired
};

export default ProgressBar;
