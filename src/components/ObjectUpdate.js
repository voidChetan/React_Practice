import React, { useState } from 'react';
const ObjectUpdate = () => {
    let [empObj, setEmpObj] = useState({empId: 112, empName: 'Rahul',contactNo:'9999888877'})

    const changeId = () => {
        setEmpObj(preValue => ( { ...preValue , empId: 113 } ));
    }

    const addCity = () => {
        setEmpObj(prevState => ( {...prevState, city:'Mumbai'} ))
    }

    
    return (
        <div>
            <p>empId- {empObj.empId}</p>
            <p>City- {empObj.city}</p>
           <button onClick={changeId}>change Id</button> 
           <button onClick={addCity}>Add City</button>
        </div>
    );
};

export default ObjectUpdate;