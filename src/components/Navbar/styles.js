import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const NavbarContainer = styled.nav`
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: #f0f0f0;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 0;
    z-index: 1000;
    box-shadow: 0.1px 1px 4px 0 #e7eeef;
    transition: 0.4s height;
    box-sizing: border-box;
    top: 0;

    ${props =>
        props.shrink &&
        css`
            height: 70px;
        `}
`;

export const LogoContainer = styled(Link)`
    max-width: 230px;
    max-height: 80px;
    text-decoration: none;

    ${props =>
        props.shrink &&
        css`
            height: 60px;
        `}
`;
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    margin: 0;
    transition: 0.2s height;
`;

export const NavList = styled.ul`
    list-style: none;
    color: #000;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
`;

export const NavItem = styled.li`
    margin: 0;
    padding: 0;
    transition: 0.2s all;

    :hover {
        color: var(--color-primary);
    }
`;

export const NavLink = styled(Link)`
    color: inherit;
    font-size: 18px;
    font-style: normal;
    line-height: 28px;
    text-decoration: none;
    margin: 1rem 2rem;
    text-transform: uppercase;
`;

export const Telm = styled.div`
    max-width: 280px;
    display: flex;
    flex-flow: row;
    align-items: center;
`;
export const TelmImg = styled.img`
    display: inline-block;
    margin: 0;
    margin-right: 20px;
    width: 65px;
`;
export const Number = styled.div`
    display: inline-block;
    color: #000;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
`;
