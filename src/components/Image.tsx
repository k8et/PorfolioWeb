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

export const HomeImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgba(255, 255, 255, 0.3);
  order: 1;
  justify-content: center;
  width: 300px;
  height: 300px;
  animation: ${profileAnimation} 8s ease-in-out infinite 1s;
  filter: saturate(1);
`;

