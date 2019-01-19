import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './App'

const middlewares = applyMiddleware(thunk)
let store

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(rootReducer, composeEnhancers(middlewares))
} else {
  store = createStore(rootReducer, middlewares)
}

const root = document.getElementById('root')
const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)
render(Root, root)

if (module.hot) {
  module.hot.accept()
}
