import React from 'react'
import './ContactMe.css'
import ContactMeInfo from './ContactMeInfoCard/ContactMeInfo'
import ContactForm from './ContactForm/ContactForm'

import { iconsData } from '../../utils/data'

const ContactMe = () => {
    return (
        <section className='contact-container' id='contact-section'>
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div className='contact-links' style={{ flex: 1 }}>
                    <ContactMeInfo
                        iconURL={iconsData.mail_icon}
                        text='Email Me'
                        link='mailto:py16074@gmail.com'
                    ></ContactMeInfo>

                    <ContactMeInfo
                        iconURL={iconsData.call_icon}
                        text='Call Me &nbsp; 7400942676'
                    ></ContactMeInfo>

                    <ContactMeInfo
                        iconURL={iconsData.linkedIn_icon}
                        text='Connect on LinkedIN'
                        link='https://www.linkedin.com/in/palak07/'
                    ></ContactMeInfo>

                    <ContactMeInfo
                        iconURL={iconsData.github_icon}
                        text='See My work on GitHub'
                        link='https://github.com/palak-007'
                    ></ContactMeInfo>
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    )
}

export default ContactMe