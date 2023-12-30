import React, { useState } from 'react';
import  axios  from 'axios'; 
const SingleWithMultple = () => {

    let [employeeObj, setEmployeeObj] = useState(
        {
            "EmpId": 0,
            "Name": "",
            "ContactNo": "",
            "Email": "",
            "City": "",
            "State": "",
            "PinCode": "",
            "Designation": "",
            "MockEmpRelatives": []
        })

    const updateEmpForm = (event, key) => {
        setEmployeeObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    const addFamilyMember = () => {
        setEmployeeObj(prevObj=> ({...prevObj, MockEmpRelatives : [...prevObj.MockEmpRelatives, familyObj ]}))
    }

    let [familyObj, setFamilyObj] = useState({
        "RelativeId": 0,
        "Name": "",
        "Relation": "",
        "Age": 0,
        "EmpId": 0
    })

    const updateFamilyForm = (event, key) => {
        setFamilyObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }


    const onSaveEmployee = async() => {
        debugger;
        const result = await axios.post("https://onlinetestapi.gerasim.in/api/Mock/CreateEmployee",employeeObj);
        if(result.data.result) {
            alert('Empluee Created Sucess')
        }
    }

    return (
        <div>
            <div className="row"  >
                <div className="col-12">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <div className="row">
                                <div className="col-6"> New</div>
                                <div className="col-6 text-end">
                                    <button className="btn btn-sm btn-primary"  >CLose</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <div className="row">
                                        <div className="col-6">
                                            <label for=""><b>Name</b></label>
                                            <input type="text" onChange={(event)=>{updateEmpForm(event,'Name')}} className="form-control"
                                                placeholder="Enter Name" />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label for=""><b>Contact No</b></label>
                                            <input type="text" onChange={(event)=>{updateEmpForm(event,'ContactNo')}} className="form-control"
                                                placeholder="Enter Contact No" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>Email</b></label>
                                            <input type="text" onChange={(event)=>{updateEmpForm(event,'Email')}} className="form-control"
                                                placeholder="Enter Email" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>City</b></label>
                                            <input type="text" onChange={(event)=>{updateEmpForm(event,'City')}} className="form-control"
                                                placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label for=""><b>State</b></label>
                                            <input type="text" onChange={(event)=>{updateEmpForm(event,'State')}} className="form-control"
                                                placeholder="Enter State" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>Pincode</b></label>
                                            <input type="text" onChange={(event)=>{updateEmpForm(event,'PinCode')}} className="form-control"
                                                placeholder="Enter Pincode" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>Dasignation</b></label>
                                            <select className="form-control"  onChange={(event)=>{updateEmpForm(event,'Designation')}} >
                                                <option value="">Select</option>
                                                <option value="Jr Developer">Jr Developer</option>
                                                <option value="Sr Developer">Sr Developer</option>
                                                <option value="Team Leader">Team Leader</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6 text-end">
                                            <button className="btn text-white btn-sm bg-secondary">Reset</button>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn text-white btn-sm bg-success"
                                             onClick={onSaveEmployee}>
                                                Save Employee
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col-4">
                                            <label for=""><b>Name</b></label>
                                            <input type="text" onChange={(event)=>{updateFamilyForm(event,'Name')}} className="form-control"
                                                placeholder="Enter Name" />
                                        </div>
                                        <div className="col-3">
                                            <label for=""><b>Relation</b></label>
                                            <select className="form-control"  onChange={(event)=>{updateFamilyForm(event,'Relation')}}>
                                                <option value="">Select</option>
                                                <option value="Mother">Mother</option>
                                                <option value="Father">Father</option>
                                                <option value="Sister">Sister</option>
                                                <option value="Brother">Brother</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <label for=""><b>Age</b></label>
                                            <input type="text" onChange={(event)=>{updateFamilyForm(event,'Age')}} className="form-control"
                                                placeholder="Enter Age" />
                                        </div>
                                        <div className="col-1 mt-4 text-end">
                                            <button className="btn btn-sm bg-primary" onClick={addFamilyMember} >Add</button>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Relation</th>
                                                        <th>Age</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        employeeObj.MockEmpRelatives.map((item)=>{
                                                            return ( <tr  >
                                                                <td>  {item.Name}</td>
                                                                <td>{item.Relation} </td>
                                                                <td> {item.Age}</td>
                                                                <td className="text-center">
                                                                    <button className="btn btn-sm btn-danger">Delete</button>
                                                                </td>
                                                            </tr>

                                                            )
                                                        })
                                                    }
                                                   
                                                 
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleWithMultple;