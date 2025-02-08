import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import SlideUpSection from "../../effects/SlideUpSection/SlideUpSection";

const ProjectCard = ({ videoSrc, description, title, direction, time, code, link, features, technologies }) => {
  return (
    <SlideUpSection direction={direction} time={time} className="text-white w-full sm:w-2/5 pb-4 min-h mb-3 shadow-sm hover:shadow-lg hover:shadow-secondary shadow-secondary hover:mr-2 hover:mb-2 transition-all duration-300 rounded-xl overflow-hidden flex flex-col">
      <div className="border-b">
        
        <video 
          src={videoSrc} 
          loop
          autoPlay
          muted
          playsInline
          className="cursor-pointer w-full" 
          alt=""
        />
       
      </div>
      <div id="project-description" className="bg-primary h-full pl-3 mt-3">
        <div className="flex justify-between">
          <h1 className="text-3xl text-quaternary">{title}</h1>
          <div id="buttons" className="flex justify-center items-center mr-3">
            <button className="bg-quaternary text-primary px-3 rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:border hover:border-white ease-in-out mr-2">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visit Website
                <FontAwesomeIcon icon={faLink} className="ml-2"/>
              </a>
            </button>
            <button className="px-5 border border-quaternary rounded-full hover:bg-white hover:text-primary transition-colors duration-300 ease-in-out">
              <a href={code} target="_blank" rel="noopener noreferrer">
                Code
                <FontAwesomeIcon icon={faCode} className="ml-2"/>
              </a>
            </button>
          </div>
        </div>
        <p className="opacity-80 mb-4">{description}</p>
        
        {/* Render Features as Attractive Badges */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 ">
            {features.map((feature, index) => (
              <div key={index} className="bg-secondary text-quaternary px-3 py-1 rounded-full text-sm flex items-center shadow-md cursor-pointer hover:bg-transparent border border-transparent hover:shadow-md  hover:shadow-tertiary hover:mx-2 hover:border-quaternary transition-all duration-500">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                {feature}
              </div>
            ))}
          </div>
        )}

        
        {/* Render Technologies Used */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-tertiary text-quaternary px-3 py-1 rounded-full text-sm flex items-center shadow-md cursor-pointer hover:bg-transparent border border-transparent hover:shadow-md  hover:shadow-tertiary hover:mx-2 hover:border-quaternary transition-all duration-500">
                <FontAwesomeIcon icon={tech.icon} className="mr-2 " />
                {tech.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </SlideUpSection>
  );
}

ProjectCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  direction: PropTypes.string,
  code: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  time: PropTypes.number,
  features: PropTypes.arrayOf(PropTypes.string),
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired // Expecting an icon object (e.g., FontAwesome icon)
    })
  )
}

export default ProjectCard;
