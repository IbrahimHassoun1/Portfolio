import pfp from './../../assets/pfp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram ,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import TypingEffect from '../../effects/TypingEffect';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import SlideHorizontalSection from '../../effects/SlideHorizontalSection/SlideHorizontalSection';
import FadeInSection from "./../../effects/FadeInSection/FadeInSection.jsx"

const Header = () => {
    const {menuIsPopped,setMenuIsPopped}=useContext(MyContext)
  return (

    <div id='header' className="relative">

        <div onClick={()=>{setMenuIsPopped(false)}} className={`min-h-screen text-quaternary w-f font-primary flex flex-wrap-reverse ${menuIsPopped?"blur-lg":""}`}>

            <div id="left" className=" w-full min-h-56 sm:w-2/5 bg-quaternary text-primary sm:pt-16 flex flex-col relative"> 
            <SlideHorizontalSection direction='left' time='1.5s' className=" sm:my-auto m-auto z-10  bg-red-500  h-60 w-60   mb-12 sm:h-96 sm:w-96 sm:-mr-9 rounded-full overflow-hidden"><img src={pfp} alt="pfp"  className=''/></SlideHorizontalSection>
            

            </div>

            <div id="right" className="w-full sm:w-3/5 pt-16 flex flex-col">
                <FadeInSection time='2s' id="right-content" className="w-1/2 m-auto font-b">
                    <TypingEffect text='Full-Stack Web Developer' speed="300" />
                    <h1 className="text-4xl">IBRAHIM HASSOUN  </h1>
                    <p className="opacity-80">Hello,my name is Ibrahim Hassoun,I am a full-stack web developer,I have made several real-life projects!I&apos;m also fluent in 3 Languages,feel free to check my CV. </p>
                    <div id="buttons" className="flex justify-between mt-5 transition-colors duration-300 mb-16 sm:mb-0">
                        <button className="bg-quaternary text-primary px-3 rounded-full transition-all duration-200 hover:bg-primary hover:text-white hover:border hover:border-white ease-in-out">
                            <a href="/Curriculum Vitae(T)-5-Ibrahim Hassoun.pdf" target='_blank'>Download CV</a>
                        </button>

                        <button className="px-5 border border-quaternary rounded-full hover:bg-white hover:text-primary transition-colors duration-300 ease-in-out">
                            <a href="tel:+96181014323">Contact</a>
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

         </div>
</div>

    
  )
}

export default Header