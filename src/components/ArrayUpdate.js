import React, { useState } from 'react';

const ArrayUpdate = () => {

    let[stateList, setStateList] = useState(['Maharashtra']);

    let[stateName, setStateName] =  useState('');

    let [selectedCity, setSelectedCity] =  useState('')
   
    const addCity = () => {
        setStateList( prevData => [...prevData,'Punjab'])
    }

    const changeStateName = (event) => {
        const txtVal =  event.target.value;
        setStateName(txtVal)
    }

    const changeCity = (event) =>{
        setSelectedCity(event.target.value)
    }

    const addState = () => {
        setStateList(prevState => [ ...prevState, stateName])
    }

    return (
        <div>
            <p>{stateList}</p> 
            <p>{stateName}</p>
            <p>{selectedCity}</p>
            
            <input type='text' onChange={ (event) => {changeStateName(event)} }/>
            <button onClick={addState}>Add State</button>
            <button onClick={addCity}> Add Punjab</button>


            <select onChange={(event)=>{changeCity(event)}}>
                <option val3ue='Pune'>Pune</option>
                <option value='Solapur'>Solapur</option>
                <option value='Nagpur'>Nagpur</option>
                <option value='Mumbai'>Mumbai</option>

             </select>
        </div>
    );
};

export default ArrayUpdate;