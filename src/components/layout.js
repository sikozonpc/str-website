/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "../index.css";

import Navbar from "./Navbar";

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Navbar />

                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: `100vw`,
                    }}
                >
                    <main>{children}</main>
                    <footer>
                        STR Eletrodomésticos - Copyright ©{" "}
                        {new Date().getFullYear()} - Todos os direitos
                        reservados
                    </footer>
                </div>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
