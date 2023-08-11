import React from 'react';
import styled from 'styled-components';
import DownloadBtn from "./DownloadBtn";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const AboutImg = styled.img`
  background: rebeccapurple;
  width: 350px;
  height: 350px;
  border-radius: 1.5rem;

  @media screen and (max-width: 1280px) {
    width: 250px;
    height: 250px;
  }
`;

const AboutBox = styled.div`
  background-color: ${({theme}) => theme.containerColor};
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
const InfoDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const AboutIcon = styled.i`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const AboutTitle = styled.h3`
    color: white;
`;

const AboutSubtitle = styled.span`
 font-size: 12px;
  color: #d1d1d1;
`;

const AboutDescription = styled.div`
  color: #d1d1d1;
  padding: 0;
`;
const AboutInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const AboutSection = () => {
    return (
        <AboutContainer>
            <AboutImg/>
            <InfoDescription>
                <AboutInfoContainer>
                    <AboutBox>
                        <AboutIcon className='bx bx-award about__icon'></AboutIcon>
                        <AboutTitle>Experience</AboutTitle>
                        <AboutSubtitle>1.5 years and counting</AboutSubtitle>
                    </AboutBox>
                    <AboutBox>
                        <AboutIcon className='bx bx-briefcase about__icon'></AboutIcon>
                        <AboutTitle>Completed</AboutTitle>
                        <AboutSubtitle>11 + Projects</AboutSubtitle>
                    </AboutBox>
                    <AboutBox>
                        <AboutIcon className='bx bx-support about__icon'></AboutIcon>
                        <AboutTitle>Support</AboutTitle>
                        <AboutSubtitle>Everytime<br/>(Excluding College hours)</AboutSubtitle>
                    </AboutBox>
                </AboutInfoContainer>
                <AboutDescription>
                    I am Maksym Honcharov, Frontend Developer with a strong foundation in Frontend <br/> development. My
                    journey
                    in the tech industry began in October 2020 when I <br/> embarked on a journey into Computer Engineering at
                    HTY
                    "KHPI." Since then, I've <br/> dedicated myself to honing my programming skills and working on various
                    exciting <br/> projects.
                </AboutDescription>
                <DownloadBtn/>
            </InfoDescription>
        </AboutContainer>
    );
};

export default AboutSection;
