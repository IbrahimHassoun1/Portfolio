import PropTypes from "prop-types";
import SlideUpSection from "../../effects/SlideUpSection/SlideUpSection";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EducationCard = ({ title, description, gpa, transcripts, date, icon }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <SlideUpSection
      className="min-h-20 overflow-hidden w-full text-lg border border-secondary rounded-lg cursor-pointer hover:bg-secondary   transition-all duration-500 hover:mr-3 hover:mb-3 shadow-tertiary shadow-sm hover:shadow-md hover:shadow-tertiary p-4 sm:p-6 md:p-8"
    >
      <div className="content w-full flex flex-col pl-4 justify-between space-y-4" onClick={toggleDetails}>
      
        <div id="main-content" className="flex items-center w-full">
          <FontAwesomeIcon icon={icon} className=" mr-2" />
          <div className="capitalize font-bold text-xl sm:text-2xl">{title}</div>
          <div className="ml-1 opacity-70 text-sm sm:text-base">GPA: {gpa}</div>
          <div className="ml-auto pr-2 flex space-x-2">
            
            {/* Transcripts Button */}
            <button
              className="bg-quaternary text-primary px-3 py-1 text-sm rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:border hover:border-white ease-in-out"
              onClick={() => window.open(transcripts, "_blank")}
            >
              Transcripts
            </button>

            {/* Show Details Button */}
            <button
              onClick={toggleDetails}
              className="px-3 py-1 border border-quaternary text-sm rounded-full hover:bg-white hover:text-primary transition-colors duration-300 ease-in-out"
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
          </div>
        </div>

        {/* Date Section */}
        <div className="text-sm opacity-60">{date}</div>

        {/* Details Section (Slide Down Animation) */}
        <div
          id="details"
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${showDetails ? "max-h-96" : "max-h-0"}`}
        >
          <p className="text-base sm:text-lg mt-2">
            {description}
          </p>
        </div>
      </div>
    </SlideUpSection>
  );
};

EducationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  transcripts: PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,  // New prop for icon
};

export default EducationCard;
