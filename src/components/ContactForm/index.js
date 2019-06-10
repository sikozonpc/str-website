import React from "react"

import { Container, ExtraInfo, Form, Title, InfoRow } from "./styles"
import { Label, Input, TextArea, ImageContainer, Img } from "../../styles"

import FilesImg from "../../images/undraw_files_6b3d.svg"

const ContactForm = () => {
  return (
    <Container>
      <InfoRow>
        <Title>Trabalhe consco</Title>
        <ExtraInfo>
          Se não gostar de formulários pode nos enviar um email diretamente
        </ExtraInfo>
        <ImageContainer>
          <Img src={FilesImg} />
        </ImageContainer>
      </InfoRow>
      <Form>
        <Label color="black" for="name">
          Nome Completo
        </Label>
        <Input placeholder="Nome completo" type="text" name="name" required />
        <Label color="black" for="email">
          Email
        </Label>
        <Input placeholder="Email" type="email" name="email" required />
        <Label color="black" for="tel">
          Telefone
        </Label>
        <Input
          placeholder="Número de Telefone"
          type="number"
          name="tel"
          required
        />
        <Label color="black" for="tel">
          Assunto
        </Label>
        <TextArea placeholder="Descreva o assunto" required />
      </Form>
    </Container>
  )
}

export default ContactForm
