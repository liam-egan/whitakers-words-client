import React from 'react'
import styled from 'styled-components'
import { string, bool } from 'prop-types'
import Loading from './Loading'

export default function Translation(props) {
  const { raw, loading } = props

  return loading ? (
    <Loading center="container" />
  ) : (
    <PreFormatted>{raw}</PreFormatted>
  )
}

Translation.propTypes = {
  raw: string,
  loading: bool
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
