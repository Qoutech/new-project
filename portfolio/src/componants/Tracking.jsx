import React from 'react'

function Tracking() {
  return (
    <>
     <div className="bg-cover">
        <div className="text-center text-light"data-aos="zoom-in">
            <h1 className='pt-5'>Tracking</h1>
            <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Tracking</p>
        </div>
    </div>
    <div className="container pt-5"data-aos="zoom-in">
    <div className="row">
            <div className="col-md-6"data-aos="zoom-in">
            <h2>TRACK YOUR SHIPMENT</h2>
                <div className="bg-red"></div>
                <p className='mt-3'>If you require maximum visibility to your Freight transactions, contact our customer team or you can track your cargo by using below tracking system.</p>
            </div>
            <div className="col-md-6"data-aos="zoom-in">
                <input type="text"placeholder='Enter your tracking here'className='form-control'/>
                <div className="btn btn-danger mt-3">Tracking</div>
            </div>
            </div>
         </div>
    
           
    </>
  )
}

export default Tracking