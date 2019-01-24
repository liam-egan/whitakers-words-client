import React, { useEffect } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text',
  autoCorrect: 'off',
  autoCapitalize: 'off',
  spellCheck: 'false'
})`
  font-family: inherit;
  font-size: 2rem;
  border: 1px solid ${props => props.theme.colors.borders.background};
  border-radius: ${props => props.theme.curves.md};
  outline: none;
  color: ${props => props.theme.colors.main.text};
  box-shadow: none;
  padding: 0.5em;
  background-color: ${props => props.theme.colors.content.background};
  align-self: flex-start;
`

export default Input
