import React, { useState } from 'react';
import logoImage from '../../pages/img/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Header() {

    // State variable to control navigation menu visibility
    const [nav, setNav] = useState(true);

    // Function to toggle the navigation menu
    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <header className="container flex  justify-between items-center p-4 md:p-8 relative">
      <div className="flex items-center">
        <img src={logoImage} alt="MyCompany Logo" className="h-16 md:h-32 w-auto mr-2 rounded-lg"/>
      </div>
      <nav>
        <ul className="flex space-x-8 text-white text-lg font-bold hidden md:flex">
          <li className='hover:scale-110 transition duration-300 ease-in-out'><a href="#">Home</a></li>
          <li className='hover:scale-110 transition duration-300 ease-in-out'><a href="#">About</a></li>
          <li className='hover:scale-110 transition duration-300 ease-in-out'><a href="#">Events</a></li>
          <li className='hover:scale-110 transition duration-300 ease-in-out'><a href="#">Contacts</a></li>
          <li className='text-[#CFB299] hover:text-[#9F643D] hover:scale-110 transition duration-300 ease-in-out'><a href="#">Login</a></li>
        </ul>
      </nav>

            {/* Hamburger menu */}
            <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={35} className='text-[#61493C]' /> : <AiOutlineMenu size={35} className='text-[#CFB299]'  />}
        </div>

        {/* Side navigation menu */}
        <div className={!nav ? 'fixed  z-50 left-0 top-0 w-[50%] h-full border-r border-r-gray-900  bg-[black] opacity-80 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
          <ul className="pt-24 uppercase ">
            <li className='p-4 border-b-2 border-[#9F643D] text-[#CFB299]'><a href="/">Home</a></li>
            <li className='p-4 border-b-2 border-[#9F643D]  text-[#CFB299]'><a href="/">About</a></li>
            <li className='p-4 border-b-2 border-[#9F643D]  text-[#CFB299]'><a>Events</a></li>
            <li className='p-4 border-b-2 border-[#9F643D]  text-[#CFB299]'><a href="/">Contact</a></li>
            <li className='p-4 border-b-2 border-[#9F643D]  text-[#CFB299]'><a href="/">login</a></li>
          </ul>
        </div>
    </header>
  );
}

export default Header;