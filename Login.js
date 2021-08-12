import React from 'react';


export default function Login(props){
    return(
      <div className ='col-lg-7 bg-color align-center'>
        <div>
             <div className='form-section'>
         <div className='title'>
           <h3>Sign into your account</h3>
         </div>
         <div className='login-inner-form'>
           <form method='post'>
             <div className='form-group form-box'>
               <input type='text' id='email' className ='input-text'placeholder='Email adress'></input>
             </div>
             <div className='form-group form-box'>
               <input type='text' id='password' className ='input-text'placeholder='password'></input>
             </div>
             <div className='form-group '>
              <button className='btn primary-btn'> login</button>
              
             </div>
           </form>
           <div className='form-group '>
             
              <button className='btn primary-btn'> Registor</button> 
             </div>
         </div>
       </div>
        </div>
        </div>
    );
}