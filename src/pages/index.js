import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/layout";

import Image from "../components/image";

import SEO from "../components/seo";

const IndexPage = props => (
    <Layout>
        <SEO title="Home" />
        <Hero />
    </Layout>
);

export default IndexPage;

export const imgQuery = graphql`
    query {
        img: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        hero: file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
