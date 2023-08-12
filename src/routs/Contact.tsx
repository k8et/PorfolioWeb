import React from 'react';
import StyledLink from "../components/StyledLink";
import Send from "../assets/svg/send";

const Contact = () => {


    return (
        <div id='#contact' className=' flex flex-col items-center pt-24 h-full justify-center bg-tahiti-100 gap-20 pb-20 md:h-screen md:pt-0 '>
            <div className='w-screen h-12 flex flex-col items-center justify-center gap-1'>
                <h1 className='text-3xl text-white'>Get in Touch</h1>
                <p className='text-1xl text-tahiti-200'>Contact Me</p>
            </div>
            <div className="flex justify-center w-6/12 flex-wrap gap-20 md:w-full ">
                <div className="flex flex-col items-center gap-5">
                    <h3 className="text-white text-center text-lg font-medium mb-6">Talk to me</h3>
                    <div
                        className="flex flex-col items-center justify-center bg-white border border-gray-200 p-4 rounded-lg text-center w-72">
                        <i className="bx bx-mail-send contact__card-icon text-2xl text-gray-600 mb-1"></i>
                        <h3 className="text-sm font-medium mb-1">Email</h3>
                        <span className="text-sm">mxmgnchrv@gmail.com</span>
                        <a
                            href="mailto:mxmgnchrv@gmail.com"
                            className="inline-flex items-center text-sm"
                            target="_blank"
                        >
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon text-sm ml-1 transition-transform duration-300 transform"></i>
                        </a>
                    </div>

                    <div
                        className="flex flex-col items-center justify-center bg-white border border-gray-200 p-4 rounded-lg text-center w-72">
                        <i className="bx bxl-whatsapp contact__card-icon text-2xl text-gray-600 mb-1"></i>
                        <h3 className="text-sm font-medium mb-1">WhatsApp</h3>
                        <span className="text-sm">+380685339687</span>
                        <a
                            href="https://api.whatsapp.com/send?phone=918103548618&text=Hello, more information!"
                            className="inline-flex items-center text-sm"
                            target="_blank"
                        >
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon text-sm ml-1 transition-transform duration-300 transform"></i>
                        </a>
                    </div>

                    <div
                        className="flex flex-col items-center justify-center bg-white border border-gray-200 p-4 rounded-lg text-center w-72">
                        <i className="bx bxl-telegram contact__card-icon text-2xl text-gray-600 mb-1"></i>
                        <h3 className="text-sm font-medium mb-1">Telegram</h3>
                        <span className="text-sm">@mxmgnchrv</span>
                        <a
                            href="https://t.me/mxmgnchrv"
                            className="inline-flex items-center text-sm"
                            target="_blank"
                        >
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon text-sm ml-1 transition-transform duration-300 transform"></i>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-5">
                    <h3 className="text-white  text-center text-lg font-medium mb-6">
                        Write me your
                        project/queries</h3>
                    <form className='flex flex-col gap-8 items-center md:items-start'>
                        <div className="h-16 w-72">
                            <label className='text-tahiti-200'>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="text-tahiti-200 w-full h-full border border-gray-300 bg-transparent px-6 py-4 rounded-lg"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="h-16 w-72">
                            <label className='text-tahiti-200'>
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="text-tahiti-200 w-full h-full border border-gray-300 bg-transparent px-6 py-4 rounded-lg"
                                placeholder="Insert your email"
                            />
                        </div>

                        <div className="mb-1 h-40 w-72">
                            <label className='text-tahiti-200'>
                                Query
                            </label>
                            <textarea
                                name="query"
                                className="text-tahiti-200 w-full h-full border border-gray-300 bg-transparent px-6 py-4 rounded-lg"
                                placeholder="Enter your query/request here"
                            ></textarea>
                        </div>
                        <StyledLink width='200px' height='50px'> Send Message <Send/></StyledLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
