import React from 'react'

function Contact() {
  return <>
    <section className="contact-page">
            <div className="Contact">
                <h2 className='contactHeader'>Contact Me</h2>
                <span className='contactDesc'>Get in touch with me</span>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder='your name'/>
                    <input type="email" className="email" placeholder='your email' />
                    <textarea name="message"  rows="5" className="msg" placeholder='your message'></textarea>
                    <button className="submitbtn" type='submit' value='send'>Submit</button>
                    <div className="links">
                         <i class="fa-brands fa-square- link" ></i>
                         <i class="fa-brands fa-linkedin link"></i>
                         <i class="fa-brands fa-square-instagram link"></i>
                         <i class="fa-brands fa-square-github link"></i>
                    </div>
                </form>
            </div>
    </section>
  </>
}

export default Contact