import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';



const MyContext = createContext();


const MyProvider = ({ children }) => {


   const [menuIsPopped,setMenuIsPopped]=useState(false)

 
    const value = {
        menuIsPopped,setMenuIsPopped
    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

MyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


export { MyContext, MyProvider };
