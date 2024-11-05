
import {  faDatabase, faFileExcel, faFilePowerpoint, faTools } from "@fortawesome/free-solid-svg-icons";
import TechIcon from "./TechIcon"
import {
    faJsSquare, faHtml5, faCss3Alt,
    faCuttlefish, faJava,
    
    faReact,
    faPython,
    faPhp,
    faNode
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SlideUpSection from "./../../effects/SlideUpSection/SlideUpSection.jsx"
import  Lottie  from 'lottie-react';
import animationData from "./../../animations/Animation - 1730815031053.json"; // Path to your downloaded Lottie file



const Skills = () => {
  return (
    <div id="skills" className="containers min-h-60 flex flex-col items-center ">
        <div id="content" className="text-quaternary mt-5 mb-12 flex flex-col items-center w-full">

            <SlideUpSection className="text-5xl mt-3 mx-auto font-bold">Skills <FontAwesomeIcon icon={faTools}/></SlideUpSection>
            <hr className="bg-quaternary w-1/4  mt-4 h-1/4" />
            <div className="flex flex-wrap items-end justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full sm:w-2/3 justify-around mt-5 text-5xl">
                    <TechIcon icon={faReact} name="React"/>
                    
                    <TechIcon icon={faHtml5} name="HTML5"/>
                    <TechIcon icon={faCss3Alt} name="CSS3"/>
                    <TechIcon icon={faJsSquare} name="JavaScript"/>
                    <TechIcon icon={faNode} name="NodeJS"/>
                    
                
                    <TechIcon icon={faCuttlefish} name="C"/>
                    <TechIcon icon={faPython} name="Python"/>
                    <TechIcon icon={faPhp} name="php"/>
                    <TechIcon icon={faJava} name="Java"/>
                    <TechIcon icon={faFileExcel} name="Excel"/>
                    <TechIcon icon={faFilePowerpoint} name="PowerPoint"/>
                    <TechIcon icon={faDatabase} name="Java"/>
                    <TechIcon icon={faJava} name="Java"/>
                    <TechIcon icon={faDatabase} name="DataBase"/>
                    
                </SlideUpSection>
                <SlideUpSection className="w-full sm:w-1/3  m-auto"><Lottie  animationData={animationData} loop={true} /></SlideUpSection>
            </div>
            
        </div>
        
    </div>
  )
}

export default Skills