import React from 'react'
import './contact.css'

function Contact() {
  return <>
    <section id="contact-page">
            <div className="Contact">
                <h2 className='contactHeader'>Contact Me</h2>
                <span className='contactDesc'>Get in touch </span>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder='your name'/>
                    <input type="email" className="email" placeholder='your email' />
                    <textarea name="message"  rows="5" className="msg" placeholder='your message'></textarea>
                    <button className="submitbtn" type='submit' value='send'>Submit</button>
                    <div className="links">
                         <i className="fa-brands fa-square-facebook link" ></i>
                         <i className="fa-brands fa-linkedin link"></i>
                         <i className="fa-brands fa-square-instagram link"></i>
                         <i className="fa-brands fa-square-github link"></i>
                    </div>
                </form>
            </div>
    </section>
  </>
}

export default Contact