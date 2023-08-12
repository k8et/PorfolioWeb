import React, { useState } from 'react';
import DemoGitHubLink from '../components/DemoGitHubLink';
import {portfolioData, portfolioTabData} from "../utils/mock";
const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div id='#portfolio' className='flex flex-col items-center w-full h-full justify-center bg-tahiti-100 gap-20 pt-20'>
            <div className='w-screen h-12 flex flex-col items-center justify-center gap-1'>
                <h1 className='text-3xl text-white'>Portfolio</h1>
                <p className='text-1xl text-tahiti-200'>Most Recent Project</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='flex gap-5 justify-center'>
                    {portfolioTabData.map((tab, index) => (
                        <button
                            key={index}
                            className={`text-lg px-4 py-2 rounded ${
                                activeTab === tab.button ? 'bg-white text-black' : 'text-white'
                            }`}
                            onClick={() => handleTabChange(tab.button)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-8'>
                    {portfolioData.map((item, index) => (
                        (activeTab === 'all' || activeTab === item.category) && (
                            <div key={index} className='flex flex-col justify-center pl-10 w-80 h-60 bg-tahiti-500 rounded-2xl gap-2'>
                                <img className='w-60 h-36 rounded-2xl' src={item.imageSrc} alt={item.title} />
                                <div>
                                    <h3 className='text-lg text-white'>{item.title}</h3>
                                    <DemoGitHubLink githubLink={item.GitLink} deploymentLink={item.DemoLink} />
                                </div>
                            </div>
                        )
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Portfolio;
