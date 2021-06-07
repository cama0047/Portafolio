import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import emailjs from 'emailjs-com';


export default function ContactMe() {

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gmail','template_2xtrurm', e.target, 'user_ZNubP1FsBZoQ3qie7iWi5')
      .then((result) => {
        const messagesContainer = document.querySelector('.form-messages')
messagesContainer.innerHTML=
        `<div class="alert alert-success" role="alert">
            Your email is sent, I will contact you ASAP!
          </div>`

setTimeout(() => {
    messagesContainer.innerHTML =''
}, 4000);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }


  return (
    <div className='pb-5'>
      <h1>Contact Me</h1>
      
       <div>
       <div className='form-messages'></div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>


      <Footer/>
    </div>
  )
}
