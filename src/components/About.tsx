import React from 'react';
import AboutInfo from "./AboutInfo";
import DownloadBtn from "./DownloadBtn";

const About = () => {
    return (
        <div id='#about' className=' flex flex-col items-center w-full h-screen justify-center bg-tahiti-100 gap-10'>
            <div className='w-screen h-12 flex flex-col items-center justify-center '>
                <h1 className='text-3xl text-tahiti-200'>About me</h1>
                <p className='text-1xl text-tahiti-200'>My introduction</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <AboutInfo/>
            </div>
        </div>
    );
};

export default About;