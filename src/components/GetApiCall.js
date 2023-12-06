import React, { useState } from 'react';
import axios from 'axios';

const GetApiCall = () => {

    let [usersData, setUsersData] = useState([]);
    let [photos, setPhotos] = useState([])

    const getAllUsers = async () => {
        debugger;
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        debugger;
        setUsersData(response.data);
    }

    const getAllPhots = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPhotos(result.data);
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={getAllUsers}>Get USers</button>
            <button className='btn btn-primary' onClick={getAllPhots}>Get Phots </button>
            <div className='row'>
                <div className='col-6'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>email</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersData.map((user, index) => {
                                    return <tr>
                                        <td> {index + 1}</td>
                                        <td> {user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>

                                })
                            }
                        </tbody>

                    </table>
                </div>
                <div className='col-6'>
                <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Title</th>
                                <th>Url</th>
                                <th>thumbnailUrl</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                photos.map((user, index) => {
                                    return <tr>
                                        <td> {index + 1}</td>
                                        <td> {user.title}</td>
                                       
                                        <td>
                                            <img  src={user.thumbnailUrl}/>
                                            </td> 
                                    </tr>

                                })
                            }
                        </tbody>

                    </table>
                </div> 
            </div>

        </div>
    );
};

export default GetApiCall;