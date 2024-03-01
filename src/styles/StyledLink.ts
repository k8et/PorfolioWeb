import styled, {keyframes} from "styled-components";

const gradientAnimation = keyframes`
 0% {
  background-position: 0;
 }
 100% {
  background-position: 400%;
 }
`;


 export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 60px;
  color: white;
  font-size: 24px;
  text-decoration: none;
  font-family: sans-serif;
  box-sizing: border-box;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    animation: ${gradientAnimation} 8s linear infinite;
  }

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: ${gradientAnimation} 8s linear infinite;
  }
`;