import React from "react";

import { Section, Title } from "../../styles";
import { Description, GalaryContainer, ImgContainer } from "./styles";
import Image from "../../components/image";

const ServicesDisplay = ({ imgs }) => {
    //TODO: add the descrptions
    const galaryImgs = Object.values(imgs).map((img, index) => {
        return (
            <ImgContainer key={index}>
                <Image data={img.childImageSharp.fixed} />
            </ImgContainer>
        );
    });

    return (
        <Section>
            <Title>Serviços</Title>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut .
            </Description>
            <GalaryContainer>{galaryImgs}</GalaryContainer>
        </Section>
    );
};

export default ServicesDisplay;
