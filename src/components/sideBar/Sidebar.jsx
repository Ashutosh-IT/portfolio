import React from 'react'
import { motion } from "framer-motion";

import {SideBar,Avtar,AvtarImg,Name,Title,ResumeBtn,SocialLinks,Info,EmailBtn,Icons} from './SidebarStyles'

import dex1 from '../../assets/dex1.jpg'
import tie from '../../assets/icons/tie.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import email from '../../assets/icons/email.svg'
import pin from '../../assets/icons/pin.svg'
import leetcode from '../../assets/icons/leetcode.svg'
import gfg from '../../assets/icons/gfg.svg'

const sideVariant = {
    hidden: {
        x: '-10vh',
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2, duration: 0.7, type: 'spring'
        }
    }
}

function Sidebar(){

    return(
        <SideBar as={motion.div} variants={sideVariant} initial='hidden' animate='visible' >
            <Avtar><AvtarImg src={dex1} alt="avtar"/></Avtar>
            <Name>Ashutosh Kumar</Name>
            <Title>Student • Software Developer • Explorer</Title>

            <ResumeBtn href="resume.pdf" download={"Ashutosh_Kumar_CV.pdf"}><Icons src={tie} alt="tie"/>Download Resume</ResumeBtn>
            <SocialLinks>
                <a href="https://www.geeksforgeeks.org/user/kashu1959la/" target="_blank" rel="noreferrer"><Icons src={gfg} alt="github" /></a>
                <a href="https://github.com/Ashutosh-IT" target="_blank" rel="noreferrer"><Icons src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/ashutoshkumar-it" target="_blank" rel="noreferrer"><Icons src={linkedin} alt="linkedin"/></a>
                <a href="mailto: kashu19march@gmail.com" target="_blank" rel="noreferrer"><Icons src={email} alt="email"/></a>
                <a href="https://leetcode.com/u/ak_ashu9/" target="_blank" rel="noreferrer"><Icons src={leetcode} alt="email"/></a>
            </SocialLinks>

            <Info>
                <div><Icons src={pin} alt="location"/> Punjab, India</div>
                <div>kashu19march@gmail.com</div>
                <div>8264564408</div>
            </Info>
        <EmailBtn href="mailto: kashu19march@gmail.com" target="_blank" rel="noreferrer">Contact Me</EmailBtn>
        </SideBar>
    );
}

export default Sidebar;