import React, {useState, useEffect} from 'react';
import './App.css';
import Home from "./routs/Home";
import Header from "./components/Header";
import About from "./routs/About";
import {useMediaQuery} from "react-responsive";
import {scroller} from "react-scroll";
import Skills from "./routs/Skills";
import Qualification from "./routs/Qualification";
import Portfolio from "./routs/Portfolio";
import Contact from "./routs/Contact";
import ParticlesCon from "./components/ParticlesCon";

function App() {
    const isLaptop = useMediaQuery({query: '(max-width: 1280px)'});
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
            } else if (currentPosition < 2100) {
                setActiveNav("#skills");
            } else if (currentPosition < 2800) {
                setActiveNav("#qualification");
            } else if (currentPosition < 4200) {
                setActiveNav("#portfolio");
            }else {
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
                <ParticlesCon/>
                <About/>
                <Skills/>
                <Qualification/>
                <Portfolio/>
                <Contact/>
            </main>
        </>
    );
}

export default App;
