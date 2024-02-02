import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const profileAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/ 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/ 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/ 60% 30% 70% 40%;
  }
`;

const StyledHomeImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgba(253, 253, 253, 0.3);
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  animation: ${profileAnimation} 8s ease-in-out infinite 1s;
  filter: saturate(1);
`;

interface HomeImageProps {
    children?: ReactNode;
}

const HomeImage: React.FC<HomeImageProps> = ({ children }) => {
    return <StyledHomeImage>{children}</StyledHomeImage>;
};

export default HomeImage;
