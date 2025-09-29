import React from 'react'
import './Contact.css'
import  Linkedin from '../../assets/Linkedin.png'
import  Github from '../../assets/Github.png'
import  gmail from '../../assets/gmail.png'

const Contact = () => {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "75a78b80-67c7-4852-b89c-2c2e604724c9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); // ✅ clears the form fields
    alert("Message sent successfully! ✅");
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
       <h1>Get in touch</h1>
       {/* <img src="" alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <div className="contact-details">
                <div className="contact-detail">
                  <img src={gmail} className='img1' alt="Gmail" /> <p>saranyabalaji219@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={Linkedin} className='img2' alt="Linkedin" />
                     <a href="https://www.linkedin.com/in/saranya-b-b0b9a21b5/">Linkedin</a>
                </div>
                <div className="contact-detail">
                    <img src={Github} className='img3' alt="Github" /> 
                    <a href="https://github.com/Saranyabalaji219">Github</a>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Name:</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Email:</label>
          <input type="text" placeholder='Enter your Email' name='email'/>
          <label htmlFor="">Message:</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Contact