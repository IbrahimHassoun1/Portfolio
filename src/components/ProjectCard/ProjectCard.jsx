import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLink,faCode} from '@fortawesome/free-solid-svg-icons';
import SlideUpSection from "../../effects/SlideUpSection/SlideUpSection";

const ProjectCard = ({videoSrc,description,title,direction,time}) => {
  return (
    <SlideUpSection direction={direction} time={time} className="text-white w-full sm:w-2/5 min-h mb-3 shadow-sm hover:shadow-lg hover:shadow-secondary shadow-secondary hover:mr-2 hover::mb-2 transition-all duration-300 rounded-xl overflow-hidden flex flex-col ">
      <div className="border-b"><video 
        src={videoSrc} 
        loop
        autoPlay
        muted
        className="cursor-pointer w-full" 
        alt=""
      /></div>
      <div id="project-description" className="bg-primary h-full pl-3 mt-3">
        <div className="flex justify-between">
          <h1 className="text-3xl text-quaternary">{title}</h1>
          <div id="buttons" className="flex justify-center items-center mr-3">
                        <button className="bg-quaternary text-primary px-3 rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:border hover:border-white ease-in-out mr-2">
                            Visit Website
                            <FontAwesomeIcon icon={faLink} className="ml-2"/>
                        </button>

                        <button className="px-5 border border-quaternary rounded-full hover:bg-white hover:text-primary transition-colors duration-300 ease-in-out">
                            Code
                            <FontAwesomeIcon icon={faCode} className="ml-2"/>
                        </button>
          </div>
        </div>
        <p className="opacity-80 mb-4">{description}</p>
      </div>
    </SlideUpSection>
  )
}
  ProjectCard.propTypes={
    videoSrc:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    direction:PropTypes.string.isRequired,
    time:PropTypes.number
  }
export default ProjectCard