import React from 'react';


export default function Registor(){

    return(
       <div className='col-sm-7 bg-color align-self-center'>
          <div className='form-section'>
             <div className='title'>
                 <h3> Creat a New Account</h3>
             </div>
             <div className='login-inner-form'>
                <form method='post'>
                    <div className='form-group form-box'>
                        <input type='text' id ='username' className='input-text' placeholder='Username'></input>
                     </div>
                    <div className='form-group form-box'>
                       <input type='text' id ='email' className='input-text' placeholder='email'></input>
                     </div>
                     <div className='form-group form-box'>
                       <input type='text' id ='password' className='input-text' placeholder='password'></input>
                     </div>
                     <div className='form-group form-box'>
                       <input type='text' id ='passwordCheck ' className='input-text' placeholder='Verify password'></input>
                     </div>
                     <div className='form-group '>
                      <button className='btn primary-btn'>Registor</button>
                     </div>
                </form>
             </div>
          </div>
       </div>
    )
}