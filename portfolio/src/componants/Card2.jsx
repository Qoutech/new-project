import React from 'react'
import Image from '../assets/image.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.png'
function Card2() {
    const cardData =[
        {image: Image,title:'Air Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation..' },
        {image: Image2,title:'Sea Freight', content:'Sea Freight plays perhaps the most vital role in most transportation and supply chain a solutions..' },
        {image: Image3,title:'Land Freight', content:'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation..' },
        {image: Image4,title:'Warehousing', content:'Package and store your things effectively and securely to make sure them in storage, have certif..' },
        {image: Image5,title:'Door to Door Delivery', content:'Our expertise in transport management and planning allows us to design a solution. hand..' },
        {image: Image6,title:'Packaging & Storage', content:'Package and store your things effectively and securely to make sure them in storage, We.. ' }
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

export default Card2