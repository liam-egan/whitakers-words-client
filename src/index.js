import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './App'

import translate from './actions/translate'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(_ => console.log(store.getState()))
store.dispatch(translate({ words: 'latin' }))

const root = document.getElementById('root')
render(<App />, root)

if (module.hot) {
  module.hot.accept()
}
