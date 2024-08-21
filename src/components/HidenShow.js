import React, { useState } from 'react';

const HidenShow = () => {
    let [isDiv1Visible, setIsDiv1Visible] = useState(false);

    const changeIsDiv1VisisbaleTrue = () => {
        setIsDiv1Visible(true)
    }
    const changeIsDiv1VisisbaleFalse = () => {
        setIsDiv1Visible(false)
    }
    return (
        <div> 
            <div className='row'>
                <div className='col-3'>
                    {
                        isDiv1Visible && <div > Div 1 </div>
                    } 
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-3'>
                     <button onClick={changeIsDiv1VisisbaleTrue}>Show Div 1</button>
                     <button onClick={changeIsDiv1VisisbaleFalse}>Hide Div 1</button>
                </div>
            </div>
        </div>
    );
};

export default HidenShow;