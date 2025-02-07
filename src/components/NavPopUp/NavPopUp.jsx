import SlideHorizontalSection from "./../../effects/SlideHorizontalSection/SlideHorizontalSection"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTools, faGraduationCap, faLanguage, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const NavPopUp = () => {
  const { setMenuIsPopped } = useContext(MyContext);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start', // Align to the start of the container
      });
    }
  };

  return (
    <SlideHorizontalSection direction="left" className='absolute top-0 left-0 z-20 sm:w-1/4 w-full min-h-screen rounded-r-3xl bg-primary flex flex-col'>
      <button onClick={() => setMenuIsPopped(false)} className="ml-auto mr-5 mt-5 cursor-pointer">
        <FontAwesomeIcon icon={faTimes} className="text-quaternary text-4xl cursor-pointer" />
      </button>

      <ul className="containers m-auto text-primary text-center">
        
        <SlideHorizontalSection time="1s" direction="left">
          <button
            className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary mt-3"
            onClick={() => {scrollToElement('projects');setMenuIsPopped(false)}}
          >
            <FontAwesomeIcon icon={faFolder} className="mr-2" /> Projects
          </button>
        </SlideHorizontalSection>

        <SlideHorizontalSection time="1s">
          <button
            className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary mt-3"
            onClick={() => {scrollToElement('skills');setMenuIsPopped(false)}}
          >
            <FontAwesomeIcon icon={faTools} className="mr-2" /> Skills
          </button>
        </SlideHorizontalSection>

        <SlideHorizontalSection time="1s" direction="left">
          <button
            className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary mt-3"
            onClick={() => {scrollToElement('education');setMenuIsPopped(false)}}
          >
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> Education
          </button>
        </SlideHorizontalSection>

        <SlideHorizontalSection time="1s">
          <button
            className="bg-quaternary w-1/2 h-12 m-auto rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-transparent border hover:border-white hover:text-white active:bg-white active:text-primary mt-3"
            onClick={() => {scrollToElement('languages');setMenuIsPopped(false)}}
          >
            <FontAwesomeIcon icon={faLanguage} className="mr-2" /> Languages
          </button>
        </SlideHorizontalSection>

        <SlideHorizontalSection time="1s" direction="left">
          <button
            className="bg-transparent text-quaternary border border-quaternary w-1/2 h-12 m-auto mt-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-quaternary hover:border-quaternary hover:text-primary active:bg-white active:text-primary transition-all ease-in-out duration-300"
            onClick={() => scrollToElement('contact')}
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> Contact
          </button>
        </SlideHorizontalSection>
      </ul>
    </SlideHorizontalSection>
  );
}

export default NavPopUp;
