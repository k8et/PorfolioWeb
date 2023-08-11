import React, { useState, useEffect } from 'react';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { useMediaQuery } from "react-responsive";
import { scroller } from "react-scroll";

function App() {
    const isLaptop = useMediaQuery({ query: '(max-width: 1280px)' });
    const [activeNav, setActiveNav] = useState<string>("#home");
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

    const handleSmoothScroll = (target: string) => {
        scroller.scrollTo(target, {
            smooth: true,
            duration: 500,
        });
        if (isLaptop) {
            setBurgerMenuOpen(false);
        }
    };

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if (currentPosition < 700) {
                setActiveNav("#home");
            } else if (currentPosition < 1400) {
                setActiveNav("#about");
            } else {
                setActiveNav("#contact");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Header isBurgerMenuOpen={isBurgerMenuOpen} handleSmoothScroll={handleSmoothScroll} activeNav={activeNav}
                    toggleBurgerMenu={toggleBurgerMenu} isLaptop={isLaptop}/>
            <main className="main">
                <Home handleSmoothScroll={handleSmoothScroll} activeNav={activeNav} isLaptop={isLaptop}/>
                <About/>
            </main>
        </>
    );
}

export default App;
