import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='container'>
        <div className="row">
            <h1>
                Contact
            </h1>
        </div>
        <div className="row">
            <div className="col contact-text">Scan the code and send me a text message!</div>
            <div className="col">
                <img src="https://res.cloudinary.com/dngbwenom/image/upload/v1655681807/portfolio/googleMaps/IMG_0603_iwalgb.jpg" alt="whatsapp" />
            </div>
        </div>
    </div>
  )
}
