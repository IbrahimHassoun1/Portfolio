import Header from "./components/Header/Header";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";
import { MyContext } from "./context/MyContext";
import NavPopUp from "./components/NavPopUp/NavPopUp";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Languages from "./components/Languages/Languages";
import Education from "./components/Education/Education";
import Books from "./components/Books/Books";
import ContactForm from "./components/ContactForm/ContactForm";



const App = () => {
  const {menuIsPopped}=useContext(MyContext)
  return (
    <div className="bg-primary relative font-primary" >

      {menuIsPopped?
      <NavPopUp/>:""}
      <Navbar />
      <Header/>
      <Projects/>
      <Skills/>
      <Languages/>
      <Education/>
      <Books/>
      <ContactForm/>
    </div>
  );
}

export default App;
