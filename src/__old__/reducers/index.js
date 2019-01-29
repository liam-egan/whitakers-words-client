import { combineReducers } from 'redux'
import words from './words'
import translation from './translation'
import loading from './loading'
import error from './error'
import savedWords from './savedWords'

const rootReducer = combineReducers({
  words,
  translation,
  loading,
  error,
  savedWords
})

export default rootReducer
