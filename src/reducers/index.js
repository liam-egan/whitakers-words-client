import { combineReducers } from 'redux'
import words from './words'
import translation from './translation'
import loading from './loading'
import error from './error'

const rootReducer = combineReducers({
  words,
  translation,
  loading,
  error
})

export default rootReducer
