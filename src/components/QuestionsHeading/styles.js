import styled, { css } from "styled-components"

export const Container = styled.div`
  background: var(--color-primary);
  padding: 30px 0 10px 0;
  margin: 20px auto;
`
export const Header = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 59px;
  text-align: center;
`
export const Row = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  max-width: 800px;
  margin: 50px auto;
  justify-content: space-between;
`

export const IconContainer = styled.span`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 200px;
  text-decoration: none;
  color: inherit;
  text-align: center;
`
export const Icon = styled.img`
  max-width: 100px;
  color: #fff;
`

export const Description = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 41px;
`
