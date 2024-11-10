
import BookIcon from "./BookIcon.jsx"

import SlideUpSection from "./../../effects/SlideUpSection/SlideUpSection.jsx"
import  Lottie  from 'lottie-react';

import animationData2 from "./../../animations/Education.json"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faDna, faDollar, faTasks, faThLarge } from "@fortawesome/free-solid-svg-icons";

import "./Books.css"

const Books = () => {
  return (
    <div id="Books" className=" books containers min-h-60 flex flex-col items-center ">
        <div id="content" className="text-quaternary mt-5 mb-12 flex flex-col items-center w-full">

            <SlideUpSection className="text-5xl mt-3 mx-auto font-bold h-8 flex justify-center items-center "><Lottie  animationData={animationData2} loop={true} className="h-20"/> BOOKS <Lottie  animationData={animationData2} loop={true} className="h-20"/></SlideUpSection>

            <h1 className=" my-7"><FontAwesomeIcon icon={faComputer}/> Informatics </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full  justify-around mt-5 text-5xl">
                    <BookIcon icon="/public/The Pragmatic Programmer.jpg" name="The Pragmatic Programmer"/>
                    <BookIcon icon="/public/Introduction To Algorithms.jpg" name="Introduction To Algorithms"/>
                    <BookIcon icon="/public/Design Patterns.jpg" name="Design Patterns"/>
                    
                </SlideUpSection>
                
            </div>


            <h1 className=" my-7"><FontAwesomeIcon icon={faDollar}/> Finance </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full  justify-around mt-5 text-5xl">
                    <BookIcon icon="/public/Freakonomics.jpg" name="Freakonomics"/>
                    <BookIcon icon="/public/Economics for dummies.jpg" name="Economics For Dummies"/>
                    <BookIcon icon="/public/Poor economics.jpg" name="Poor Economics"/>
                    <BookIcon icon="/public/Rich dad poor dad.webp" name="Rich Dad Poor Dad"/>
                    <BookIcon icon="/public/Psychology of money.jpg" name="Psychology Of Money"/>
                
                </SlideUpSection>
                
            </div>

            <h1 className=" my-7"><FontAwesomeIcon icon={faDna}/> Biology&Antropology </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full  justify-around mt-5 text-5xl">
                    <BookIcon icon="/public/Sapiens.jpg" name="Sapiens:A Brief History Of Mankind"/>
                    <BookIcon icon="/public/Homo Deus.jpg" name="Homo Deus:A Brief History Of Tomorrow"/>
                    <BookIcon icon="/public/The greatest show on earth.jpg" name="The greatest show on earth"/>
                    <BookIcon icon="/public/Why Evolution Is True.webp" name="Why Evolution Is True"/>
                    <BookIcon icon="/public/The Selfish Gene.jpg" name="The Selfish Gene"/>
                    <BookIcon icon="/public/Erasing Death.jpg" name="Erasing Death"/>
                </SlideUpSection>
                
            </div>


            <h1 className=" my-7"><FontAwesomeIcon icon={faTasks}/> Productivity </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full  justify-around mt-5 text-5xl">
                    <BookIcon icon="/public/Atomic habits.jpg" name="Atomic habits"/>
                    <BookIcon icon="/public/Power of habit.jpg" name="Power of habit"/>
                    <BookIcon icon="/public/Deep work.jpg" name="Deep work"/>
                    
                </SlideUpSection>
                
            </div>

            <h1 className=" my-7 "><FontAwesomeIcon icon={faThLarge}/> Others</h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full  justify-around mt-5 text-5xl">
                    <BookIcon icon="/public/48 laws of power.jpg" name="48 Laws Of Power"/>
                    <BookIcon icon="/public/The Art Of War.jpg" name="The Art Of War"/>
                    <BookIcon icon="/public/The Laws Of Human Nature.jpg" name="The Laws Of Human Nature"/>
                    
                </SlideUpSection>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Books