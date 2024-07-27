import React from 'react'
import { motion } from "framer-motion";

import {ResumeSection,InfoSection,InfoWrapper,InfoHeading,InfoContainer,Title,Name,Somedetails,SkillSection} from './ResumeStyles'

import Skills from "./Skills";

import {language, framework} from "../../data/resumeData";



const resumeVariant = {
    hidden: {
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            delay: 0.1, duration: 0.4
        }
    }
}

function Resume(){
    
    return(
        <ResumeSection as={motion.div} variants={resumeVariant} initial='hidden' animate='visible' >
            <InfoSection>
                <InfoWrapper>
                    <InfoHeading>Education</InfoHeading>
                    <InfoContainer>
                        <Title>B.Tech Information Technology</Title>
                        <Name>Guru Nanak Dev Engineering College, Ludhiana</Name>
                        <Somedetails>2021 - 2025</Somedetails>
                    </InfoContainer>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoHeading>Experience</InfoHeading>
                    <InfoContainer>
                        <Title>ITJOBXS</Title>
                        <Name>SDE Intern</Name>
                        <Somedetails>
                        1. Worked on the Design and Development part of a fully responsive web page for a particular section of itjobxs.com <br/>
                        2.  Worked on User Verification/Authentication + Engineering challenges of detecting and removing the fake bots and posts.
                        </Somedetails>
                    </InfoContainer>
                </InfoWrapper>
            </InfoSection>

            <SkillSection>
                <Skills title="Languages" contents={language} />
                <Skills title="Framework" contents={framework}/>
            </SkillSection>
            
        </ResumeSection>
    );
}

export default Resume