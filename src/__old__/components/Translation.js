import React, { useEffect } from 'react'
import styled from 'styled-components'
import { string, bool, func } from 'prop-types'
import Loading from './Loading'

export default function Translation(props) {
  const { setInputLanguage, inputLanguage } = props

  useEffect(() => {
    setInputLanguage(inputLanguage)
  }, [])

  const { raw, loading } = props

  return loading ? (
    <Loading center="container" />
  ) : (
    <PreFormatted>{raw}</PreFormatted>
  )
}

Translation.propTypes = {
  raw: string,
  loading: bool,
  inputLanguage: string.isRequired,
  setInputLanguage: func.isRequired
}

Translation.defaultProps = {
  raw: '',
  loading: true
}

const PreFormatted = styled.pre`
  display: block;
  padding: 1em;
  font-size: 1.8rem;
  line-height: 1.5em;
  white-space: pre-wrap;
  overflow-y: auto;

  @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`
