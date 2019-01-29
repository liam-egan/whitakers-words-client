import React, { useEffect } from 'react'
import styled from 'styled-components'
import { func, string, bool } from 'prop-types'
import Input from './Input'
import Button from './Button'

export default function Words(props) {
  const {
    words,
    updateWords,
    inputLanguage,
    wordsAreSaved,
    saveWords,
    unsaveWords
  } = props

  useEffect(
    () => {
      updateWords(words, inputLanguage)
    },
    [inputLanguage]
  )

  function handleInputChange(e) {
    updateWords(e.target.value, inputLanguage)
  }

  function handleButtonClick() {
    if (!wordsAreSaved) {
      saveWords(words, inputLanguage)
    } else {
      unsaveWords(words, inputLanguage)
    }
  }

  return (
    <Wrapper>
      <Input value={words} onChange={handleInputChange} />
      <MinWidthButton
        color="lightgrey"
        borders
        rounded
        onClick={handleButtonClick}
        bold={wordsAreSaved}
      >
        {wordsAreSaved ? 'Saved' : 'Save'}
      </MinWidthButton>
    </Wrapper>
  )
}

Words.propTypes = {
  words: string,
  updateWords: func.isRequired,
  inputLanguage: string,
  wordsAreSaved: bool,
  saveWords: func.isRequired,
  unsaveWords: func.isRequired
}

Words.defaultProps = {
  words: '',
  inputLanguage: '',
  wordsAreSaved: false
}

const Wrapper = styled.div`
  display: flex;

  & > * {
    margin: 0 10px;
  }

  & > *:first-child {
    margin-left: 0;
  }

  & > *:last-child {
    margin-right: 0;
  }
`

const MinWidthButton = styled(Button)`
  min-width: 85px;
`
