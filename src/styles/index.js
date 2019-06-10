/**
 * Global styles, mixins and mixin functions
 */

import styled, { css } from "styled-components"

/**
 * Global styles
 */

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
`

export const Section = styled.div`
  max-width: 1250px;
  background-color: #fff;
  padding: 40px 0;
  margin: auto;
  text-align: center;
`
// Form stuff
export const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #fff;

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
`
export const Input = styled.input`
  border: 0;
  color: #111;
  padding: 1rem 1.5rem;
  width: 375px;
  height: 35px;
  margin: 0.5rem 0;
  border: 1px solid #ccc;

  border-left: 4px solid var(--color-primary);
  border-radius: 3px;

  :valid {
    border-left: 4px solid green;
  }
`

export const Submit = styled.button`
  border: 0;
  background: #f8b22a;
  color: #fff;
  padding: 1rem 1.5rem;
  max-width: 130px;
  height: 50px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 6px;
`

export const TextArea = styled.textarea`
  border: 0;
  color: #111;
  padding: 1rem 2rem;
  width: 375px;
  border: 1px solid #ccc;
  border-left: 4px solid var(--color-primary);
  border-radius: 3px;

  :valid {
    border-left: 4px solid green;
  }
`
// end of Form Stuff

/**
 * Mixins - to use them ${MixinName} in a styled-component
 */

// Don't forget to add "position: relative" to the parent
export const Underlined = css`
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

export const BoxShadow = css`
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
`
