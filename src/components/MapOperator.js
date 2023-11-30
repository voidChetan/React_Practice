import React, { useState } from 'react';

const MapOperator = () => {
    const [cityList,setCityList] = useState(['Pune', 'Nagpur', 'Jabalpur', 'Solapur' ,'Thane']);
    const [cityName, setCityName] = useState('');
    const changeCityName = (event) => {
        setCityName(event.target.value);
    }
    const addCity = () => {
        setCityList(prevList => [...prevList,cityName])
    }
    const stuentList = [
        {studentId: 112, name: 'Punam', gender:'female',city:'pune',isActive: false},
        {studentId: 113, name: 'Rahul', gender:'Male',city:'Nagpur',isActive: true},
        {studentId: 114, name: 'Ankit', gender:'Male',city:'Mumbai',isActive: false},
        {studentId: 115, name: 'Akansha', gender:'female',city:'pune',isActive: false}
    ]
    return (
        <div >
            <div className='row'>
                <div className='col-2'>
                    <input type='text' onChange={(event)=> {changeCityName(event)}} />
                    <button className='btn btn-sm btn-primary' onClick={addCity}>Add</button>
                </div>
                <div className='col-2'>
                    <select className='form-select'>
                        {
                            cityList.map( (item, index) => {
                                return <option key={index}>   {item} </option>
                            } )
                        }
                    </select>
                </div>
                <div className='col-2'>
                    <select className='form-select'> 
                        {
                            stuentList.map( (student, index ) => {
                                return <option key={index} value={student.studentId}>
                                     {student.name}</option>
                            } )
                        }
                    </select>
                </div>
                <div className='col-2'>
                    <ul>
                        {
                            cityList.map( (item, index) => {
                                return <li key={index}> {item}</li>
                            } )
                        }
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    {
                      cityList.map( (element, sr) => {
                        return <button  key={sr} className='btn btn-sm btn-success mx-2'> 
                        {element}</button>
                      } )  
                    }
                </div>
                <div className='col-4'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>City</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            stuentList.map( (studentObj, index) => {
                                return <tr> 
                                    <td> {index +1}</td>
                                    <td> {studentObj.name}</td>
                                    <td>{studentObj.gender}</td>
                                    <td>{studentObj.city}</td>
                                    <td>{ studentObj.isActive ? 'Active' : 'De-Active' }</td>
                                </tr> 
                           
                            } )
                        }
                         </tbody>
                        
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MapOperator;