import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(30px);
  }
`;

const StyledSvg = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;
`;

const WheelPath = styled.path`
  fill: none;
  stroke: #d1d1d1;
  stroke-width: 10px;
  animation: ${scrollAnimation} ease 1.5s infinite;
`;

const MousePath = styled.path`
  fill: none;
  stroke: white;
  stroke-width: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;
const Text = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  width: 100px;
`;
const ScrollArrow = styled.i`
  font-size: 1.5rem;
  color: white;
`;

const ScrollDown = () => {
    return (
        <Container>
            <StyledSvg width="30px" height="100%" viewBox="0 0 123.5 195" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <WheelPath id="wheel" d="M61.78,39.8875l0,36.4215" />
                <MousePath id="mouse" d="M118.3585,61.67975c0,-31.2825 -25.3975,-56.67975 -56.68,-56.67975c-31.2825,0 -56.67975,25.39725 -56.67975,56.67975l0,71.718c0,31.2825 25.39725,56.67975 56.67975,56.67975c31.2825,0 56.68,-25.39725 56.68,-56.67975l0,-71.718Z" />
            </StyledSvg>
            <Text className='color'>Scroll down</Text>
            <ScrollArrow className="uil uil-arrow-down home__scroll-arrow"></ScrollArrow>
        </Container>
    );
};

export default ScrollDown;
