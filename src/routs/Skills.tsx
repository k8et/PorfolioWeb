import React from 'react';
import {programmingData, toolsData} from "../utils/mock";

const Skills = () => {
    return (
        <div id='#skills'
             className='flex flex-col items-center w-full h-full justify-center bg-tahiti-100 gap-20 md:w-screen p-20 xl:pt-0'>
            <div className='w-screen h-12 flex flex-col items-center justify-center gap-1'>
                <h1 className='text-3xl text-white'>Skills</h1>
                <p className='text-1xl text-tahiti-200'>My Technical level</p>
            </div>
            <div className='flex flex-wrap gap-10  item-center justify-center md:w-screen'>
                <div
                    className='flex flex-col item-center justify-center w-80 h-80 bg-tahiti-500 rounded-3xl gap-5 z-10'>
                    <h1 className='flex text-xl justify-center text-white font-medium'>Languages and technologies</h1>
                    <div className="flex flex-wrap gap-1 item-center justify-center">
                        {programmingData.map((item, index) => (
                            <div key={index} className="flex gap-0.5 w-36 pb-2">
                                <i className="bx bx-badge-check text-base text-white"></i>
                                <div className="flex flex-col">
                                    <h3 className="text-white font-medium">{item.name}</h3>
                                    <span className="text-xs text-tahiti-200 font-medium">{item.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className='flex flex-col item-center justify-center w-80 h-80 bg-tahiti-500 rounded-3xl gap-5 z-10'>
                    <h1 className='flex justify-center text-xl text-white font-medium'>Frameworks, libraries and
                        tools</h1>
                    <div className="flex flex-wrap gap-1 item-center justify-center">
                        {toolsData.map((item, index) => (
                            <div key={index} className="flex gap-0.5 w-36 pb-2">
                                <i className="bx bx-badge-check text-base text-white"></i>
                                <div className="flex flex-col">
                                    <h3 className="text-white font-medium">{item.name}</h3>
                                    <span className="text-xs text-tahiti-200 font-medium">{item.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
