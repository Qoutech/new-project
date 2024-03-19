import React from 'react'
import Gallery1 from '../assets/gallery1.png'
import Gallery2 from '../assets/gallery2.png'
import Gallery3 from '../assets/gallery3.png'
import Gallery4 from '../assets/gallery4.png'
function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5">
    <div className="container"data-aos="zoom-in">
      <div className="row">
        <div className="col-md-3"data-aos="zoom-in">
          <h2>CRYSTAL SHIPPING</h2>
          <p>Crystal Shipment Services is a global supplier of transport and logistics solutions.we have offices in more than 20 countries and an international network of partners and agents.</p>
        </div>
        <div className="col-md-3"data-aos="zoom-in">
          <h4>QUICK LINKS</h4>
          <ul className='unstyled-list'>
            <li> <a href="#" className='text-light text-docaration-none'></a>All Services</li>
            <li> <a href="#" className='text-light text-docaration-none'></a>Land Freight</li>
            <li> <a href="#" className='text-light text-docaration-none'></a>Sea Freight</li>
            <li> <a href="#" className='text-light text-docaration-none'></a>Air Freight</li>
          </ul>
        </div>
        <div className="col-md-3"data-aos="zoom-in">
          <h4>PHOTO GALLERY</h4>
          <div className="d-flex mt-3"data-aos="zoom-in">
            <div className="flex-grow-1 me-2"data-aos="zoom-in">
              <img src={Gallery1} alt=""className='img-fluid' />
            </div>
            <div className="flex-grow-1 me-2"data-aos="zoom-in">
              <img src={Gallery2} alt=""className='img-fluid ' />
            </div>
          </div>
          <div className="d-flex mt-3"data-aos="zoom-in">
            <div className="flex-grow-1 me-2"data-aos="zoom-in">
              <img src={Gallery3} alt=""className='img-fluid' />
            </div>
            <div className="flex-grow-1 me-2"data-aos="zoom-in">
              <img src={Gallery4} alt=""className='img-fluid' />
            </div>
          </div>
        </div>
        <div className="col-md-3"data-aos="zoom-in">
          <h4>OUR NEWSLETTER</h4>
          <p>Sign up today for tips latest news and exculisve special offers,</p>
          <input type="email"placeholder='Enter email 'className='form-control mb-3 mt-3' />
          <button className='btn btn-danger me-3 ms-3'>Submit</button>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default Footer