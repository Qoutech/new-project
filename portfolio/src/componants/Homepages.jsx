import React from 'react'
import About from '../assets/about.png'
import Card from './Card'
import Form from './Form'
import Icon from '../assets/icon.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'
function Homepages() {
  return (
    <>
    <div className='hero'>
        <div className="container pt-5 text-light text-center"data-aos="zoom-in">
            <h1 className='mt-5 pt-5'>Easy & Quick Cargo.Shipping Services </h1>
            <p style={{fontSize:'24px'}}>Book low cost sea freight shipping services.Get an instant quote.</p>
            <a href="" className="btn btn-danger text-light ">Track Good's Here</a>
        </div>
    </div>
    <div className="container pt-5"data-aos="zoom-in">
      <div className="text-center">
        <h2>Welcome Crystal Shipment</h2>
        <div className="bg-red mx-auto "></div>
        <p className='pt-3'>Crystal Shipment is more than logistics. We can also optimize your packaging manage your materials sourcing, mand so much more.</p>
      </div>
     <div className="row">
      <div className="col-md-6"data-aos="zoom-in">
        <img src={About} className='img-fluid rounded' alt="" />
      </div>
      <div className="col-md-6"data-aos="zoom-in">
        <p className='text-danger'>TRANSPORTATION COMPANY</p>
        <h3>We Provide Full Range Logisticts Solution</h3>
        <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
        <a href="" className="btn btn-danger">Learn More</a>
      </div>
     </div>
    </div>
    <div className="container pt-5 "data-aos="zoom-in">
      <div className='text-center'> <p className='text-danger'>TYPES OF LOGISTICS</p>
      <h2>Covering All Logistics Fields</h2>
      </div>
      <Card/>
      <div className="text-center"data-aos="zoom-in">
      <a href="" className="btn btn-danger">Load more</a>
      </div>
      </div>
      <div className="bg-warning mt-5 "style={{minHeight:'200px', padding:'20px 0'}}>
        <div className="container pt-5"data-aos="zoom-in">
        <div className="row d- flex justifY-contect-center">
          <div className="col-md-8"data-aos="zoom-in">
            <h2>Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than logistics.</p>
          </div>
          <div className="col-md-4 text-md-end text-sm-start">
          <a href="" className="btn btn-danger">Load more</a>
          </div>
        </div>
        </div>
      </div>

      <div className='container mt-5'data-aos="zoom-in">
        <div className="row">
          <div className="col-md-6">
            <h2>REQUEST A QUOTE</h2>
            <div className="d-flex mt-3"data-aos="zoom-in">
              <div className="flex-grow-1 me-2">
              <img src={Icon} alt="" />
              </div>
              <div className="flex-grow-1 me-2">
                <h4>Global supply Chain Solutions</h4>
                <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
            <div className="d-flex mt-3"data-aos="zoom-in">
              <div className="flex-grow-1 me-2"data-aos="zoom-in">
              <img src={Icon2} alt="" />
              </div>
              <div className="flex-grow-1 me-2"data-aos="zoom-in">
                <h4>Mobile Shipping Tracking</h4>
                <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
            <div className="d-flex mt-3"data-aos="zoom-in">
              <div className="flex-grow-1 me-2"data-aos="zoom-in">
              <img src={Icon3} alt="" />
              </div>
              <div className="flex-grow-1 me-2"data-aos="zoom-in">
                <h4>Mobile Shipping Tracking</h4>
                <p>Efficiently unleash cross-media information without cross-media value.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6"data-aos="zoom-in">
            <h2>WHY CHOOSE US?</h2>
            <Form/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepages