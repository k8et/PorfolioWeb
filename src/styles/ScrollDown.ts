import styled, {keyframes} from "styled-components";

const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(30px);
  }
`;

export const StyledSvg = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;
`;

export const WheelPath = styled.path`
  fill: none;
  stroke: #d1d1d1;
  stroke-width: 10px;
  animation: ${scrollAnimation} ease 1.5s infinite;
`;

export const MousePath = styled.path`
  fill: none;
  stroke: white;
  stroke-width: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  cursor: pointer;
`;
export const Text = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  width: 100px;
`;
export const ScrollArrow = styled.i`
  font-size: 1.5rem;
  color: white;
`;