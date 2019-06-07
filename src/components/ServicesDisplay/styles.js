import styled from "styled-components";

export const Description = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
    color: #333;
    text-align: left;
    max-width: 1000px;
    margin: 25px auto;
`;

export const GalaryContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;

    margin-top: 50px;
`;

export const ImgContainer = styled.div`
    flex-flow: row wrap;
    width: 30%;
    height: 255px;
    overflow: hidden;
    margin: 10px;
    justify-content: space-between;

    & > * {
        width: 100%;
    }
`;
