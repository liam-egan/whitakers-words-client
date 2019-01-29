import React from 'react'
import styled, { keyframes } from 'styled-components'
import { string } from 'prop-types'

export default function Loading(props) {
  const { className, center } = props

  return (
    <LoadingWrapper className={className} center={center}>
      <LoadingBubble bubbleOrder={3} />
      <LoadingBubble bubbleOrder={2} />
      <LoadingBubble bubbleOrder={1} />
    </LoadingWrapper>
  )
}

Loading.defaultProps = {
  className: '',
  center: ''
}

Loading.propTypes = {
  className: string,
  center: string
}

const bounce = keyframes`
  from, to {
    transform: scale(0)
  }

  50% {
    transform: scale(1);
  }
`

const LoadingWrapper = styled.div`
  ${props =>
    props.center === 'page'
      ? 'top: calc(50vh - 10px); left: calc(50vw - 30px);'
      : props.center === 'container'
      ? 'top: calc(50% - 10px); left: calc(50% - 30px);'
      : ''}
  ${props =>
    props.center === 'page'
      ? 'position: fixed;'
      : props.center === 'container'
      ? 'position: absolute;'
      : ''}
`

const LoadingBubble = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #444;
  border-radius: 50%;
  animation: ${bounce} 1250ms ease-in-out infinite;
  animation-delay: ${props => props.bubbleOrder * -150}ms;
`
