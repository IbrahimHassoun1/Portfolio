import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';



const Navbar = () => {
  const {menuIsPopped,setMenuIsPopped}=useContext(MyContext)
  
  return (
    <div className={`flex bg-transparent z-10 absolute top-0 left-0 w-full h-16 ${menuIsPopped?"blur-lg":""}`}>
        <div className="content containers flex justify-between">
            <h1 direction='left' className={`font-primary font-extralight text-2xl sm:text-primary text-quaternary hidden sm:block`}>IBRAHIM HASSOUN</h1>
            <div className="text-white sm:ml-0 ml-auto" onClick={()=>{setMenuIsPopped(true)}}><FontAwesomeIcon icon={faBars} className='h-8 text-primary cursor-pointer'/></div>
        </div>
        
    </div>
  )
}

export default Navbar