import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary-green flex flex-col justify-center items-center pt-16 px-16'>
        <img src="/images/logo-footer.svg" alt="" className='py-4' />
        <nav className='flex flex-col justify-center items-center w-full'>
        <ul className='flex flex-col text-center text-xl text-white leading-[60px] flex-grow'>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className='flex justify-self-end items-center justify-around w-full pt-24 md:w-56 lg:mx-auto lg:w-64 
        ' id='contact'> 
            <li><a href="#"><img src="/images/X.svg" alt="" /></a></li>
            <li><a href="#"><img src="/images/linkedin.svg" alt="" /></a></li>
            <li><a href="#"><img src="/images/github.svg" alt="" /></a></li>
            <li><a href="#"><img src="/images/facebook.svg" alt="" /></a></li>
        </ul>
        </nav>

        <p className='text-white pt-12 text-center text-xs pb-4'>Designed and built by <a href="">Techmad</a>  with love.</p>
    </footer>
  );
};

export default Footer