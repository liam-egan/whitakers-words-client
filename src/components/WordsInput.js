import React, { useEffect } from 'react'
import styled from 'styled-components'
import { func, string } from 'prop-types'

export default function WordsInput(props) {
  const { updateWords, currentWords, inputLanguage, ...restProps } = props

  useEffect(
    () => {
      updateWords(currentWords)
    },
    [inputLanguage]
  )

  function handleWordsChange(e) {
    updateWords(e.target.value)
  }

  return (
    <Input {...restProps} onChange={handleWordsChange} value={currentWords} />
  )
}

WordsInput.propTypes = {
  updateWords: func.isRequired,
  currentWords: string,
  inputLanguage: string.isRequired
}

WordsInput.defaultProps = {
  currentWords: ''
}

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
