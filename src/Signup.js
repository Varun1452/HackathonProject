import { React } from 'react';
import './Signup.css'

function Signup() {
  return (
    <body>
      <form className='mainform2'>

        <div className='mainform'>
        <h2>SignUp</h2>

          <label className='mainlabel'>UserName</label><br />
          <input type='text' placeholder='Enter Your UserName' className='maininput' /><br />

          <label className='mainlabel'>Email</label><br />
          <input type='text' placeholder='Enter Your Email' className='maininput' /><br />

          <label className='mainlabel'>Phone No</label><br />
          <input type='text' placeholder='Enter Your Phone No' className='maininput' /><br />

          <label className='mainlabel'>Password</label><br />
          <input type='password' placeholder='Enter Your Password' className='maininput' /><br />

          <label className='mainlabel'>Confiorm Password</label><br />
          <input type='password' placeholder='Enter Your Confiorm Password' className='maininput' />

          <button className='btn'>SignUp</button>
        </div >
      </form>


    </body >
  );
}
export default Signup;