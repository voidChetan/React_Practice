import React, { useState } from 'react'; 
const Events = () => { 
    const printName = () => {
        console.log("Hi From Virtual Dom");
    } 
    const showMessage = (message) => { 
        console.log(message)
    }  
    return (
        <div> 
            <button onClick={printName}>Print Name</button> 
            <button onClick = { () => { showMessage("Hii From Btn") } }>CLick Me</button> 
        </div>
    );
};

export default Functions;