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
import {useMediaQuery} from "react-responsive";

const AboutSection = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1243px)' })
    return (
        <AboutContainer>
            <InfoDescription>
                <AboutInfoContainer>
                    <AboutBox>
                        <AboutIcon className='bx bx-award about__icon'></AboutIcon>
                        <AboutTitle>Experience</AboutTitle>
                        <AboutSubtitle>3 years and counting</AboutSubtitle>
                    </AboutBox>
                    <AboutBox>
                        <AboutIcon className='bx bx-briefcase about__icon'></AboutIcon>
                        <AboutTitle>Completed</AboutTitle>
                        <AboutSubtitle>15+ Projects</AboutSubtitle>
                    </AboutBox>
                    <AboutBox>
                        <AboutIcon className='bx bx-support about__icon'></AboutIcon>
                        <AboutTitle>Support</AboutTitle>
                        <AboutSubtitle>Everytime</AboutSubtitle>
                    </AboutBox>
                </AboutInfoContainer>
                <AboutDescription style={{width: !isTabletOrMobile ? '50%' : '80%'}}>
                    I am Maksym Honcharov, a dedicated Frontend Developer with a background in frontend development. My
                    journey in the technology industry commenced in October 2020 when I embarked on the path of Computer
                    Engineering at HTY "KHPI." Since then, I have been unwaveringly committed to refining my programming
                    prowess while actively contributing to a diverse range of stimulating projects.
                </AboutDescription>
                <DownloadBtn/>
            </InfoDescription>
        </AboutContainer>
    );
};

export default AboutSection;
