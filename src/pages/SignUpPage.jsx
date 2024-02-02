import React from 'react';
import Input from '../components/Input';
import '../App.css';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className='signup flex justify-center flex-col items-center font-poppins min-h-screen lg:bg-secondary-grey o'>
     
      <div className='form-container bg-secondary-grey w-[332px] h-[620px]  flex flex-col justify-start items-center rounded-[40px] self-center justify-self-center md:w-[600px] lg:pb-4 lg:h-full'>
      

        <form className='flex flex-col justify-start items-center  lg:w-full lg:rounded-3xl lg:my-4'>
        <img src="../images/signup.png" alt="Signup illustration" className='my-[32px] lg:my-[2px]'/>
          <p className='text-white stroke-secondary-grey font-semibold text-[36px]'>Sign up</p>
          <input type="email" id="email" name="email" placeholder="Email" required  className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black mt-5 outline-none md:w-[270px]'/>

          <Input />

          <button type="submit" className='bg-primary-green p-4 text-white text-center w-[190px] h-[54px]text-[20px] font-medium rounded-[10px] border-none md:w-[228px]'>Sign up</button>
          <p className='text-white pt-5'>Already Signed up? <Link to={`/login`}><span className='text-green-300'>Login</span></Link></p>
        </form>
       
      </div>
    </div>
  );
};

export default Signup;