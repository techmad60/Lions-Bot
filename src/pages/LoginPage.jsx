import React, {useState, useEffect} from 'react';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../client';
import '../App.css';


const Login = () => {
  
  const [formData,setFormData] = useState({
    email:'',password:''
  });

  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
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
        }
      )
      if (error) throw error
      console.log(data);
      setToken(data)
      window.location.href = 'https://tailwindcss.com/';
      
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className='signup flex justify-center flex-col items-center font-poppins min-h-screen lg:bg-secondary-grey o'>
     
      <div className='form-container bg-secondary-grey w-[332px] h-[620px]  flex flex-col justify-start items-center rounded-[40px] self-center justify-self-center md:w-[600px] lg:pb-4 lg:h-full'>
      

        <form className='flex flex-col justify-start items-center  lg:w-full lg:rounded-3xl lg:my-4' onSubmit={handleSubmit}>
        <img src="../images/login.png" alt="Signup illustration" className='my-[32px] lg:my-[2px]'/>
          <p className='text-white stroke-secondary-grey font-semibold text-[36px]'>Login</p>
          <input type="email" id="email" name="email" placeholder="Email" required  className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black mt-5 outline-none md:w-[270px]' onChange={handleChange}/>

          <Input handleChange={handleChange}/>
          <span className='pb-3 text-green-300 cursor-pointer hover:text-cyan-200'>Forgot password?</span>

          <button type="submit" className='bg-primary-green p-4 text-white text-center w-[190px] h-[54px]text-[20px] font-medium rounded-[10px] border-none md:w-[228px] hover:bg-green-400 transition-all duration-300'>Login</button>
         
        </form>
        <p className='text-white pt-5'>Or <Link to={`/signup`}><span className='text-green-300 hover:text-cyan-200'>Signup!</span></Link></p>
      </div>
    </div>
  );
};

export default Login;
