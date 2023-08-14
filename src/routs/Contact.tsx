import React from 'react';
import Form from "../components/Form";
import {contactMethods} from "../utils/mock";

const Contact = () => {


    return (
        <div id='#contact'
             className=' flex flex-col items-center pt-24 h-full justify-center bg-tahiti-100 gap-20 pb-20 md:h-screen
             md:pt-0 '>
            <div className='w-screen h-12 flex flex-col items-center justify-center gap-1'>
                <h1 className='text-3xl text-white'>Get in Touch</h1>
                <p className='text-1xl text-tahiti-200'>Contact Me</p>
            </div>
            <div className="flex justify-center w-6/12 flex-wrap gap-20 md:w-full ">
                <div className="flex flex-col items-center gap-5 z-10">
                    <h3 className="text-white text-center text-lg font-medium mb-6">Talk to me</h3>
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-white border border-gray-200 p-4
                            rounded-lg text-center w-72"
                        >
                            <i className={`${method.icon} contact__card-icon text-2xl text-gray-600 mb-1`}></i>
                            <h3 className="text-sm font-medium mb-1">{method.title}</h3>
                            <span className="text-sm text-whiteBlack-400">{method.text}</span>
                            <a href={method.link} className="inline-flex items-center text-sm text-whiteBlack-400"
                               target="_blank"
                               rel="noreferrer">
                                Write me
                                <i className="bx bx-right-arrow-alt  text-sm ml-1 transition-transform duration-300
                                transform"></i>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-5">
                    <h3 className="text-white  text-center text-lg font-medium mb-6">
                        Write me your
                        project/queries
                    </h3>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
