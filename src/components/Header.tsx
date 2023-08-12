import React, {FC} from 'react';
import {HeaderProps} from "../interfaces/HeaderProps";
import {mockNavigationItems} from "../utils/mock";

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
            className={`bg-tahiti-100 z-10 w-full h-12 text-white flex items-center ${
                isLaptop ? 'justify-between p-5' : 'justify-around'
            } fixed ${isLaptop ? 'bottom-0' : 'top-0'}`}
        >
            <h3>Maksym</h3>
            {isLaptop ? (
                <div>
                    <button onClick={toggleBurgerMenu} className="text-white">
                        ☰
                    </button>
                    {isBurgerMenuOpen && (
                        <div className="w-screen z-10 absolute bottom-0 left-0 bg-tahiti-100 h-20 ">
                            <div className="flex justify-around">
                                {mockNavigationItems.map((navItem) => (
                                    <div
                                        key={navItem}
                                        className={`flex w-20 h-20 flex-col items-center justify-center bg-tahiti-100 
                                        hover:text-tahiti-400 ease-in-out duration-300 ${
                                            activeNav === navItem ? 'text-tahiti-400' : ''
                                        }`}
                                    >
                                        <i className="uil uil-estate nav__icon"></i>
                                        <a
                                            className='font-medium'
                                            href={navItem}
                                            onClick={() => handleSmoothScroll(navItem)}
                                        >
                                            {navItem.slice(1).charAt(0).toUpperCase() + navItem.slice(2)}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex  gap-10">
                    {mockNavigationItems.map((navItem) => (
                        <a
                            key={navItem}
                            href={navItem}
                            className={`flex w-20 font-medium flex-col items-center justify-center bg-tahiti-100 
                            hover:text-tahiti-400 ease-in-out duration-300 ${
                                activeNav === navItem ? 'text-tahiti-400' : ''
                            }`}
                            onClick={() => handleSmoothScroll(navItem)}
                        >
                            {navItem.slice(1).charAt(0).toUpperCase() + navItem.slice(2)}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Header;
