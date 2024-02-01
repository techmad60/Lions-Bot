import React from 'react';
import Input from '../components/Input';
import '../App.css';


const Login = () => {

  return (
    <div className='signup flex justify-center flex-col items-center font-poppins min-h-screen'>
      <img src="../images/Vector.svg" alt="logo" className='mb-4' />

      <div className='form-container bg-secondary-grey w-[332px] h-[688px] flex flex-col justify-start items-center rounded-[40px] self-center justify-self-center'>
        <img src="../images/login.png" alt="Login illustration" className='my-[32px]'/>
        <p className='text-white stroke-secondary-grey font-semibold text-[36px] py-4'>Login</p>

        <form className='flex flex-col justify-center items-center'>
          <input type="email" id="email" name="email" placeholder="Email" required  className='p-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black my-6'/>

          <Input />

          <button type="submit" className='bg-primary-green p-4 text-white text-center w-[190px] h-[54px]text-[20px] font-medium rounded-[10px]'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;