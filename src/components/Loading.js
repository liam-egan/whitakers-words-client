import React from 'react'
import styled, { keyframes } from 'styled-components'
import { string } from 'prop-types'

export default function Loading(props) {
  const { className } = props

  return (
    <LoadingWrapper className={className}>
      <LoadingBubble order={3} />
      <LoadingBubble order={2} />
      <LoadingBubble order={1} />
    </LoadingWrapper>
  )
}

Loading.defaultProps = {
  className: ''
}

Loading.propTypes = {
  className: string
}

const bounce = keyframes`
  from, to {
    transform: scale(0)
  }

  50% {
    transform: scale(1);
  }
`

const LoadingWrapper = styled.div``

const LoadingBubble = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #444;
  border-radius: 50%;
  animation: ${bounce} 1250ms ease-in-out infinite;
  animation-delay: ${({ order }) => order * -150}ms;
`
