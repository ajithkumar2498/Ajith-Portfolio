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
                        <a href="https://www.facebook.com/profile.php?id=100013964834482" className='iconLink' target='_blank'><i className="fa-brands fa-square-facebook link" ></i></a> 
                         <a href="https://www.linkedin.com/in/ajith-kumar-b0360a18a/" className='iconLink'target='_blank'><i className="fa-brands fa-linkedin link"></i></a>
                         <a href="https://www.instagram.com/ajith_ak_2498/" className='iconLink'target='_blank'><i className="fa-brands fa-square-instagram link"></i></a>
                         <a href="https://github.com/ajithkumar2498" className='iconLink'target='_blank'><i className="fa-brands fa-square-github link"></i></a>
                    </div>
                </form>
            </div>
    </section>
  </>
}

export default Contact