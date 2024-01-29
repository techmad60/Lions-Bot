import React, { useState } from 'react';
import './App.css';


function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app font-poppins scroll-smooth w-full">
      <header className='relative p-4 lg:flex lg:justify-between lg:items-center lg:pt-8 lg:px-16 lg:mx-auto lg:max-w-6xl header'>
        <div className='flex justify-between items-center lg:items-start'>
            <img src="/images/Vector.svg" alt=""  className='lg:w-16 w-12'/>
            <button onClick={handleToggleNav} className='cursor-pointer lg:hidden outline-0 border-[0px]'> 
              <img src="/images/Hamburger.svg" alt="Hamburger-icon" className='w-12'/>
            </button>
        </div>
      
        <nav
          aria-label='nav-header'
          className={`absolute top-0 right-0 bg-white flex flex-col min-h-screen w-1/2 items-center pt-4 ${isNavOpen ? '' : 'hidden'} lg:flex lg:flex-row lg:static lg:min-h-full lg:justify-evenly lg:w-full lg:pt-0 flex-grow`}
        >
          <button onClick={handleToggleNav} className='w-8 mb-6 lg:hidden outline-0 border-[0px]'>
            <img src="/images/close-btn.svg" alt="Close-btn" className=''/>
          </button>
          <ul className='leading-10 lg:flex gap-[33px]'>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
            <div className='flex flex-col mt-10 w-full items-center gap-6 text-center lg:hidden'>
            <a href="#" className='text-white bg-primary-green p-2 rounded-md w-32 mb-4 lg:mb-0 '>Sign up</a>
            <a href="#" className='rounded-md p-2 w-32 login'>Login</a>
          </div>
        </nav>
        <div className='lg:flex flex-col mt-10 w-full items-center lg:mt-0 lg:w-fit lg:flex-row lg:gap-4 text-center hidden'>
          <a href="#" className='text-white bg-primary-green p-2 rounded-md w-32 mb-4 lg:mb-0 '>Sign up</a>
          <a href="#" className='rounded-md p-2 w-32 login'>Login</a>
        </div>
      </header>

      <main className='flex flex-col'>
        <section className='intro flex flex-col justify-center items-center text-center p-4 mt-16 lg:grid lg:grid-cols-2 lg:px-16 lg:text-start lg:items-start lg:mt-16 lg:mx-auto lg:max-w-6xl w-full lg:justify-between'>
          <img src="/images/hero-img.png" alt="Avatar" className='mx-auto lg:hidden' />
          <img src="/images/hero-desktop.png" alt="Avatar" className='hidden lg:flex order-1'/>
          
          <div className='lg:flex flex-col justify-between'>
            <h1 className='text-2xl mt-20 leading-normal font-bold lg:mt-4'> Welcome to <span className='text-primary-green'>Lion’s Bot! </span><br />
            Your Personalized Student Portal Assistant!</h1>

            <p className='leading-normal font-normal mt-7 text-sm lg:pr-20'>
            Empowering students with instant support, our chatbot streamlines interactions with the school portal. Experience efficient problem-solving and personalized assistance.
            </p>

            <button className='h-[49px] w-[218px] bg-primary-green text-center text-white rounded-[10px] mt-8 lg:mt-20 outline-0 border-[0px]'>Get Started</button>
          </div>

        </section>

        <section className='features flex flex-col text-center justify-center items-center  mt-32 pb-20 bg-no-repeat bg-primary-grey lg:bg-none lg:mt-40' id='features'>
          <h2 className='text-[20px] leading-normal font-semibold pt-8 lg:pt-0'>Features</h2>
          
          <div className='w-full lg:grid grid-cols-2 grid-rows-2 lg:max-w-6xl mx-auto'>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-1.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>Instant Problem Resolution</h3>

              <p className='text-sm px-12'>Resolve portal-related issues instantly with our chatbot's AI-powered solutions.</p>
            </article>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-2.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>Personalized Assistance</h3>

              <p className='text-sm px-12'>Enjoy tailored support as our chatbot understands and addresses individual student needs.</p>
            </article>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-3.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>User-Friendly Interface</h3>

              <p className='text-sm px-12'>Navigate the chatbot effortlessly with a user-friendly interface, making interactions seamless.</p>
            </article>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-4.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>24/7 Availability</h3>

              <p className='text-sm px-12'>Access assistance anytime, anywhere – our chatbot is available 24/7 to cater to your queries.</p>
            </article>
          </div>
          
        </section>

        <section className='testimonials flex flex-col justify-center items-center bg-mobile-testimonials bg-no-repeat text-center pb-20 lg:bg-desktop-testimonials' id='testimonials'>
          <h2 className='text-white text-[20px] leading-normal font-semibold py-6 text-center mx-auto lg:pt-8'>Our Testimonials</h2>
          <div className='lg:grid lg:grid-cols-3 lg:mx-auto lg:max-w-6xl lg:mt-48 lg:pb-24'>
            <article className='flex flex-col justify-center items-center mt-36 lg:mt-0'>
              <img src="/images/Avatar.png" alt="" className='w-[70px] h-[70px]'/>
              <p className='text-xs px-16 pt-4'><span className='font-style-script text-[48px]'>“</span>The chatbot made solving portal issues a breeze! Quick responses and effective solutions saved me a lot of time.</p>
              <div className='pt-3'>
                <p className='text-primary-green text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs'>Pharmacy, 200lvl</p>
              </div>
            </article>
            <article className='flex flex-col justify-center items-center mt-16 lg:mt-0'>
              <img src="/images/Avatar.png" alt="" className='w-[70px] h-[70px]'/>
              <p className='text-xs px-16 pt-4'><span className='font-style-script text-[48px]'>“</span>I was skeptical at first, but the chatbot exceeded my expectations. It personalized assistance based on my specific problem, making the process efficient.</p>
              <div className='pt-3'>
                <p className='text-primary-green text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs'>Pharmacy, 200lvl</p>
              </div>
            </article>
            <article className='flex flex-col justify-center items-center mt-16 lg:mt-0'>
              <img src="/images/Avatar.png" alt="" className='w-[70px] h-[70px]'/>
              <p className='text-xs px-16 pt-4'><span className='font-style-script text-[48px]'>“</span>Having access to the chatbot 24/7 is a game-changer! It's incredibly reassuring to know that I can get assistance anytime I need it.</p>
              <div className='pt-3'>
                <p className='text-primary-green text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs'>Pharmacy, 200lvl</p>
              </div>
            </article> 
          </div>
          
        </section>
      </main>

      <footer className='bg-primary-green flex flex-col justify-center items-center pt-16 px-16'>
        <img src="/images/logo-footer.svg" alt="" className='py-4' />
        <nav className='flex flex-col justify-center items-center w-full'>
          <ul className='flex flex-col text-center text-xl text-white leading-[60px] flex-grow'>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul className='flex justify-self-end items-center justify-around w-full pt-24 lg:mx-auto lg:w-64 
          ' id='contact'> 
            <li><a href="#"><img src="/images/X.svg" alt="" /></a></li>
            <li><a href="#"><img src="/images/linkedin.svg" alt="" /></a></li>
            <li><a href="#"><img src="/images/github.svg" alt="" /></a></li>
            <li><a href="#"><img src="/images/facebook.svg" alt="" /></a></li>
          </ul>
        </nav>

        <p className='text-white pt-12 text-center text-xs pb-4'>Designed and built by <a href="">Techmad</a>  with love.</p>
      </footer>
    </div>
  );
};

export default App;
