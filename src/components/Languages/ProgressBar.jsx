import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import FadeInSection from "../../effects/FadeInSection/FadeInSection";

const ProgressBar = ({ label, level, description }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const targetWidth = (level / 10) * 100; // Assuming level is out of 10
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedWidth(targetWidth); // Start animation when in view
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect);
    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [level, progressBarRef]);

  return (
    <div className="mb-2 w-full flex flex-wrap items-center justify-center h-full" ref={progressBarRef}>
      <div className="flex justify-center ite mb-1 text-3xl sm:w-1/6">
        <FadeInSection className="mr-4">{label}:</FadeInSection>
      </div>

      <div className="bg-secondary rounded-full h-8 w-full sm:w-4/6 relative">
        <div
          className="bg-quaternary h-8 rounded-full transition-all duration-3000 flex items-center justify-center"
          style={{ width: `${animatedWidth}%` }}
        >
          <span className=" text-sm text-primary">{description}</span>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProgressBar;
