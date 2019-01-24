import React from 'react'
import styled from 'styled-components'
import { string, func } from 'prop-types'
import { Link } from 'react-router-dom'
import { ENGLISH } from '../actions/translateFromEnglish'

export default function SavedWordsItem(props) {
  const { words, inputLanguage, updateWords } = props
  const linkHref = inputLanguage === ENGLISH ? '/english' : '/latin'
  const displayLanguage = inputLanguage === ENGLISH ? 'English' : 'Latin'

  function handleLinkClick() {
    updateWords(words, inputLanguage)
  }

  return (
    <Item>
      <WordsLink to={linkHref} onClick={handleLinkClick}>
        <Words>{words}</Words>
        <Language>({displayLanguage})</Language>
      </WordsLink>
    </Item>
  )
}

SavedWordsItem.propTypes = {
  words: string.isRequired,
  inputLanguage: string.isRequired,
  updateWords: func.isRequired
}

const Item = styled.li`
  font-size: 1.5rem;
  display: list-item;
`

const WordsLink = styled(Link)`
  font-size: 2rem;
  font-family: inherit;
  color: inherit;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`

const Words = styled.span`
  display: inline-block;
  min-width: 10em;
`

const Language = styled.span``
