import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const AboutBox = styled.div`
  background-color: #1f314f;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  text-align: center;
  padding: 1rem 1.25rem;
  margin: 0.5rem;
  height: 150px;
  width: 200px;

  &:hover {
    background-color: #1c273d;
    transition: 0.3s;
    color: white;
  }
`;
export const InfoDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const AboutIcon = styled.i`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

export const AboutTitle = styled.h3`
    color: white;
`;

export const AboutSubtitle = styled.span`
 font-size: 12px;
  color: #d1d1d1;
`;

export const AboutDescription = styled.div`
  color: #d1d1d1;
  padding: 0;
`;
export const AboutInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;