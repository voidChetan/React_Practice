import React from 'react';
const MyLi = (properties) => {
    return (
        <div>
            <ul>
                {
                    properties.data.map((item)=>{
                        return (<li>{item}</li>)
                    })
                } 
            </ul>
        </div>
    );
};

export default MyLi;