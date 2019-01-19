import styled from 'styled-components'

const WordsBox = styled.input.attrs({
  type: 'text',
  autoCorrect: 'off',
  autoCapitalize: 'off',
  spellCheck: 'false'
})`
  font-family: inherit;
  font-size: 2rem;
  border: 1px solid;
  border-color: #c6c6c6;
  border-radius: ${props => props.theme.curves.md};
  outline: none;
  color: rgba(68, 68, 68, 0.75);
  box-shadow: none;
  padding: 0.5em;
  background-color: #fafafa;
  transition: all 200ms ease-out;
  resize: none;
`

export default WordsBox
