import React from 'react';
import AboutInfo from "../components/AboutInfo";

const About = () => {
    return (
        <div id='#about' className=' flex flex-col items-center w-full h-full justify-center bg-tahiti-100 gap-20 p-20 md:p-0 md:h-screen'>
            <div className='w-screen h-12 flex flex-col items-center justify-center gap-1'>
                <h1 className='text-3xl text-white'>About me</h1>
                <p className='text-1xl text-tahiti-200'>My introduction</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <AboutInfo/>
            </div>
        </div>
    );
};

export default About;