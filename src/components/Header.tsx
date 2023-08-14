import React, {FC} from 'react';
import {HeaderProps} from "../interfaces/HeaderProps";
import {mockNavigationItems} from "../utils/mock";
import {GradientText} from "../styles/HeaderStyle";

const Header: FC<HeaderProps> = (props) => {
    const {
        isLaptop,
        toggleBurgerMenu,
        isBurgerMenuOpen,
        activeNav,
        handleSmoothScroll,
    } = props;

    return (
        <div
            className={`bg-tahiti-100 z-10 w-full h-12 text-white flex items-center z-20 ${
                isLaptop ? 'justify-between p-5' : 'justify-around'
            } fixed ${isLaptop ? 'bottom-0' : 'top-0'}`}
        >
            <GradientText>Maksym</GradientText>
            {isLaptop ? (
                <div>
                    <button onClick={toggleBurgerMenu} className="text-white">
                        ☰
                    </button>
                    {isBurgerMenuOpen && (
                        <div className="w-screen z-10 absolute bottom-0 left-0 bg-tahiti-100 h-40 ">
                            <div className="flex flex-wrap w-full h-full bg-white">
                                {mockNavigationItems.map((navItem, index) => (
                                    <div
                                        key={index}
                                        className={`flex w-20 h-20 flex-col w-4/12 items-center justify-center
                                        bg-tahiti-100 hover:text-tahiti-400 cursor-pointer ease-in-out duration-300 
                                        ${activeNav === navItem.nav ? 'text-tahiti-400' : ''}`}
                                        onClick={() => handleSmoothScroll(navItem.nav)}
                                    >
                                        <i className={navItem.icon}></i>
                                        <a
                                            className='font-medium'
                                            href={navItem.nav}
                                        >
                                            {navItem.nav.slice(1).charAt(0).toUpperCase() + navItem.nav.slice(2)}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex  gap-10">
                    {mockNavigationItems.map((navItem, index) => (
                        <a
                            key={index}
                            href={navItem.nav}
                            className={`flex w-20 font-medium flex-col items-center justify-center bg-tahiti-100 
                            hover:text-tahiti-400 ease-in-out duration-300 
                            ${activeNav === navItem.nav ? 'text-tahiti-400' : ''}`}
                            onClick={() => handleSmoothScroll(navItem.nav)}
                        >
                            {navItem.nav.slice(1).charAt(0).toUpperCase() + navItem.nav.slice(2)}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Header;
