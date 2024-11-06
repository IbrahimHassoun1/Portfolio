import SlideUpSection from "./../../effects/SlideUpSection/SlideUpSection.jsx"
import  Lottie  from 'lottie-react';
import animationData from "./../../animations/studying2.json"; 
import animationData2 from "./../../animations/Education.json"; 
import EducationCard from "./EducationCard.jsx";
import { faComputer, faDna, faMicroscope } from "@fortawesome/free-solid-svg-icons";


const Education = () => {
  return (
    <div id="skills" className="containers min-h-60 flex flex-col items-center ">
        <div id="content" className="text-quaternary mt-20 mb-12 flex flex-col items-center w-full">

            <SlideUpSection className="text-5xl mt-3 mx-auto font-bold h-8 flex justify-center items-center mb-9"> Education <Lottie  animationData={animationData2} loop={true} className="h-20"/></SlideUpSection>
           
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full sm:w-2/3 justify-around mt-5 text-5xl">
                    <EducationCard title="B.S in Computer Science" description="blabla" gpa="3.0" transcripts="/Transcript_info.pdf" icon={faComputer} date="October 2023-Present"/>
                    <EducationCard title="B.S in Biology" description="blabla" gpa={3.2} transcripts="/Transcript_1.pdf" icon={faDna} date="October 2019-June 2023"/>
                    <EducationCard title="Life Sciences Diploma" description="blabla" gpa="4.0" transcripts=";;;" icon={faMicroscope}/>
                    
                </SlideUpSection>
                <SlideUpSection className="w-full sm:w-1/3  m-auto"><Lottie  animationData={animationData} loop={true} /></SlideUpSection>
            </div>
            
        </div>
        
    </div>
  )
}

export default Education