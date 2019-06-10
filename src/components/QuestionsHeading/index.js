import React from "react"
import {
  Container,
  Header,
  Row,
  IconContainer,
  Icon,
  Description,
} from "./styles"

// SVGs
import Phone from "../../images/small-phone.svg"
import Email from "../../images/email.svg"

const QuestionsHeading = () => {
  return (
    <div>
      <Container>
        <Header>Têm duvidas ? Contacte-nos</Header>
        <Row>
          <IconContainer>
            <Icon src={Phone} />
            <Description>911 000 000</Description>
          </IconContainer>
          <IconContainer>
            <Icon src={Email} />
            <Description>emil@gmail.com</Description>
          </IconContainer>
        </Row>
      </Container>
    </div>
  )
}

export default QuestionsHeading
