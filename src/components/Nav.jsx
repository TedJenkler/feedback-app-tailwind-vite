import React, { useState } from 'react';
import hamburger from '../assets/hamburger.svg';
import MenuMobile from './MenuMobile';
import x from "../assets/x.svg";
import Filter from './Filter';
import Roadmap from './Roadmap';

function Nav({ toggleMenu, setToggleMenu }) {
    return (
        <>
            {/* Desktop navigation */}
            <nav className='hidden absolute md:flex md:relative md:mx-10 md:mb-10 md:h-44 gap-2 xl:flex xl:flex-col xl:pl-40 xl:pr-0 xl:pt-24 xl:gap-6 xl:mr-0'>
                <div className='bg-gradient-to-tr from-gradient-blue via-gradient-purple to-gradient-red pt-24 w-1/3 px-6 rounded-xl lg:w-1/3 lg:mr-2 xl:w-full xl:min-w-64 xl:p-6 xl:pt-16'>
                    <p className='text-white font-bold text-xl'>Frontend Mentor</p>
                    <p className='text-white font-medium text-base opacity-75 md:px15'>Feedback Board</p>
                </div>
                {/* Render the Filter component */}
                <Filter />
                {/* Render the Roadmap component */}
                <Roadmap />
            </nav>
            {/* Mobile navigation */}
            <nav className='flex justify-between px-6 h-20 items-center bg-gradient-to-tr from-gradient-blue via-gradient-purple to-gradient-red md:hidden md:absolute'>
                <div className='flex flex-col text-white'>
                    <p className='px15 font-bold tracking-[-0.25px]'>Frontend Mentor</p>
                    <p className='px13 opacity-75'>Feedback Board</p>
                </div>
                {/* Toggle button for mobile menu */}
                <img onClick={(e) => { setToggleMenu(!toggleMenu) }} className='h-4 w-5 cursor-pointer md:hidden' src={toggleMenu === false ? hamburger : x} alt='mobilemenu' />
                {/* Render the MenuMobile component */}
                <MenuMobile toggleMenu={toggleMenu} />
            </nav>
        </>
    );
}

export default Nav;

