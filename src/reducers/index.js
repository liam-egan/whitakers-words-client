import { combineReducers } from 'redux'
import words from './words'
import translation from './translation'
import loading from './loading'
import error from './error'
import englishToLatin from './englishToLatin'

const rootReducer = combineReducers({
  words,
  translation,
  loading,
  error,
  englishToLatin
})

export default rootReducer
