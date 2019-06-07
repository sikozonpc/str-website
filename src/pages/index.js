import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Advertiser from "../components/Advertiser";
import ServicesDisplay from "../components/ServicesDisplay";

import Image from "../components/image";

import SEO from "../components/seo";

const IndexPage = props => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Advertiser />
        <ServicesDisplay imgs={props.data} />
    </Layout>
);

export default IndexPage;

export const galaryImageQuery = graphql`
    query {
        one: file(relativePath: { eq: "1.jpg" }) {
            childImageSharp {
                fixed(width: 350, height: 255) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        two: file(relativePath: { eq: "8.jpg" }) {
            childImageSharp {
                fixed(width: 350, height: 255) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        three: file(relativePath: { eq: "5.jpg" }) {
            childImageSharp {
                fixed(width: 350, height: 255) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        four: file(relativePath: { eq: "9.jpg" }) {
            childImageSharp {
                fixed(width: 350, height: 255) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        five: file(relativePath: { eq: "6.jpg" }) {
            childImageSharp {
                fixed(width: 350, height: 255) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        six: file(relativePath: { eq: "388.jpg" }) {
            childImageSharp {
                fixed(width: 350, height: 255) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
