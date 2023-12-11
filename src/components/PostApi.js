import React, { useState } from 'react';
import  axios from "axios";

const PostApi = () => {
    const postAPiUrl = "https://freeapi.miniprojectideas.com/api/amazon/RegisterCustomer";
    let [customerObj,setCustomerObj] = useState({CustId:0,Name:'',MobileNo:'',Password:''})

    const changeObj = (event,key) => {
        setCustomerObj(prevObj => ({...prevObj, [key]:event.target.value}))
    }

    const saveCustomer = async () => {
        const result =  await axios.post(postAPiUrl, customerObj);
        debugger;
        if(result.data.result) {
            alert("Customer CReated Successfully")
        } else {
            alert(result.data.message)
        }
    }
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <label>Enter Name</label>
                    <input type='text' onChange={(event)=> {changeObj(event,'Name')}} className='form-control' />
                </div>
                <div className='col-3'>
                    <label>Enter Mobile</label>
                    <input type='text' onChange={(event)=> {changeObj(event,'MobileNo')}} className='form-control' />
                </div>
            </div>
            <div className='row'> 
                <div className='col-3'>
                    <label>Enter Password</label>
                    <input type='text' onChange={(event)=> {changeObj(event,'Password')}}  className='form-control' />
                </div>
            </div>
            <div className='row pt-3'> 
                <div className='col-6 text-center'>
                     <button className='btn btn-primary' onClick={saveCustomer} >Save Customer</button>
                </div>
            </div>
            
        </div>
    );
};

export default PostApi;