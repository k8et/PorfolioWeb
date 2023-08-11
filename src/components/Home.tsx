import React, {FC} from 'react';
import {HomeImage} from './Image';
import ScrollDown from "./Scroll Down";
import {HomeProps} from "../interfaces/HomeProps";
import StyledLink from "./StyledLink";


const Home:FC<HomeProps> = (props) => {
    const {isLaptop, activeNav, handleSmoothScroll} = props
    return (
        <div id='#home' className='flex flex-col items-center w-full h-screen justify-center bg-tahiti-100'>
            <div className='flex flex-col-reverse items-center xl:flex-row w-full xl:w-8/12 gap-5 xl:gap-20'>
                <div className='flex gap-10 xl:gap-5 xl:flex xl:flex-col text-2xl justify-center'>
                    <i className='bx bxl-linkedin text-tahiti-200 hover:text-white ease-in-out duration-300'></i>
                    <i className='uil uil-twitter text-tahiti-200 hover:text-white ease-in-out duration-300'></i>
                    <i className='uil uil-github-alt text-tahiti-200 hover:text-white ease-in-out duration-300'></i>
                </div>
                <div className='flex items-center flex-col justify-center gap-5'>
                    <h1 className='text-2xl xl:text-3xl font-bold text-white'>Maksym Honcharov</h1>
                    <p className='text-sm xl:text-base text-tahiti-200'>Web Developer</p>
                    <p className='text-sm xl:text-base text-tahiti-200'>
                        A results-driven, enthusiastic, creative Web Developer with excellent communication skills,
                        ready to give my best to achieve remarkable outcomes.
                    </p>
                    <StyledLink width='150px' height='50px'> Contact <i className='bx bx-down-arrow-alt'></i></StyledLink>
                </div>
                <div className='flex items-center xl:pl-10'>
                    <HomeImage/>
                </div>
            </div>
            {!isLaptop &&
                <div
                    style={activeNav === "#about" ? {color: '#ff4542'} : {}}
                    onClick={() => handleSmoothScroll("#about")} className='mr-80 mt-24'
                >
                <ScrollDown/>
            </div>}
        </div>
    );
};

export default Home;
