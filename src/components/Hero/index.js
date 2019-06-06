import React from "react";
import {
    Container,
    Heading,
    Orcamento,
    Label,
    Input,
    TextArea,
    Submit,
    Title,
    LeftSide,
    Img,
    HeadingSecondary,
} from "./styles";
import down from "../../images/down.svg";

const Hero = () => (
    <Container>
        <LeftSide>
            <Heading>
                Assistência <span className="underlined">técnica</span>,
                <span className="underlined">reparação</span> <br /> de
                eletrodomésticos e outros
            </Heading>
            <HeadingSecondary href="#services">
                Conheça o nosso trabalho
                <Img src={down} />
            </HeadingSecondary>
        </LeftSide>

        <Orcamento>
            <Title>Inicie um Orçamento</Title>
            <Label>Nome*</Label>
            <Input placeholder="Nome" type="text" required />
            <Label>Email*</Label>
            <Input placeholder="Email" type="email" required />
            <Label>Telefone*</Label>
            <Input placeholder="Telefone de contacto" type="number" required />
            <Label>Assunto*</Label>
            <TextArea placeholder="Descreva o assunto" type="text" required />
            <Submit>Enviar</Submit>
        </Orcamento>
    </Container>
);

export default Hero;
