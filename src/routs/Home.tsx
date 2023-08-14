import React, {FC} from 'react';
import {HomeImage} from '../components/Image';
import ScrollDown from "../components/ScrollDown";
import {HomeProps} from "../interfaces/HomeProps";
import StyledLink from "../components/StyledLink";
import Send from "../assets/svg/send";
// @ts-ignore
import img from "../assets/img/кот.jpg"
import {GITHUB, LINKEDIN, TELEGRAM} from "../utils/links";


const Home: FC<HomeProps> = (props) => {
    const {isLaptop, activeNav, handleSmoothScroll} = props
    return (
        <div id='#home'
             className='flex flex-col items-center w-full h-full justify-center bg-tahiti-100 p-20 md:p-0 md:h-screen z-10'>
            <div className='flex flex-col-reverse items-center xl:flex-row w-full xl:w-8/12 gap-5 xl:gap-20'>
                <div className='flex gap-10 xl:gap-5 xl:flex xl:flex-col text-2xl justify-center'>
                    <a href={LINKEDIN} target="_blank" rel="noreferrer">
                        <i className='bx bxl-linkedin text-tahiti-200 hover:text-white ease-in-out duration-300'></i>
                    </a>
                    <a href={TELEGRAM} target="_blank" rel="noreferrer">
                        <i className='bx bxl-telegram text-tahiti-200 hover:text-white ease-in-out duration-300'></i>
                    </a>
                    <a href={GITHUB} target="_blank" rel="noreferrer">
                        <i className='uil uil-github-alt text-tahiti-200 hover:text-white ease-in-out duration-300'></i>
                    </a>
                </div>
                <div className='flex items-center flex-col justify-center gap-5'>
                    <h1 className='text-2xl xl:text-3xl font-bold text-white'>
                        Maksym Honcharov
                    </h1>
                    <p className='text-sm xl:text-base text-tahiti-200'>
                        Web Developer
                    </p>
                    <p className='text-sm xl:text-base text-tahiti-200'>
                        A results-driven, enthusiastic, creative Web Developer with excellent communication skills,
                        ready to give my best to achieve remarkable outcomes.
                    </p>
                    <StyledLink width='150px' height='50px' onClick={() => handleSmoothScroll("#contact")}> Contact <Send/></StyledLink>
                </div>
                <div className='flex items-center xl:pl-10'>
                    <HomeImage backgroundImage={img}/>
                </div>
            </div>
            {!isLaptop &&
                <div
                    style={activeNav === "#about" ? {color: '#ff4542'} : {}}
                    onClick={() => handleSmoothScroll("#about")} className='mr-80 mt-24'
                >
                    <ScrollDown/>
                </div>
            }
        </div>
    );
};

export default Home;