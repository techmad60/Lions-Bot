import React from 'react';
import Input from '../components/Input';
import '../App.css';


const Signup = () => {
  return (
    <div className='signup flex justify-center flex-col items-center font-poppins min-h-screen'>
     
      <div className='form-container bg-secondary-grey w-[332px] h-[620px]  flex flex-col justify-start items-center rounded-[40px] self-center justify-self-center'>
        <img src="../images/signup.png" alt="Signup illustration" className='my-[32px]'/>
        <p className='text-white stroke-secondary-grey font-semibold text-[36px]'>Sign up</p>

        <form className='flex flex-col justify-center items-center'>
          <input type="email" id="email" name="email" placeholder="Email" required  className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black my-5'/>

          <Input />

          <button type="submit" className='bg-primary-green p-4 text-white text-center w-[190px] h-[54px]text-[20px] font-medium rounded-[10px] border-none'>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;