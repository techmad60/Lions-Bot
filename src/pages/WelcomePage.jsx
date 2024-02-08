import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook to access query parameters
import { IoIosArrowBack } from 'react-icons/io';


const WelcomePage = () => {
  // Get location object to access query parameters
  const location = useLocation();
  
  // Extract name and department from query parameters
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const department = queryParams.get('department');

  return (
    <div className="welcome-page">
      <h1>Welcome, {name}!</h1>
      <p>You have successfully signed in. Your department is {department}.</p>
      <Link to = "/signin" ><IoIosArrowBack className='text-primary-green text-3xl'/></Link>
    </div>
  );
};

export default WelcomePage;
