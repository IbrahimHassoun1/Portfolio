import ProjectCard from "../ProjectCard/ProjectCard"
import SlideUpSection from "../../effects/SlideUpSection/SlideUpSection";
import  Lottie  from 'lottie-react';
import animationData from "./../../animations/folder.json"; 


const Projects = () => {
  return (
    <div className="min-h-screen containers text-quaternary flex flex-col flex-wrap items-center ">
        <SlideUpSection className="text-5xl my-9 mx-auto font-bold flex justify-center items-center h-8">PROJECTS <Lottie  animationData={animationData} loop={true} className="h-20"/></SlideUpSection>
        
        <table className="min-h-72 w-full  flex flex-wrap justify-around mt-3">
            <ProjectCard direction="left" time={100} videoSrc="/tl_alrabaa.mp4" description="This is a real-life e-commerce project" title="Tl-Alrabaa" link="https://tl-alrabaa.vercel.app/" code="https://github.com/IbrahimHassoun1/Tl-Alrabaa" />

            <ProjectCard direction="left" time={100} videoSrc="/tl_alrabaa.mp4" description="This is a real-life e-commerce project" title="Tl-Alrabaa" link="https://tl-alrabaa.vercel.app/" code="https://github.com/IbrahimHassoun1/Tl-Alrabaa" />
           </table>
        
    </div>
  )
}

export default Projects