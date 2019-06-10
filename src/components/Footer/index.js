import React from "react"

import { Section, Title } from "../../styles"

import ContactForm from "../ContactForm"

const Footer = ({ copyrightText }) => {
  return (
    <Section>
      <ContactForm />

      <p>{copyrightText}</p>
    </Section>
  )
}

export default Footer
