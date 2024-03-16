import React from 'react'
import './Signup.css';

function Signup() {
  return (
    <div className='container__Login'>
      <img src='amazon_logo.png' alt=''/>
      <form className='container_Form'>
        <h3 className='container__Sign'>Sign Up</h3>
        
        <div className='container__Input'>
        <p className='container__Info'>FullName</p>
          <input  className='info_Type'type='text' placeholder='John Smith'/>
          
          <p className='container__Info'>Email</p>
          <input  className='info_Type'type='email' placeholder='expample@example.com'/>
          
          <p className='container__Info'>Password</p>
          <input  className='info_Type' type='password'placeholder='********' />       
        </div>              

        <button className='button__Createaccount'>Create Account in Amazon</button>
        <p className='form__Text'>By continuing, you agree to Amazon's 
           <span className='form__Text1'> Conditions of Use </span>and
           <span className='form__Text1'> Privacy Notice </span> </p> 
        
      </form>  
      <button className='button__Login'> Back to Login</button>

    </div>
  )
}

export default Signup
