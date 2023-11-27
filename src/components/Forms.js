import React, { useState } from 'react';

const Forms = () => {
    let [employeeObj, setEmployeeObj] = useState({name:'',contact:'',city:'',state:'',pincode:''});

    let updateObj = (event, key) => {
        setEmployeeObj(prevObj => ( { ...prevObj, [key] : event.target.value } ) )
    }

    let printObj = () => {
        console.log(employeeObj)
    } 


    return (
        <div>
            <h5>Employee Form - {employeeObj.name}- {employeeObj.contact} {employeeObj.city} {employeeObj.state} {employeeObj.pincode}</h5>
            <div className='row'>
                <div className="col-md-3">
                    <label>Name</label>
                    <input type='text' onChange={(event)=> {updateObj(event ,'name')}} className='form-control' />
                </div>
                <div className="col-md-3">
                    <label>Contact No</label>
                    <input type='text' onChange={(event)=>{updateObj(event,'contact')}} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className="col-md-3">
                    <label>City</label>
                    <select className='form-control' onChange={(event)=>{updateObj(event,'city')}}>
                        <option>Nagpur</option>
                        <option>Pune</option>
                        <option>Bhopal</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label>State</label>
                    <select className='form-control' onChange={(event)=>{updateObj(event,'state')}}>
                        <option>MAH</option>
                        <option>MP</option>
                        <option>Goa</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label>Pin Code </label>
                    <input type='text' className='form-control' onChange={(event)=>{updateObj(event,'pincode')}}/>
                </div>
            </div>
            <div className='row pt-3'>
                <div className="col-md-6 text-center">
                     <button  className='btn btn-success btn-sm' onClick={printObj}>Save Employee</button>
                </div>
                 
            </div>
        </div>
    );
};

export default Forms;