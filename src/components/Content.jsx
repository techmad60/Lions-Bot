import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <main className='flex flex-col'>
        <section className='intro flex flex-col justify-center items-center text-center p-4 mt-16 lg:flex-row lg:px-16 lg:text-start lg:items-start lg:mt-16 lg:mx-auto lg:max-w-5xl'>
          <img src="/images/hero-img.png" alt="Avatar" className='mx-auto lg:hidden' />
          <img src="/images/hero-desktop.png" alt="Avatar" className='mx-auto hidden lg:flex order-1 w-96'/>
          
          <div className='lg:flex flex-col justify-between'>
            <h1 className='text-2xl mt-20 leading-normal font-bold lg:mt-4'> Welcome to <span className='text-primary-green'>Lions Bot! </span><br />
            Your Personalized Student Portal Assistant!</h1>

            <p className='leading-normal font-normal mt-7 text-sm md:px-16 lg:px-0 lg:pr-20'>
            Empowering students with instant support, our chatbot streamlines interactions with the school portal. Experience efficient problem-solving and personalized assistance.
            </p>

            <Link
              to="/signin"
              className="flex justify-center items-center  h-[49px] w-[218px] bg-primary-green text-center text-white rounded-[10px] mt-8 lg:mt-20 outline-0 border-[0px] hover:bg-green-400 active:translate-y-4 transition-all duration-300 ease-in-out mx-auto lg:mx-0"
              id="success"
            >
              Get Started
            </Link>

          </div>

        </section>

        <section className='features flex flex-col text-center justify-center items-center  mt-32 pb-20 bg-no-repeat bg-primary-grey lg:bg-none lg:mt-40' id='features'>
          <h2 className='text-[20px] leading-normal font-semibold pt-8 lg:pt-0'>Features</h2>
          
          <div className='w-full lg:grid grid-cols-2 grid-rows-2 lg:max-w-6xl mx-auto'>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-1.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>Instant Problem Resolution</h3>

              <p className='text-xs px-10 md:px-40 lg:px-10'>Resolve portal-related issues instantly with our chatbot's AI-powered solutions.</p>
            </article>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-2.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>Personalized Assistance</h3>

              <p className='text-xs px-10 md:px-40 lg:px-10'>Enjoy tailored support as our chatbot understands and addresses individual student needs.</p>
            </article>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-3.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>User-Friendly Interface</h3>

              <p className='text-xs px-10 md:px-40 lg:px-10'>Navigate the chatbot effortlessly with a user-friendly interface, making interactions seamless.</p>
            </article>
            <article className='flex flex-col justify-center items-center pt-12'>
              <img src="/images/icon-4.svg" alt="" className='w-[50px] h-[50px]'/>
              
              <h3 className='text-base font-semibold pt-3'>24/7 Availability</h3>

              <p className='text-xs px-10 md:px-40 lg:px-10'>Access assistance anytime, anywhere – our chatbot is available 24/7 to cater to your queries.</p>
            </article>
          </div>
          
        </section>

        <section className='testimonials flex flex-col justify-center items-center bg-mobile-testimonials bg-no-repeat text-center pb-20  md:bg-desktop-testimonials lg:bg-desktop-testimonials' id='testimonials'>
          <h2 className='text-white text-[20px] leading-normal font-semibold py-6 text-center mx-auto md:py-3 lg:pt-8'>Our Testimonials</h2>
          <div className='lg:grid lg:grid-cols-3 lg:mx-auto lg:max-w-6xl lg:mt-44 lg:pb-24'>
            <article className='flex flex-col justify-center items-center mt-36 md:mt-12 lg:mt-0'>
              <img src="/images/Avatar.png" alt="" className='w-[70px] h-[70px]'/>
              <p className='text-xs px-16 pt-4 md:px-48 lg:px-16'><span className='font-style-script text-[48px]'>“</span>The chatbot made solving portal issues a breeze! Quick responses and effective solutions saved me a lot of time.</p>
              <div className='pt-3'>
                <p className='text-primary-green text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs'>Pharmacy, 200lvl</p>
              </div>
            </article>
            <article className='flex flex-col justify-center items-center mt-16 lg:mt-0'>
              <img src="/images/Avatar.png" alt="" className='w-[70px] h-[70px]'/>
              <p className='text-xs px-16 pt-4 md:px-48 lg:px-16'><span className='font-style-script text-[48px]'>“</span>I was skeptical at first, but the chatbot exceeded my expectations. It personalized assistance based on my specific problem, making the process efficient.</p>
              <div className='pt-3'>
                <p className='text-primary-green text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs'>Pharmacy, 200lvl</p>
              </div>
            </article>
            <article className='flex flex-col justify-center items-center mt-16 lg:mt-0'>
              <img src="/images/Avatar.png" alt="" className='w-[70px] h-[70px]'/>
              <p className='text-xs px-16 pt-4 md:px-48 lg:px-16'><span className='font-style-script text-[48px]'>“</span>Having access to the chatbot 24/7 is a game-changer! It's incredibly reassuring to know that I can get assistance anytime I need it.</p>
              <div className='pt-3'>
                <p className='text-primary-green text-[15px] font-semibold'>Favour Nnabuife</p>
                <p className='text-xs'>Pharmacy, 200lvl</p>
              </div>
            </article> 
          </div>
          
        </section>
      </main>
  )
}

export default Content;