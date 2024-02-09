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
    window.location.href = 'https://bot.writesonic.com/share/bot/06eb07c2-ad12-4713-be1f-b232a0eb0d5b';
  };

  return (
    <div className="welcome-page text-center font-poppins flex flex-col items-center justify-center p-4 min-h-screen">
      <div className="text-center flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-semibold mt-8">
          Welcome, <span className="text-primary-green">{name}!</span>
        </h1>
        <p className="text-xl font-semibold ">
          <span>from </span>
          <span className="text-primary-green">{department}</span> Department.
        </p>

        <p className="mt-12 text-slate-600">
          "Reach out to <span className="text-primary-green">Techmad</span> here, if you have any suggestions for improvement. Greatest gbo gbo!!"
        </p>

        <button
          type="button"
          className="bg-primary-green p-4 flex justify-center items-center text-white text-center w-[190px] h-[54px] text-[20px] font-medium rounded-[10px] border-none md:w-[228px] hover:bg-green-400 transition-all duration-300 mt-12"
          onClick={redirectToChatbot}
        >
          Use Bot!
        </button>
        <div className="justify-self-start self-start">
          <Link to="/signin">
            <IoIosArrowBack className="text-primary-green text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
