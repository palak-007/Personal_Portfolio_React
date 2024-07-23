import React from 'react'
import './ContactMeInfo.css'

const ContactMeInfo = ({ iconURL, text, link }) => {
    return (
        <>
            <a href={link}>
                <div className="contact-details-card">
                    <div className="icon">
                        <img src={iconURL} />
                        <p>{text}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default ContactMeInfo