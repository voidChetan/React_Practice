import React, { useState } from 'react';

const DyanamicStyleClass = () => {
    let [backColor,setBackColor] = useState('');
    let [isIndian, setIsIndian]  = useState(false);
    let [className, setClassName] = useState('')
 
   const  changeBackCOlor = (event) => {
        setBackColor(event.target.value)
    }
    const  changeClassName = (event) => {
        setClassName(event.target.value)
    }
    const  chnageIsIndian = (event) => {
        debugger;
        setIsIndian(event.target.checked)
    }

    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <div className='p-3' 
                    style={ { backgroundColor : backColor ,color:'red' } } >
                            <input type='text'
                             onChange={(event) => {changeBackCOlor(event)}} placeholder='Enter Color'/>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='p-3'
                     style={ { backgroundColor : isIndian ? 'red' : 'blue' } } >
                            <input type='checkbox' 
                            onChange={(event) => {chnageIsIndian(event)}} placeholder='Enter Color'/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className={`p-2 ${className}`}  >
                            <input type='text'
                             onChange={(event) => {changeClassName(event)}} placeholder='Enter Class Name'/>
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`p-3 ${ isIndian ? 'bg-danger': 'bg-primary' } `}  >
                            <input type='checkbox' onChange={(event) => {chnageIsIndian(event)}} placeholder='Enter Color'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DyanamicStyleClass;