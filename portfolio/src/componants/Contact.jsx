import React from 'react'
import Form2 from './Form2'
function Contact() {
  return (
    <>
         <div className="bg-cover">
        <div className="text-center text-light">
            <h1 className='pt-5'>Contact</h1>
            <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Contact</p>
        </div>
    </div>
    <div className="container pt-5">
        <div className="row">
            <div className="col-md-6">
                <h5>Kindly call us or join our support group on WhatsApp.</h5>
                <p><i class="fa-brands fa-whatsapp me-3"></i>+234 9072211222</p>
                <p><i class="fa-solid fa-phone-volume me-3"></i>+234 8167000077</p>
                <p><i class="fa-regular fa-message me-3"></i>info@crystalshipment.com</p>
            </div>
            <div className="col-md-6">
            <Form2/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact