import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { func, string, bool } from 'prop-types'
import translateFromLatin from '../actions/translateFromLatin'
import translateFromEnglish from '../actions/translateFromEnglish'

function TranslationBox(props) {
  const {
    translateFromLatin,
    translateFromEnglish,
    englishToLatin,
    children
  } = props
  useEffect(
    () => {
      englishToLatin ? translateFromEnglish() : translateFromLatin()
    },
    [englishToLatin]
  )

  return <Translation>{children}</Translation>
}

TranslationBox.propTypes = {
  translateFromLatin: func.isRequired,
  translateFromEnglish: func.isRequired,
  englishToLatin: bool,
  children: string
}

TranslationBox.defaultProps = {
  children: '',
  englishToLatin: false
}

const Translation = styled.pre`
  display: block;
  padding: 1em;
  font-size: 1.8rem;
  line-height: 1.5em;
  white-space: pre-wrap;
  overflow: auto;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`

const mapDispatchToProps = {
  translateFromLatin,
  translateFromEnglish
}

export default connect(
  undefined,
  mapDispatchToProps
)(TranslationBox)
