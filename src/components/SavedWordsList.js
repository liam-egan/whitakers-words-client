import React from 'react'
import styled from 'styled-components'
import { array, func } from 'prop-types'
import SavedWordsItem from './SavedWordsItem'

export default function SavedWordsList(props) {
  const { savedWords, updateWords } = props

  return (
    <List>
      {savedWords.map(saved => (
        <SavedWordsItem
          key={`${saved.words} ${saved.inputLanguage}`}
          words={saved.words}
          inputLanguage={saved.inputLanguage}
          updateWords={updateWords}
        />
      ))}
    </List>
  )
}

SavedWordsList.propTypes = {
  savedWords: array,
  updateWords: func.isRequired
}

SavedWordsList.defaultProps = {
  savedWords: []
}

const List = styled.ul`
  padding: 20px;
`
