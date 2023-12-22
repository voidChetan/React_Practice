import React, { useEffect, useState } from 'react';

const UseEffect = () => {

   let [inputNo, setInputNo] = useState(0);

   let [productPrice, setProductPrice]= useState(2)

   let [productName, setproductName]= useState('')

   useEffect(() => {
      console.log("Use Effect Called")//on page load & on every state change
   })

   useEffect(() => {
      console.log("ON Page Load Use Effect Called")//only on page load
   },[])

   useEffect( () => {
      console.log("productPrice Use Effect Executed")//on productPRcie Change
   },[productPrice])

   useEffect( () => {
      console.log("productPrice Use Effect Executed")//on productPRcie Change
   },[productPrice,productName])

   const onIncrement = () =>{
      setInputNo(inputNo++)
   }
   const onDecrement = () =>{
      setInputNo(inputNo--)
   }
   const onChnageProductPrice = () =>{
      setProductPrice(productPrice * 2)
   }
    
   return (
      <div>
         <div className='row'>
            <div className='col-2'>
               <button className='btn btn-primary' 
                onClick={onDecrement}>Decrement</button>
            </div>
            <div className='col-2'>
               {inputNo} == {productPrice}
            </div>
            <div className='col-2'>
               <button className='btn btn-success' 
               onClick={onIncrement}>Increment</button>
            </div>
            <div className='col-2'>
               <button className='btn btn-success' 
               onClick={onChnageProductPrice}  >change Price</button>
            </div>
         </div>
      </div>
   );
};

export default UseEffect;