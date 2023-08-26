import "./cssfile/contact.css"
import TextField from '@mui/material/TextField';
function Contact(props){
    return(
        <form action={props.action} method="get">
        <div className="contact-container">
    <div className="contact-form">
        <span  className="contact-title"  >CONTACT US</span>
      <input  className= "contact-name contactform-common"  type="text" placeholder="Name" />
      <input className="contact-email contactform-common" type="email" placeholder="Email" />
      <textarea className="contact-message contactform-common" placeholder="Message"></textarea>
      <button className="contact-btn contactform-common" type="submit">Contact me</button>
    </div>
       </div>
       </form>
  )

}
export default Contact;