 import React, {useState} from 'react'

import './Signup.css'

  function SignUp () {


  return (
    <body>

    <div className='mainContainer'>
      <form>

        <div className='mainform'>
        <h2>SignUp</h2>

          <label className='mainlabel'>UserName</label> 
          <input type='text'  className='maininput' /><br />
          <label className='mainlabel'>Email</label><br/>
          <input type='text'  className='maininput' /><br />
          <label className='mainlabel'>PhoneNo</label>
          <input type='text' className='maininput'/><br/>
          <label className='mainlabel'>Password</label>
          <input type='Password'  className='maininput' /><br />
          <label className='mainlabel'>Confirm Password</label>
          <input type='Password'  className='maininput'/><br />

          <button type=''>SignUp</button>
        </div >
      </form>
      </div>   

    </body>
  );
}
export default SignUp
;