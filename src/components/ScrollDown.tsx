import React from 'react';
import {Container, MousePath, ScrollArrow, StyledSvg, Text, WheelPath} from "../styles/ScrollDown";

const ScrollDown = () => {
    return (
        <Container>
            <StyledSvg width="30px" height="100%" viewBox="0 0 123.5 195" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <WheelPath id="wheel" d="M61.78,39.8875l0,36.4215"/>
                <MousePath id="mouse"
                           d="M118.3585,61.67975c0,-31.2825 -25.3975,-56.67975 -56.68,-56.67975c-31.2825,0 -56.67975,
                           25.39725 -56.67975,56.67975l0,71.718c0,31.2825 25.39725,56.67975 56.67975,56.67975c31.2825,
                           0 56.68,-25.39725 56.68,-56.67975l0,-71.718Z"/>
            </StyledSvg>
            <Text className='color'>Scroll down</Text>
            <ScrollArrow className="uil uil-arrow-down home__scroll-arrow"></ScrollArrow>
        </Container>
    );
};

export default ScrollDown;
