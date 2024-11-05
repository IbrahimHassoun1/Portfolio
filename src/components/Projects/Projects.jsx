import ProjectCard from "../ProjectCard/ProjectCard"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import SlideUpSection from "../../effects/SlideUpSection/SlideUpSection";

const Projects = () => {
  return (
    <div className="min-h-screen containers text-quaternary flex flex-col flex-wrap items-center">
        <SlideUpSection className="text-5xl mt-3 mx-auto font-bold">PROJECTS <FontAwesomeIcon icon={faFolder}/></SlideUpSection>
        <hr className="bg-quaternary w-1/4 mt-4 h-1/4" />
        <table className="min-h-72 w-full  flex flex-wrap justify-around mt-3">
            <ProjectCard direction="left" time={100} videoSrc="/src/assets/tl_alrabaa.mp4" description="This is a real-life e-commerce project" title="Tl-Alrabaa" />

            <ProjectCard direction="left" time={100} videoSrc="/src/assets/tl_alrabaa.mp4" description="This is a real-life e-commerce project" title="Tl-Alrabaa" />
           </table>
        
    </div>
  )
}

export default Projects