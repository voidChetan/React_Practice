import React, { useState } from 'react'; 
const Functions = () => {

    let employeeName = "Chetan";

    let [productName, setProductName] = useState('MOTO A7');

    const chnageEMpName = () => {
        debugger;
        employeeName = "RAM";
    } 
    const changeProductName = () => {
        setProductName("Samsum Galaxy ");
    }
    const printName = () => {
        console.log(productName);
    } 
    const showMessage = (message) => {
        alert(message)
        console.log(employeeName)
    } 
    const getSum = (num1, num2) => <div> {num1 + num2 } </div> ;

    const getSummOfNUmbers = () => {
        return 123;
    } 
    // string, number, boolean, date , array, object, undefined , null 
    return (
        <div>
            <p>Product name: {productName} : EMp Name: {employeeName}</p> 
            <button onClick={changeProductName}>Change Produc Name</button>
            <button onClick={chnageEMpName}>Change Employee Name</button>
             <h1>{getSum()}</h1>
            <button onClick={printName}>Print Name</button>

            <button onClick = { () => { showMessage("Hii From Btn") } }>CLick Me</button>

            <button onClick={ () => {showMessage("CLick 2 btn")} }>Click 2</button>

            <button onClick={ () => showMessage()}> click 3</button>
        </div>
    );
};

export default Functions;