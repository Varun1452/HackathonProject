import { React } from 'react';
import './Signup.css'

function Signup() {
  return (
    <body>

    <div className='mainform'>
      <form>

        <div className='mainContainer'>
        <h2>SignUp</h2>

          
          <input type='text' placeholder='Enter Your UserName' className='maininput' /><br />

          <input type='text' placeholder='Enter Your Email' className='maininput' /><br />
        
          <input type='text' placeholder='Enter Your PhoneNo' className='maininput' /><br />

          <input type='Password' placeholder='Enter Your Password' className='maininput' /><br />

          <input type='Password' placeholder='Enter Your Confirm Password' className='maininput' /><br />
 
          <button className='btn'>SignUp</button>
        </div >
      </form>
      </div>   

    </body >
  );
}
export default Signup;