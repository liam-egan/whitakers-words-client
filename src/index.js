import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules'
import rootSaga from './sagas'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)
let store

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(rootReducer, composeEnhancers(middlewares))
} else {
  store = createStore(rootReducer, middlewares)
}

sagaMiddleware.run(rootSaga)

const root = document.getElementById('root')

render(<App state={store.getState()} />, root)
store.subscribe(() => render(<App state={store.getState()} />, root))
