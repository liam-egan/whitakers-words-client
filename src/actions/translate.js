import translationRequest from './translationRequest'
import translationResponse from './translationResponse'
import getTranslation from '../util/getTranslation'

export default function translate({ words, englishToLatin = false }) {
  return function(dispatch) {
    dispatch(translationRequest({ words }))

    return getTranslation({ words, englishToLatin })
      .then(translation => dispatch(translationResponse({ translation })))
      .catch(error => dispatch(translationResponse({ error })))
  }
}
