import styled, { css } from 'styled-components'
import { bool, string } from 'prop-types'

const Button = styled.button`
  font-family: inherit;
  font-size: 1.8rem;
  padding: 0.5em 1em;
  cursor: pointer;
  outline: none;
  border: 2px solid ${determineBorderColor};
  background-color: ${determineBackgroundColor};
  color: ${determineTextColor};
  border-radius: ${determineBorderRadius};

  ${props =>
    props.inverted &&
    css`
      &:hover {
        background-color: ${determineBackgroundColorOnHover};
        color: ${determineTextColorOnHover};
      }
    `};
`

Button.defaultProps = {
  inverted: false,
  rounded: false,
  color: 'primary'
}

Button.propTypes = {
  inverted: bool,
  rounded: bool,
  color: string
}

function determineBackgroundColor(props) {
  const { theme, inverted, color } = props

  if (inverted) {
    return 'transparent'
  }

  return theme.colors[color].background
}

function determineBackgroundColorOnHover(props) {
  const { theme, inverted, color } = props

  if (inverted) {
    return theme.colors[color].background
  }

  return determineBackgroundColor(props)
}

function determineBorderColor(props) {
  const { theme, color } = props

  return theme.colors[color].background
}

function determineTextColor(props) {
  const { theme, inverted, color } = props

  if (inverted) {
    return theme.colors[color].background
  }

  return theme.colors[color].text
}

function determineTextColorOnHover(props) {
  const { theme, inverted, color } = props

  if (inverted) {
    return theme.colors[color].text
  }

  return determineTextColor(props)
}

function determineBorderRadius(props) {
  const { rounded, theme } = props
  const { md } = theme.curves

  if (rounded) {
    return md
  }

  return '0px'
}

export default Button
