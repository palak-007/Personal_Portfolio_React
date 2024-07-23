import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="1c25b2bd-a283-439b-b0e4-719c0bb6b7e9"></input>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" required/>
          <input type="text" name="lastname" placeholder="Last Name" required/>
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="message" rows={3} required></textarea>

        <button type='submit'>SEND</button>
      </form>
    </div>
  )
}

export default ContactForm