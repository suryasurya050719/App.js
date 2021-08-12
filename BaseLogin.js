import Reacr from 'react';
export default function BaseLogin(){
    return(
        <div className ='col-sm-5 bg-img align-self-center'>
            <div className ='info'>
                <div className='logo clearfix'>
                    <button className='nav-brand'>login</button>

                </div>
               <div>
                   <div className ='btn-section clearfix'>
                     <button className='nav-link link-btn btn-primary default-bg'> Login</button>
                     <button className='nav-link link-btn btn-primary default-bg'> Registor</button> 
                   </div>
               </div>
            </div>
        </div>
    )
}