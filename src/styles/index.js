import styled from "styled-components";

export const Title = styled.h3`
    display: inline-block;
    text-align: center;
    position: relative;
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 70px;

    ::before {
        content: "";
        width: 100%;
        background: #f8b22a;
        height: 2px;
        position: absolute;
        bottom: 0px;
        left: 0;
    }
`;

export const Section = styled.div`
    max-width: 1250px;
    background-color: #fff;
    padding: 40px 0;
    margin: auto;
    text-align: center;
`;
