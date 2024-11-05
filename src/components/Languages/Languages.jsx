import SlideUpSection from "../../effects/SlideUpSection/SlideUpSection"
import ProgressBar from "./ProgressBar"

const Languages = () => {
  return (
    <div className="containers flex justify-center">
        <div className="w-full flex flex-col  items-center text-quaternary">
            <SlideUpSection className="text-5xl">Languages</SlideUpSection>
            <hr className="bg-quaternary mt-5 w-1/4"/>
            <ProgressBar label='English' level={9} description="CEFR C1 (IELTS 8.0)" className="w-full"/>
            <ProgressBar label='French' level={8} description="CEFR B2 (DELF)" className="w-full"/>
            <ProgressBar label='Arabic' level={9.5} description="Native Speaker" className="w-full"/>
            <ProgressBar label='German' level={6} description="CEFR A2" className="w-full"/>
            <ProgressBar label='Spanish' level={2} description="Basics" className="w-full"/>
            
        </div>
        
    </div>
  )
}

export default Languages