import React, {useState} from 'react';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { supabase } from '../../client';
import '../App.css';


const Signup = () => {
  const [formData,setFormData] = useState({
    email:'',password:''
  });

  

  console.log(formData);

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      };

    });
  };

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            redirectTo: 'https://tailwindcss.com/'
          },
        }
      )
      if (error) throw error
      alert('Check your email for verification link');
      window.location.href = 'https://tailwindcss.com/';

      
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className='signup flex justify-center flex-col items-center font-poppins min-h-screen lg:bg-secondary-grey o'>
     
      <div className='form-container bg-secondary-grey w-[332px] h-[620px]  flex flex-col justify-start items-center rounded-[40px] self-center justify-self-center md:w-[600px] lg:pb-4 lg:h-full'>
      

        <form className='flex flex-col justify-start items-center  lg:w-full lg:rounded-3xl lg:my-4' onSubmit={handleSubmit}>
        <img src="../images/signup.png" alt="Signup illustration" className='my-[32px] lg:my-[2px]'/>
          <p className='text-white stroke-secondary-grey font-semibold text-[36px]'>Sign up</p>
          <input type="email" id="email" name="email" placeholder="Email" required  className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black mt-5 outline-none md:w-[270px]' onChange={handleChange}/>

          <Input handleChange={handleChange}/>

          <button type="submit" className='bg-primary-green p-4 text-white text-center w-[190px] h-[54px]text-[20px] font-medium rounded-[10px] border-none md:w-[228px] hover:bg-green-400 transition-all duration-300'>Sign up</button>
         
        </form>
        <p className='text-white pt-5'>Already Signed up? <Link to={`/login`}><span className='text-green-300 hover:text-cyan-200'>Login</span></Link></p>
      </div>
    </div>
  );
};

export default Signup;