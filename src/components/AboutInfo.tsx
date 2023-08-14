import React from 'react';
import {
    AboutContainer,
    AboutBox,
    InfoDescription,
    AboutIcon,
    AboutTitle,
    AboutSubtitle,
    AboutDescription,
    AboutInfoContainer,
} from '../styles/AboutInfoStyle';
import DownloadBtn from "./DownloadBtn";

const AboutSection = () => {
    return (
        <AboutContainer>
            <InfoDescription>
                <AboutInfoContainer>
                    <AboutBox>
                        <AboutIcon className='bx bx-award about__icon'></AboutIcon>
                        <AboutTitle>Experience</AboutTitle>
                        <AboutSubtitle>1.2 years and counting</AboutSubtitle>
                    </AboutBox>
                    <AboutBox>
                        <AboutIcon className='bx bx-briefcase about__icon'></AboutIcon>
                        <AboutTitle>Completed</AboutTitle>
                        <AboutSubtitle>11+ Projects</AboutSubtitle>
                    </AboutBox>
                    <AboutBox>
                        <AboutIcon className='bx bx-support about__icon'></AboutIcon>
                        <AboutTitle>Support</AboutTitle>
                        <AboutSubtitle>Everytime</AboutSubtitle>
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
