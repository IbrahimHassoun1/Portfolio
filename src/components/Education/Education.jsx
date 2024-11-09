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
                    <EducationCard title="B.S in Biology"
                     description="Throughout my Bachelor of Science in Biology, Earth, and Life Sciences at Lebanese University, I completed a comprehensive curriculum that provided me with a strong foundation in both theoretical and applied biological sciences. The program began with core courses in cytology, histology, botany, genetics, and general chemistry, which equipped me with essential knowledge in cell structure, plant reproduction, and basic biochemical processes. As I progressed, I delved into advanced subjects like microbiology, animal biology, and biochemistry, gaining expertise in laboratory techniques, safety protocols, and ecological principles. Courses in physiology, genetics, and biotechnology allowed me to explore complex biological systems, while studies in biostatistics and computer skills tailored for biologists enhanced my analytical capabilities. This rigorous coursework prepared me with a well-rounded understanding of biology, emphasizing both life sciences and environmental dynamics, along with practical lab and research skills essential for a career in the biological sciences." 
                     gpa={3.2} transcripts="/Transcript_1.pdf" icon={faDna} date="October 2019-June 2023"/>
                    <EducationCard title="Life Sciences Diploma" description="blabla" gpa="4.0" transcripts=";;;" icon={faMicroscope}/>
                    
                </SlideUpSection>
                <SlideUpSection className="w-full sm:w-1/3  m-auto"><Lottie  animationData={animationData} loop={true} /></SlideUpSection>
            </div>
            
        </div>
        
    </div>
  )
}

export default Education