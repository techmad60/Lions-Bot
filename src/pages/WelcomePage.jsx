import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const WelcomePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const department = queryParams.get('department');

  // Function to redirect to Tailwind CSS website
  const redirectToChatbot = () => {
    window.location.href = 'https://bot.writesonic.com/share/bot/af74e13f-6946-4d68-b144-0ac241939175';
  };

  return (
    <div className="welcome-page text-center font-poppins flex flex-col items-center justify-center p-4 min-h-screen bg-primary-green">
      <div className="text-center flex flex-col items-center justify-center p-4 bg-white rounded-[40px] w-[342px] lg:w-[572px] py-12">
      <img src="../images/Vector.svg" alt="logo" className='lg:my-[2px] bouncing-image'/>
        <h1 className="text-[24px] font-semibold mt-8">
          Welcome, <span className="text-primary-green">{name}!</span>
        </h1>
        <p className="text-[24px] font-semibold ">
          <span className='text-[24px] font-semibold'>from</span> <br />
          <span className="text-primary-green text-[24px] font-semibold">{department}</span> Department
        </p>

        <p className="mt-12 text-slate-600">
          "Reach out to <span className="text-primary-green">Techmad</span> here, if you have any suggestions for improvement. Greatest gbo gbo!!"
        </p>

        <button
          type="button"
          className="bg-primary-green p-4 flex justify-center items-center text-white text-center w-[190px] h-[54px] text-[20px] font-medium rounded-[10px] border-none md:w-[228px] hover:bg-green-400 transition-all duration-300 mt-8"
          onClick={redirectToChatbot}
        >
          Use Bot!
        </button>
        
      </div>
      <div className="justify-self-start self-start mt-8">
          <Link to="/signin">
            <IoIosArrowBack className="text-white text-3xl" />
          </Link>
        </div>
    </div>
  );
};

export default WelcomePage;
