import React, { useState } from 'react';
const Variables = () => {
    //var let const 
    const firstName = "Chetan";
    let lastName = "Jogi";
        //variable name //method name to change product name
    let [employeeId , setEmployeeId] = useState(1123); 
 
    let [produtName, setProductName] = useState("Moto A-7");

    let [isIndian, setIsIndian] = useState(false);

    let [studentObject, setStudentObj] = useState({name:'Punam',gender:'Female',city:'Pune'}) 

    let [cityArray, setStudentArray] = useState(["Pune", "Nagpur", "Solapur"]);

    return (
        <div>
            <p>Variables</p>
            <label> {firstName} </label> <strong> {lastName} </strong>
            <p> {employeeId} </p>
            <p> {produtName} </p>
            <p> {studentObject.gender} </p>
            <p> {cityArray}</p>
            <p> {cityArray[2]}</p>
        </div>
    );
};

export default Variables;