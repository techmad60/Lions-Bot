import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import { IoIosArrowBack } from 'react-icons/io';



const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    setFormData({
      name: '',
      department: ''
    });
  };

  return (
    <div className='flex flex-col justify-center font-poppins min-h-screen'>
     
      <div className='form-container w-[332px]   flex flex-col justify-start items-center rounded-[40px] self-center justify-self-center md:w-[600px] lg:pb-4 lg:h-full bg-white box-shadow py-12'>
        <img src="../images/Vector.svg" alt="Signup illustration" className=' lg:my-[2px] '/>
        

        <form className='flex flex-col items-center lg:w-full lg:rounded-3xl lg:my-4' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-start items-start py-4'>
            <label htmlFor="name" className='pb-2'>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black  outline-none md:w-[270px] border border-primary-green'
              placeholder= 'Techmad'
            />
          </div>

          <div className=' flex flex-col justify-start items-start py-4'>
            <label htmlFor="department" className='pb-2'>Dept:</label>
              <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black outline-none md:w-[270px] border border-primary-green'
              placeholder='Computer Science'
            />
         </div>

          <button type="submit" className='bg-primary-green p-4 text-white text-center w-[190px] h-[54px]text-[20px] font-medium rounded-[10px] border-none md:w-[228px] hover:bg-green-400 transition-all duration-300 mt-12' >Let's go!</button>
         
        
          {/* <input type="email" id="email" name="email" placeholder="Name.eg 'Techmad'" required  className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black mt-5 outline-none md:w-[270px]' onChange={handleChange}/> */}
          
        </form>
        {/* <p className='text-white pt-5'>Already Signed up? <Link to={`/login`}><span className='text-green-300 hover:text-cyan-200'>Login</span></Link></p> */}
      </div>
      <div className="back-to-landing flex  m-4">
        <Link to="/" className="landing-link "><IoIosArrowBack className='text-primary-green text-4xl '  /></Link>
      </div>
    </div>
  );
};

export default Signup;

