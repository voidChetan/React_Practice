import React, { useState } from 'react';

const HidenShow = () => {

    let [isDiv1Visible, setIsDiv1Visible] = useState(false);
    let [inputNo, seeInputNo] = useState(0);
    let [input1, setInput1] = useState("");
    let [input2, setInput2] = useState('');
    const changeIsDiv1VisisbaleTrue = () => {
        setIsDiv1Visible(true)
    }
    const changeIsDiv1VisisbaleFalse = () => {
        setIsDiv1Visible(false)
    }
    const changeInputNo = (event) => {
        seeInputNo(event.target.value)
    }
    const changeInput1 = (event) => {
        setInput1(event.target.value)
    }
    const changeInput2 = (event) => {
        setInput2(event.target.value)
    }
    return (
        <div> 
            <div className='row'>
                <div className='col-3'>
                    {
                        isDiv1Visible && <div className='bg-success p-4'> Div 1 </div>
                    } 
                </div>
                <div className='col-3'>
                    {
                        inputNo % 2 == 0 && <div className='bg-danger p-4'>  Div 2 - {inputNo}  </div>
                    } 
                    <input type='text' onChange={ (event) => {changeInputNo(event) } } />
                </div>
                <div className='col-3'>
                    {
                        input1 == input2 && <div className='bg-secondary p-4'>  Div3    </div>
                    }
                  
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-3'>
                     <button className='btn btn-success btn-sm'
                      onClick={changeIsDiv1VisisbaleTrue}>Show Div 1</button>

                     <button className='btn btn-danger btn-sm'
                      onClick={changeIsDiv1VisisbaleFalse}>Hide Div 1</button>
                </div>
                <div className='col-3'>
                     {input1} - {input2}
                </div>
                <div className='col-3'>
                     <input type='text' onChange={(event)=> {changeInput1(event)}}
                      placeholder='enter value 1'/>
                     <input type='text'  onChange={(event)=> {changeInput2(event)}}
                      placeholder='enter value 2'/>
                </div>
            </div>
        </div>
    );
};

export default HidenShow;