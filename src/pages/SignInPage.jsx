import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../App.css';
import { IoIosArrowBack } from 'react-icons/io';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: ''
  });

  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any of the input fields are empty
    if (!formData.name || !formData.department) {
      // Display an alert message if any field is empty
      alert("Please fill in all the fields");
      return; // Stop further execution
    }
    
    // Check if the input name matches "Techmad" in any case or format
    if (formData.name.toLowerCase() === "techmad") {
      // Display alert if the input name is "Techmad"
      alert(" You lie!! 🙅There can be only one Techmad");
      return; // Stop further execution
    }
    
    // Redirect to Welcome Page with form data if input name is not "Techmad" and all fields are filled
    navigate(`/welcome?name=${formData.name}&department=${formData.department}`);
  };

  return (
    <div className='flex flex-col justify-center font-poppins min-h-screen'>
      <div className='form-container w-[332px] flex flex-col justify-start items-center rounded-[40px] self-center justify-self-center md:w-[600px] lg:pb-4 lg:h-full bg-white box-shadow py-12'>
        <img src="../images/Vector.svg" alt="logo" className='lg:my-[2px] bouncing-image'/>
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
              className='pl-4 w-[232px] h-[53px] rounded-[10px] outline-none md:w-[270px] border border-primary-green'
              placeholder='Techmad'
            />
          </div>
          <div className='flex flex-col justify-start items-start py-4'>
            <label htmlFor="department" className='pb-2'>Dept:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className='pl-4 w-[232px] h-[53px] rounded-[10px] outline-none md:w-[270px] border border-primary-green'
              placeholder='Computer Science'
            />
          </div>
          <button type="submit" className='bg-primary-green p-4 flex justify-center items-center text-white text-center w-[190px] h-[54px] text-[20px] font-medium rounded-[10px] border-none md:w-[228px] hover:bg-green-400 transition-all duration-300 mt-12'>Let's go!</button>
        </form>
      </div>
      <div className="back-to-landing flex m-4">
        <Link to="/" className="landing-link "><IoIosArrowBack className='text-primary-green text-3xl md:text-4xl hover:text-green-500 transition-all duration-300' /></Link>
      </div>
    </div>
  );
};

export default SignInPage;
