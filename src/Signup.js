import { React } from 'react';
import './Signup.css'

function Signup() {
  return (
    <body>

    <div className='mainform'>
      <form>

        <div className='mainContainer'>
        <h2>SignUp</h2>

          <label>UserName</label> 
          <input type='text'  className='maininput' /><br />
          <label>Email</label>
          <input type='text'  className='maininput' /><br />
          <label>PhoneNo</label>
          <input type='text' className='maininput' /><br />
          <label>Password</label>
          <input type='Password'  className='maininput' /><br />
          <label>Confirm Password</label>
          <input type='Password'  className='maininput' /><br />
 
          <button className='btn'>SignUp</button>
        </div >
      </form>
      </div>   

    </body >
  );
}
export default Signup;