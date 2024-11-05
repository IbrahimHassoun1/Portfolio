import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';



const Navbar = () => {
  const {menuIsPopped,setMenuIsPopped}=useContext(MyContext)
  return (
    <div className={`flex bg-transparent z-10 absolute top-0 left-0 w-full h-16 ${menuIsPopped?"blur-lg":""}`}>
        <div className="content containers flex justify-between">
            <h1 direction='left' className={`font-secondary font-extralight text-2xl sm:text-primary text-quaternary`}>IBRAHIM HASSOUN</h1>
            <div className="text-white" onClick={()=>{setMenuIsPopped(true)}}><FontAwesomeIcon icon={faBars} className='h-8 text-quaternary cursor-pointer'/></div>
        </div>
        
    </div>
  )
}

export default Navbar