import BookIcon from "./BookIcon.jsx"
import SlideUpSection from "../../effects/SlideUpSection/SlideUpSection.jsx";
import Lottie from 'lottie-react';
import animationData2 from "./../..//animations/Education.json"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faDna, faDollar, faTasks, faThLarge } from "@fortawesome/free-solid-svg-icons";
import "./Books.css";

// Importing images directly from the assets folder
import pragmaticProgrammer from "/assets/The Pragmatic Programmer.jpg";
import introToAlgorithms from "/assets/Introduction To Algorithms.jpg";
import designPatterns from "/assets/Design Patterns.jpg";
import freakonomics from "/assets/Freakonomics.jpg";
import economicsForDummies from "/assets/Economics for dummies.jpg";
import poorEconomics from "/assets/Poor economics.jpg";
import richDadPoorDad from "/assets/Rich dad poor dad.webp";
import psychologyOfMoney from "/assets/Psychology of money.jpg";
import sapiens from "/assets/Sapiens.jpg";
import homoDeus from "/assets/Homo Deus.jpg";
import greatestShowOnEarth from "/assets/The greatest show on earth.jpg";
import whyEvolutionIsTrue from "/assets/Why Evolution Is True.webp";
import selfishGene from "/assets/The Selfish Gene.jpg";
import erasingDeath from "/assets/Erasing Death.jpg";
import atomicHabits from "/assets/Atomic habits.jpg";
import powerOfHabit from "/assets/Power of habit.jpg";
import deepWork from "/assets/Deep work.jpg";
import lawsOfPower from "/assets/48 laws of power.jpg";
import artOfWar from "/assets/The Art Of War.jpg";
import lawsOfHumanNature from "/assets/The Laws Of Human Nature.jpg";

const Books = () => {
  return (
    <div id="Books" className=" books containers min-h-60 flex flex-col items-center ">
        <div id="content" className="text-quaternary mt-5 mb-12 flex flex-col items-center w-full">
            <SlideUpSection className="text-5xl mt-3 mx-auto font-bold h-8 flex justify-center items-center ">
              <Lottie animationData={animationData2} loop={true} className="h-20"/> BOOKS 
              <Lottie animationData={animationData2} loop={true} className="h-20"/>
            </SlideUpSection>

            <h1 className=" my-7"><FontAwesomeIcon icon={faComputer}/> Informatics </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full justify-around mt-5 text-5xl">
                    <BookIcon icon={pragmaticProgrammer} name="The Pragmatic Programmer"/>
                    <BookIcon icon={introToAlgorithms} name="Introduction To Algorithms"/>
                    <BookIcon icon={designPatterns} name="Design Patterns"/>
                </SlideUpSection>
            </div>

            <h1 className=" my-7"><FontAwesomeIcon icon={faDollar}/> Finance </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full justify-around mt-5 text-5xl">
                    <BookIcon icon={freakonomics} name="Freakonomics"/>
                    <BookIcon icon={economicsForDummies} name="Economics For Dummies"/>
                    <BookIcon icon={poorEconomics} name="Poor Economics"/>
                    <BookIcon icon={richDadPoorDad} name="Rich Dad Poor Dad"/>
                    <BookIcon icon={psychologyOfMoney} name="Psychology Of Money"/>
                </SlideUpSection>
            </div>

            <h1 className=" my-7"><FontAwesomeIcon icon={faDna}/> Biology&Anthropology </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full justify-around mt-5 text-5xl">
                    <BookIcon icon={sapiens} name="Sapiens:A Brief History Of Mankind"/>
                    <BookIcon icon={homoDeus} name="Homo Deus:A Brief History Of Tomorrow"/>
                    <BookIcon icon={greatestShowOnEarth} name="The greatest show on earth"/>
                    <BookIcon icon={whyEvolutionIsTrue} name="Why Evolution Is True"/>
                    <BookIcon icon={selfishGene} name="The Selfish Gene"/>
                    <BookIcon icon={erasingDeath} name="Erasing Death"/>
                </SlideUpSection>
            </div>

            <h1 className=" my-7"><FontAwesomeIcon icon={faTasks}/> Productivity </h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full justify-around mt-5 text-5xl">
                    <BookIcon icon={atomicHabits} name="Atomic habits"/>
                    <BookIcon icon={powerOfHabit} name="Power of habit"/>
                    <BookIcon icon={deepWork} name="Deep work"/>
                </SlideUpSection>
            </div>

            <h1 className=" my-7 "><FontAwesomeIcon icon={faThLarge}/> Others</h1>
            <div className="flex flex-wrap items-center justify- w-full">
                <SlideUpSection id="technologies" className="flex flex-wrap gap-7 w-full justify-around mt-5 text-5xl">
                    <BookIcon icon={lawsOfPower} name="48 Laws Of Power"/>
                    <BookIcon icon={artOfWar} name="The Art Of War"/>
                    <BookIcon icon={lawsOfHumanNature} name="The Laws Of Human Nature"/>
                </SlideUpSection>
            </div>
        </div>
    </div>
  );
}

export default Books;
