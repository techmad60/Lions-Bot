import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const Header = ({handleToggleNav, isNavOpen}) => {
  return (
    <header className='relative p-4 md:p-8 lg:flex lg:justify-between lg:items-center lg:pt-8 lg:px-16 lg:mx-auto lg:max-w-5xl header'>
    <div className='flex justify-between items-center lg:items-start'>
        <img src="/images/Vector.svg" alt=""  className='w-12'/>
        <button onClick={handleToggleNav} className='cursor-pointer lg:hidden outline-0 border-[0px]'> 
          <img src="/images/Hamburger.svg" alt="Hamburger-icon" className='w-8'/>
        </button>
    </div>
    {isNavOpen && (
        <div
          className="fixed top-0 left-0 w-[25vw] md:w-1/2 min-h-screen bg-black opacity-50 z-50"
          onClick={handleToggleNav} 
        />
      )}
    <nav
      aria-label='nav-mobile-header'
      className={`absolute top-0 right-0 bg-white flex flex-col min-h-screen w-3/4 items-center  pt-4 transition-all duration-300 ease-in-out ${isNavOpen ? 'fixed' : 'hidden transform translate-x-full '} z-50`}
    >
      <button onClick={handleToggleNav} className='w-8 mb-6 lg:hidden outline-0 border-[0px]'>
        <img src="/images/close-btn.svg" alt="Close-btn" className='w-8'/>
      </button>
      <ul className='leading-[4rem] gap-[33px] mt-16 text-center text-xl'>
        <li className='hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer '>
          <ScrollLink
            onClick={() => isNavOpen && handleToggleNav()}
            to='home'
            smooth={true} 
            duration={300}>
            Home
          </ScrollLink>
        </li>
        <li className='hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer '>
          <ScrollLink
            onClick={() => isNavOpen && handleToggleNav()}
            to='features'
            smooth={true} 
            duration={300}>
            Features
          </ScrollLink>
        </li>
        <li className='hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer '>
        <ScrollLink
            onClick={() => isNavOpen && handleToggleNav()}
            to='contact'
            smooth={true} 
            duration={400}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div className='flex flex-col mt-16 w-full items-center text-center lg:hidden'>
       <Link to={`/signup`}className='text-white bg-primary-green p-2 rounded-md w-32 mb-4 lg:mb-0 hover:bg-green-400'>Use Bot</Link>
        {/* <Link to={`/login`} className='rounded-md p-2 w-32 login'>Login</Link> */}
      </div>
    </nav>

    <nav aria-label='nav-header'>
        <ul className='leading-[4rem] lg:flex gap-[33px] text-center hidden'>
            <li className='nav-desktop lg:hover:text-green-500 transition-all duration-300 ease-in-out  cursor-pointer'>
            <ScrollLink
                to='#'
                smooth={true} 
                duration={300}>
                Home
            </ScrollLink>
            </li>
            <li className='nav-desktop lg:hover:text-green-500 transition-all duration-300 ease-in-out  cursor-pointer'>
            <ScrollLink
                to='features'
                smooth={true} 
                duration={300}>
                Features
            </ScrollLink>
            </li>
            <li className='nav-desktop lg:hover:text-green-500 transition-all duration-300 ease-in-out  cursor-pointer'>
            <ScrollLink
                to='contact'
                smooth={true} 
                duration={400}>
                Contact
            </ScrollLink>
            </li>
        </ul> 
    </nav>

    <div className='lg:flex flex-row mt-10 w-full  lg:mt-0 lg:w-fit  hover:bg-green-400 active:translate-y-4 transition-all duration-300 ease-in-out bg-primary-green text-white justify-center rounded-md items-center py-2 px-8  hidden'>
      <Link to={`/signup`}className='text-white '>Let's go!</Link>
    </div>
  </header>
  );
};

export default Header;