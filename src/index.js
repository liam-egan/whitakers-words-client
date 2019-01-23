import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import translateSaga from './actions/sagas/translate'
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

sagaMiddleware.run(translateSaga)

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
