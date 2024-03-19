import React from 'react'
import Image from '../assets/image.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
function Card() {
    const cardData =[
        {image: Image,title:'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation..' },
        {image: Image2,title:'Sea Freight', content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions..' },
        {image: Image3,title:'Land Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation..' }
    ]
  return (
    <>
      <div className="row">
        {cardData.map((card,index) => (
         <div className="col-md-4 mb-5">
         <div className='card'>
           <img src={card.image} className='card-img-top' alt="" />
           <div className='card-body'>
             <h4 className='card-title'> {card.title} </h4>
             <p className='card-text'> {card.content} <a href="" className='text-danger text-decoration-none'>Read More</a> </p>
           </div>
         </div>
       </div>
       ))}
       
        
      </div>
    </>
  )
}

export default Card