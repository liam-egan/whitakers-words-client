import React from 'react'

export default function App(props) {
  const { state } = props

  return <p>{JSON.stringify(state)}</p>
}
