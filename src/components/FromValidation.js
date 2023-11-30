import React, { useState } from 'react';

const FromValidation = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let [loginObj, setLoginObj] = useState({email:'',password: ''});
    let [isFormSubmitted, setisFormSubmitted] = useState(false);

    const changeFormValues = (event,key) => {
        setLoginObj(prevObj => ({...prevObj, [key]:event.target.value}));
    }
    const changeisFormSubmitted = () => {
        setisFormSubmitted(true);
    }
    return (
        <div className='row'>
            <div className='col-5'> 
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className={`form-control ${isFormSubmitted &&  loginObj.email == '' ? 'red-border':''}`} onChange={(event)=> {changeFormValues(event,'email')}}  placeholder="Enter email"/>
                    <div className='text-danger'>
                        {
                           isFormSubmitted &&  loginObj.email == '' && <span>Email is required</span>
                        }
                        {
                           isFormSubmitted  &&  loginObj.email !== '' && !emailRegex.test(loginObj.email) && <span>Email Is Not Proper</span>
                        }
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" style={{ border: isFormSubmitted &&  loginObj.password == '' ? '1px solid red':'' }} className="form-control" onChange={(event)=> {changeFormValues(event,'password')}} id="exampleInputPassword1" placeholder="Password"/>
                    <div className='text-danger'>
                        {
                          isFormSubmitted &&  loginObj.password == '' && <span>Password is required</span>
                        }
                        {
                          isFormSubmitted &&  loginObj.password !== '' && loginObj.password.length <= 5 && <span>Min 5 Char Neede</span>
                        }
                        {
                          isFormSubmitted &&  loginObj.password !== '' && loginObj.password.length > 10 && <span>Max 10 Char allowed</span>
                        }
                        
                    </div>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={changeisFormSubmitted}>Login</button>
            </form>
            </div>
            
        </div>
    );
};

export default FromValidation;