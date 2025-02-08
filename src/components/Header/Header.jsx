import pfp from '/assets/Profile_Picture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram ,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import TypingEffect from '../../effects/TypingEffect';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import SlideHorizontalSection from '../../effects/SlideHorizontalSection/SlideHorizontalSection';
import FadeInSection from "./../../effects/FadeInSection/FadeInSection.jsx"
import "./Header.css"
const Header = () => {
    const {menuIsPopped,setMenuIsPopped}=useContext(MyContext)
    
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    }
  };

  return (

    <div id='header' className="relative">

        <div onClick={()=>{setMenuIsPopped(false)}} className={`relative min-h-[calc(70vh)] text-quaternary w-f font-primary flex flex-wrap ${menuIsPopped?"blur-lg":""}`}>

            

            <div id="left" className=" relative w-full md:w-3/5  pt-16 flex flex-col">
        
                <FadeInSection time='2s' id="right-content" className="w-1/2 m-auto font-b">
                    <div className="w-full sm:w-1/2"><TypingEffect text='Full-Stack Developer And Science Content Creator' speed="200" /></div>
                    <h1 className="text-4xl">IBRAHIM HASSOUN  </h1>
                    <p className="opacity-80">Hi! I’m a full stack dev with two degrees, fluent in three languages, a book lover, and a science enthusiast who makes short videos breaking down cool concepts. Let’s create something awesome! </p>
                    <div id="buttons" className="flex flex-col sm:flex-row justify-between mt-5 transition-colors duration-300 mb-16 sm:mb-0">
                        <button className="bg-quaternary text-primary mb-3 px-3 rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:border hover:border-white ease-in-out">
                            <a href="/Curriculum Vitae(T)-5-Ibrahim Hassoun.pdf" target='_blank'>Download CV</a>
                        </button>

                        <button  onClick={() =>{ scrollToElement('contact');setMenuIsPopped(false)}} className="px-5 border border-quaternary rounded-full hover:bg-white hover:text-primary transition-colors duration-300 ease-in-out">
                            Contact
                        </button>
                    </div>
                    
                </FadeInSection>
                <SlideHorizontalSection time='1.5s' className='containers flex justify-around pb-4 sm:pb-0 '>
                <li><a href="https://github.com/IbrahimHassoun1" target='_blank' className='transition-all ease-in-out duration-300 hover:bg-transparent  hover:text-secondary active:text-tertiary'><FontAwesomeIcon icon={faGithub} className='text-6xl'/></a></li>
                <li><a href="https://www.linkedin.com/in/ibrahim-hassoun-a8ab91281" target='_blank'  className='transition-all ease-in-out duration-300 hover:bg-transparent  hover:text-secondary  active:text-tertiary'><FontAwesomeIcon icon={faLinkedin} className='text-6xl'/></a></li>
                <li><a href="https://www.instagram.com/ma3loume.wnos/" target='_blank'  className='transition-all ease-in-out duration-300 hover:bg-transparent  hover:text-secondary  active:text-tertiary'><FontAwesomeIcon icon={faInstagram} className='text-6xl'/></a></li>
                <li><a href="" className='transition-all ease-in-out duration-300 hover:bg-transparent  hover:text-secondary  active:text-tertiary' ><FontAwesomeIcon icon={faFacebook} className='text-6xl'/></a></li>
                <li><a href="mailto:ihassoun73@gmail.com"  className='transition-all ease-in-out duration-300 hover:bg-transparent  hover:text-secondary  active:text-tertiary'><FontAwesomeIcon icon={faEnvelope } className='text-6xl'/></a></li>
                </SlideHorizontalSection>
            </div>
            
            <div id="right" className=" w-full min-h-56 md:w-2/5 bg-quaternary text-primary sm:pt-16 flex flex-col relative"> 
            <svg
            className=" liquid-shape  h-[calc(100vh+1px)] left-[calc(-1px)] top-0 -scale-x-100  md:absolute md:block hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 1440" 
        >
            <path
            className='m-auto'
            fill="#001F3F"
            d="M224,0L197.3,30C171,60,117,120,117.3,180C117,240,171,300,176,360C181,420,139,480,122.7,540C107,600,117,660,133.3,720C149,780,171,840,160,900C149,960,107,1020,101.3,1080C96,1140,128,1200,149.3,1260C171,1320,181,1380,186.7,1410L192,1440L320,1440L320,1410C320,1380,320,1320,320,1260C320,1200,320,1140,320,1080C320,1020,320,960,320,900C320,840,320,780,320,720C320,660,320,600,320,540C320,480,320,420,320,360C320,300,320,240,320,180C320,120,320,60,320,30L320,0Z"
            ></path>
        </svg>
        

            <SlideHorizontalSection direction='right' time='1.5s' className="  m-auto z-30 h-1/2  rounded-full overflow-hidden"><img src={pfp} alt="pfp"  className='h-full w-full'/></SlideHorizontalSection>
            <SlideHorizontalSection direction='right' time='1.5s' className="bg-attention  text-quaternary rounded-full w-1/2 h-12 text-4xl hover:opacity-35 active:bg-primary m-auto text-center cursor-pointer"  > <button onClick={() =>{ scrollToElement('contact')}}>Hire me!</button></SlideHorizontalSection>
            </div>
            
         </div>
</div>

    
  )
}

export default Header