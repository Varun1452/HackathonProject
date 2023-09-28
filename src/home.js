import './home.css';
// import { useState } from "react";
import React from 'react'


function Home() {


  return (
    <div>
      {/* navigation section  */}

      <div className='navbar-nav'>
        <h2 href="$">TASK TRAKER</h2>

        <a className="nav-link" href="$">Home</a>
        <a className="nav-link" href="$">Contact Us</a>
        <a className="nav-link" href="$">To do list</a>
      </div>
      {/* navigation section end */}

      {/* TO do list section */}
      <div>

      </div>
      {/* TO do list section */}



      {/* Contact us start */}

    

        <form className="contact-form">

          <h2>Contact Us</h2>
          <div className="space">
            <span className="User-icon"></span>
            <input type="varchar" name="firstName" placeholder="Enter your First Name" />
          </div>

          <div className="space">
            <span className="User-icon"></span>
            <input type="varchar" name="lastName" placeholder="Enter your Last Name" />
          </div>

          <div className="space">
            <span className="User-icon"></span>
            <input type="email" name="email" placeholder="Enter your Email" />
          </div>

          <div className="space">
            <span className="User-icon"></span>
            <input type="varchar" name="number" placeholder="Enter your Phone Number" />
          </div>

          <div className="space">
            <span className="User-icon"></span>
            <input type="varchar" name="message" placeholder="Enter your Message" />
          </div>

          <div className="filed space">
            <button type="submit" name="contactus" value="contact" >Submit</button>
          </div>


        </form>
     

      {/* contact us start */}


    </div>
  );
}

export default Home;