import { React } from "react"
import "./ContactUs.css"

function ContactUs() {
    return (
      <div className="container">

      <form className="contact-form">

      <h2>Contact Us</h2>
        <div className="space">
          <span className="User-icon"></span>
            <input type="varchar"  name="firstName" placeholder="Enter your First Name"/>
        </div>
      
      <div className="space">
        <span className="User-icon"></span>
          <input type="varchar" name="lastName" placeholder="Enter your Last Name"/>
      </div>
      
      <div className="space">
        <span className="User-icon"></span>
          <input type="email"  name="email" placeholder="Enter your Email"/>
      </div>

      <div className="space">
        <span className="User-icon"></span>
          <input type="varchar"  name="number" placeholder="Enter your Phone Number"/>
      </div>

      <div className="space">
        <span className="User-icon"></span>
          <input type="varchar" name="message" placeholder="Enter your Message"/>
      </div>
  
      <div className="filed space">
          <button type="submit" name="contactus" value="contact" >Submit</button>
      </div>
  
  
      </form>
    </div>
    );
  }

  export default ContactUs