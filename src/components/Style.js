import React, {useState} from 'react';

const Style = () => {
    let [div3BackColor, setDiv3BackColor] = useState('');
    let [div4Color, setDiv4Color] = useState('red'); 

  
    const changeBackColor = (color) => {
        setDiv3BackColor(color)
    }
    const changeDiv4Color = () => {
        if(div4Color == 'red') {
            setDiv4Color('blue');
        } else {
            setDiv4Color('red');
        }
    }
 
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <h1 style={{color:'red'}} >Hellow From Div</h1>
                </div>
                <div className='col-3' style={{backgroundColor:'blue'}} >
                    sdfsdf
                </div>
                <div className='col-3' style={{backgroundColor:div3BackColor,fontSize:'12px' }} >
                    Div 3 - {div3BackColor}
                </div>
                <div className='col-3' style={{backgroundColor:div4Color}}>
                   <h1 style={{color: div4Color == 'red' ? 'white' : 'yellow' }}> 
                   This Is Div 4 </h1>  {div4Color}
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                   
                </div>
                <div className='col-3'>
                   
                </div>
                <div className='col-3'>
                    <button className='btn btn-danger'
                     onClick={ () => { changeBackColor('red') } } >Backgorund Red</button>
                   
                    <button  className='btn btn-warning' 
                    onClick={ () => { changeBackColor('yellow') } } >Backgorund yello</button>
                </div>
                <div className='col-3'> 
                    <button className='btn btn-danger' 
                     onClick={changeDiv4Color}>Toggle Color</button>
                </div>
            </div>
        </div>
    );
};

export default Style;