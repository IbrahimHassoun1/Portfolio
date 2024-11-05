import SlideHorizontalSection from "./../../effects/SlideHorizontalSection/SlideHorizontalSection"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const NavPopUp = () => {
    const {setMenuIsPopped}=useContext(MyContext)
  return (
    <SlideHorizontalSection direction="left" className='absolute top-0 left-0 z-20  sm:w-1/4 w-full min-h-screen rounded-r-3xl  bg-primary flex flex-col'>

<button onClick={() => setMenuIsPopped(false)} className="ml-auto mr-5 mt-5 cursor-pointer">
  <FontAwesomeIcon icon={faTimes} className="text-quaternary text-4xl cursor-pointer" />
</button>


        <ul className=" containers m-auto text-primary text-center">
            <SlideHorizontalSection time="1s" ><button className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary "><FontAwesomeIcon icon={faHome} className="mr-2"/> Home</button></SlideHorizontalSection>
            <SlideHorizontalSection time="1s" direction="left"><button className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary  mt-3"><FontAwesomeIcon icon={faFolder} className="mr-2"/>Projects</button></SlideHorizontalSection>
            <SlideHorizontalSection time="1s" ><button className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary  mt-3"><FontAwesomeIcon icon={faTools} className="mr-2"/>Skills</button></SlideHorizontalSection>
            <SlideHorizontalSection time="1s" direction="left"><button className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary  mt-3"><FontAwesomeIcon icon={faGraduationCap} className="mr-2"/>Education</button></SlideHorizontalSection>
            <SlideHorizontalSection time="1s" ><button className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary  mt-3"><FontAwesomeIcon icon={faLanguage} className="mr-2"/>Languages</button></SlideHorizontalSection>
            <SlideHorizontalSection time="1s" direction="left" ><button className="bg-transparent text-quaternary border border-quaternary w-1/2 h-12 m-auto mt-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-quaternary hover:border-quaternary hover:text-primary active:bg-white active:text-primary transition-all ease-in-out duration-300"><FontAwesomeIcon icon={faPhone} className="mr-2"/>contact</button></SlideHorizontalSection>
            
          
        </ul>
    </SlideHorizontalSection>
  )
}

export default NavPopUp