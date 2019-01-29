import { TRANSLATION_REQUEST } from '../actions/translationRequest'
import { TRANSLATION_RESPONSE } from '../actions/translationResponse'
import { SAVED_WORDS_REQUEST } from '../actions/savedWordsRequest'
import { SAVED_WORDS_RESPONSE } from '../actions/savedWordsResponse'

export default function loading(state = false, action) {
  const { type } = action

  switch (type) {
    case TRANSLATION_REQUEST:
    case SAVED_WORDS_REQUEST:
      return true
    case TRANSLATION_RESPONSE:
    case SAVED_WORDS_RESPONSE:
      return false
    default:
      return state
  }
}
