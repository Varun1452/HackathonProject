import { React,useState } from "react"
import "./ContactUs.css"

  const ContactUs = () => {
    const [fname,setFName] = useState('');
      const [fnameErr,setFNameErr] = useState(false);
    // const [lname,setLname] = useState('');
    //   const [lnameErr,setLnameErr] = useState(false);
    const [mail,setMail] = useState('');
      const [mailErr,setMailErr] = useState(false);
    const [number,setNumber] = useState('');
      const [numberErr,setNumberErr] = useState(false);
    const [msg,setMsg] = useState('');
      const [msgErr,setMsgErr] = useState(false);
    
    
//Name Function Start//
    const FirstNameHandle = (e) => {
        console.log(fname)
        let FNameitem = e.target.value;
        
        if (FNameitem.length > 1 && FNameitem.length <= 10 || FNameitem.length==0) {
            setFNameErr(false)
        }
        else{
            setFNameErr(true)
        }
        setFName(FNameitem)
    }
    
//LastName Function Start//
//   const LastNameHandle = (e) => {
//     console.log(lname)
//     let LNameitem = e.target.value;
    
//     if (LNameitem.length > 4 && LNameitem.length <= 15 || LNameitem.length==0) {
//         setLnameErr(false)
//     }
//     else{
//         setLnameErr(true)
//     }
//     setLname(LNameitem)
// }

//Email Function Start//
const MailHandle = (e) => {
  let Mailitem = e.target.value;
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  setMailErr(!(regex.test(Mailitem)))

  if (Mailitem.length ==0) {
    setMailErr(false)
  }
  setMail(Mailitem)

}

//Number Function Start//
const NumberHandle = (e) => {
  let Numberitem = e.target.value;
  let regex = /^[6-9]\d{9}$/g;
  setNumberErr(!(regex.test(Numberitem)))

  if (Numberitem.length > 9 && Numberitem.length <= 12 ||Numberitem.length ==0) {
      setNumberErr(false)
    }

  setNumber(Numberitem)
}

//MSG Function Start//
const MessageHandle = (e) => {
  console.log(msg)
  let Msgitem = e.target.value;
  
  if (Msgitem.length > 3 && Msgitem.length <= 100 || Msgitem.length==0) {
      setMsgErr(false)
  }
  else{
      setMsgErr(true)
  }
  setMsg(Msgitem)
}

    const NameValuesHandle = (e) => {
        e.preventDefault();
      if (fnameErr == true || fname.length ==0) {
        alert('Your Name is Invalid OR Empty');
        
      }
      // if (lnameErr == true || lname.length ==0) {
      //   alert('Your LastName is Invalid OR Empty');
        
      // }
      if (mailErr == true || mail.length ==0) {
        alert('Your Email is Invalid OR Empty');
        
      }
      if (numberErr == true || number.length ==0) {
         alert('Your Number is Invalid OR Empty');
        
      }
      if (msgErr == true || msg.length ==0) {
        alert('Your Message is Invalid OR Empty');
        
      }

    }

    const SubmitForm = () => {
      if(fnameErr === true || numberErr === true || mailErr === true || msgErr === true || fname.length === 0 || number.length === 0 || mail.length === 0 || msg.length === 0){
        document.getElementById('FailMessage').innerHTML = "Registration Unsuccessful";
        document.getElementById('FailMessage').style.display = "block"
        document.getElementById('PassMessage').style.display = "none"
      }
      else{
        document.getElementById('PassMessage').innerHTML = "Regisration Successful";
        document.getElementById('PassMessage').style.display = "block"
        document.getElementById('FailMessage').style.display = "none"
      }
    } 
    return (
      <div className="container">

      <form className="contact-form" onSubmit={NameValuesHandle}>

      <h2>Contact Us</h2>
        <div className="space">
          <span className="User-icon"></span>
            <input type="varchar"  name="firstName" onChange={FirstNameHandle} placeholder="Enter your First Name"/>{fnameErr?<span className="ErrorMessage">Invalid :- Must Have 2-10 letters</span>:""}
        </div>
      
      {/* <div className="space">
        <span className="User-icon"></span>
          <input type="varchar" name="lastName" onChange={LastNameHandle} placeholder="Enter your Last Name"/><br/>{lnameErr?<span className="ErrorMessage">Invalid :- Must Have 4-15 letters</span>:""}
      </div> */}
      
      <div className="space">
        <span className="User-icon"></span>
          <input type="email"  name="email" onChange={MailHandle} placeholder="Enter your Email"/>{mailErr?<span className="ErrorMessage">Invalid :- ID Must Contain @gmail.com</span>:""}
      </div>

      <div className="space">
        <span className="User-icon"></span>
          <input type="varchar"  name="number" onChange={NumberHandle} placeholder="Enter your Phone Number"/>{numberErr?<span className="ErrorMessage">Invalid :- Number Must start with 9,8,7,6</span>:""}
      </div>

      <div className="space">
        <span className="User-icon"></span>
          <textarea type="varchar" name="message" onChange={MessageHandle} placeholder="Enter your Message"/><br/>{msgErr?<span className="ErrorMessage">Invalid: Min Msg must be 4 and Max Msg can be 100</span>:""}
      </div>
  
      <div className="filed space">
          <button type="submit" name="contactus" onClick={SubmitForm} value="contact" >Submit</button>
      </div>
  
  
      </form>
    </div>
    
    );
  }
 
 export default ContactUs