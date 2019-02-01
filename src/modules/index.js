import { combineReducers } from 'redux'
import word from './word'
import translation from './translation'
import loading from './loading'
import errors from './errors'
import savedWords from './savedWords'
import language from './language'

export default combineReducers({
  word,
  translation,
  loading,
  errors,
  savedWords,
  language
})
