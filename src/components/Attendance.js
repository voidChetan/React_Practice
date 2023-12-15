import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Attendance = () => {

    let [attendanceData, setAttendanceData] = useState([]);
    let [attendanceObj, setAttendanceObj] = useState({
        "AttendanceId": 0,
        "EmployeeId": 0,
        "AttendanceDate": "",
        "InTime": "",
        "OutTime": "",
        "IsFullDay": false
    });
    let [employeeList, setEmployeeList] = useState([]);

    useEffect(()=>{
        getAllAttendance();
        getEmployee();
    } , [])

    const changeFormValue = (event, key) => {
        setAttendanceObj(prevObj => ({...prevObj, [key]:event.target.value}))
    }
    const changeFullDay = (event) => {
        setAttendanceObj(prevObj => ({...prevObj, IsFullDay:event.target.checked}))
    }

    const getAllAttendance = async () => {
        const result =  await axios.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance');
        setAttendanceData(result.data.data);
    }
    const getEmployee = async () => {
        const result =  await axios.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee');
        setEmployeeList(result.data.data);
    }

    const saveAttendance = async () => {
        const result = await axios.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance",attendanceObj);
        if(result.data.result) {
            alert('Attendance Added');
            getAllAttendance();
        } else {
            alert(result.data.message)
        } 
    }


    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            Attendance List
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Employee </th>
                                        <th>Contact No</th>
                                        <th>Attendance Date</th>
                                        <th>In-Time</th>
                                        <th>Out-time</th>
                                        <th>Is Full Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        attendanceData.map((item,index)=>{
                                            return (<tr>
                                                <td> {index +1}</td>
                                                <td>{item.empName}</td>
                                                <td>{item.empContactNo}</td>
                                                <td>{item.attendanceDate}</td>
                                                <td>{item.inTime}</td>
                                                <td>{item.outTime}</td>
                                                <td>{item.isFullDay ? 'Full Day': 'Half Day'}</td>
                                            </tr>)
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New Attendance
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Select Employee</label>
                                    <select className='form-select' onChange={(event)=> {changeFormValue(event,'EmployeeId')}}>
                                        <option value=''>Select Employee</option>
                                        {
                                            employeeList.map((item)=>{
                                                return (<option value={item.empId}> {item.empName}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label>Select Date</label>
                                    <input type='date' onChange={(event)=> {changeFormValue(event,'AttendanceDate')}} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>In-Time</label>
                                    <input type='time' onChange={(event)=> {changeFormValue(event,'InTime')}} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label>Out-time</label>
                                    <input type='time' onChange={(event)=> {changeFormValue(event,'OutTime')}} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Is Full Day</label>
                                    <input type='checkbox' onChange={(event)=> {changeFullDay(event)}} />
                                </div>
                            </div>
                            <div className='row pt-3'>
                                <div className='col-6 text-center'>
                                    <button className='btn btn-secondary'>Reset</button>
                                </div>
                                <div className='col-6 text-center'>
                                    <button className='btn btn-success' onClick={saveAttendance}>Save Attendance</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Attendance;