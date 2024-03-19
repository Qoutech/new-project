import React, {useState} from 'react'
function Form() {
  const [formData,setFormData] = useState ({
    name:'',
    email:'',
    subject:'',
    phone:'',
    message:''
  });
  const [errors, setErrors]  = useState({});
  const handleChange = (e) => {
    const{name,value} = e.target;
    setFormData ({
      ...formData,
      [name]:value
    });
  }
  const validateForm = () => {
    const errors = {};
    if(!formData.name.trim()){
      errors.name = 'Name is required'
    }

    if(!formData.name.trim()){
      errors.email = 'Email is required'
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      errors.email = 'Invalid format '
    }

    if(!formData.subject.trim()){
      errors.subject = 'Subject is required'
    }
    if(!formData.message.trim()){
      errors.message = 'Message is required'
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault ();
    if (validateForm()){
      //processing the information
      alert ( 'Message sent succefully');
      console.log(formData);
      
      // to redirect to another page
      window.location.href = '/contact'

    }
  };
  return (
    <>
     <form action="" onSubmit={handleSubmit}>
              <div className="d-flex mt-3"data-aos="zoom-in">
                <div className="flex-grow-1 me-2">
                <input type="text" name='name' placeholder='Name' className={`form-control   ${errors.name && 'is-invalid'}`} onChange={handleChange} />
                {errors.name && <div className='invalid-feedback'> {errors.name} </div> }
                </div>

                <div className="flex-grow-1 ms-2">
                <input type="text" name='email'value={ formData.email} placeholder='Enter your Email'className={`form-control ${errors.email && 'is-invalid'}`} onChange={ handleChange}/>
                {errors.email && <div className='invalid-feedback'> {errors.email} </div> }
                </div>
              </div>

              <div className="d-flex mt-3"data-aos="zoom-in">
                <div className="flex-grow-1 me-2">
                <input type="text" name='phone' placeholder='Phone (optional) 'className='form-control' />
                </div>

                <div className="flex-grow-1 ms-2"data-aos="zoom-in">
                <input type="text" name='subject' value={formData.object} placeholder='Subject'className={`form-control ${errors.subject && 'is-invalid' }`} onChange={ handleChange}/>
                {errors.subject && <div className='invalid-feedback'> {errors.subject} </div> }
                </div>
              </div>

              <textarea  id="" cols="30" rows="10" className={`form-control mt-3 ${ errors.message && 'is-invalid'}`} onChange={handleChange} name='message' value={formData.message} placeholder='Enter your message Here'></textarea>
             {errors.message && <div className='invalid-feedback'> {errors.message} </div> }
              <button className='btn btn-danger mt-3'>Submit</button>
            </form>
    </>
  )
}

export default Form