import React from 'react';

const ForLoop = () => {
    const cityList = ['Pune', 'Mumbai', 'Thane', 'Solapur'];

    return (
        <div className='row'>
            <div className='col-3'>
                <select className='form-select'>
                    {
                        cityList.map((city) => {
                            return <option> {city} </option>
                        })
                    }
                </select>
            </div>
            <div className='col-3'>
                <ul>
                    {
                        cityList.map( (item) => {
                            return <li> {item} </li>
                        })
                    }
                </ul>
            </div>

        </div>
    );
};

export default ForLoop;