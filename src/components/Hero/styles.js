import styled from "styled-components"

import heroImg from "../../images/hero.jpg"

export const Container = styled.header`
  margin-top: 50px;
  width: 100%;
  height: 110vh;
  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const LeftSide = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0%;
  left: 5%;
`

export const Heading = styled.h2`
  position: absolute;
  top: 30%;
  left: 5%;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px;
`

export const HeadingSecondary = styled.p`
  position: absolute;
  bottom: -10%;
  left: 5%;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 53px;
  color: #fff;
  display: flex;
  flex-flow: column;
`

export const Orcamento = styled.form`
  position: absolute;
  top: 22%;
  right: 5%;
  max-width: 500px;
  display: flex;
  flex-flow: column;
  border-radius: 3px;
  color: #fff;
  background: rgba(69, 67, 153, 0.71);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 50px;
  box-sizing: border-box;
`

export const Title = styled.h3`
  display: inline-block;
  text-align: center;
  position: relative;
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  line-height: 47px;

  ::before {
    content: "";
    width: 100%;

    background: #f8b22a;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0;
  }
`

export const Img = styled.img`
  max-width: 50px;
  margin: 10px auto;
`
