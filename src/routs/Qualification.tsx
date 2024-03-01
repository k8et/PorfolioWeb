import React, {useState} from 'react';
import {tabContent} from "../utils/mock";

const Qualification = () => {
    const [toggleState, setToggleState] = useState<string>('education');
    const toggleTab = (index: string) => {
        setToggleState(index);
    };
    return (
        <div id="#qualification"
             className="flex flex-col items-center w-full h-screen justify-center bg-tahiti-100 gap-20 p-20 md:p-0 md:h-screen">
            <div className='w-screen h-12 flex flex-col items-center justify-center gap-1'>
                <h1 className='text-3xl text-white'>Qualification</h1>
                <p className='text-1xl text-tahiti-200'>My Personal journey</p>
            </div>
            <div>
                <div className="flex justify-center gap-5">
                    <div
                        className={`tab-btn flex items-center text-xl font-medium cursor-pointer text-tahiti-200 
                        transition duration-300 ease-in-out hover:text-white
                             ${toggleState === 'education' ? 'active text-white' : ''}`}
                        onClick={() => toggleTab('education')}
                    >
                        <i className="uil uil-book-reader text-xl mr-1"></i>
                        Education
                    </div>
                    <div
                        className={`tab-btn flex items-center text-xl font-medium cursor-pointer text-tahiti-200
                        transition duration-300 ease-in-out hover:text-white
                             ${toggleState === 'experience' ? 'active text-white' : ''}`}
                        onClick={() => toggleTab('experience')}
                    >
                        <i className="uil uil-briefcase-alt text-xl mr-1"></i>
                        Experience
                    </div>
                </div>
                <div className='h-52 w-full'>
                    {tabContent.map((content, index) => (
                        <div
                            key={index}
                            className={`${
                                toggleState === content.category ? 'active' : 'hidden'
                            } flex ${
                                content.id === 1 || content.id === 3 || content.id === 4 ? 'border-b-2 border-white' : ''
                            }`}
                        >
                            <div className="my-4">
                                <h3 className="text-lg text-white font-medium">{content.title}</h3>
                                <span className="text-base text-tahiti-200">{content.subtitle}</span>
                                <div className="text-sm mt-2 text-tahiti-200">
                                    <i className="uil uil-calendar-alt mr-1"></i>
                                    {content.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Qualification;
