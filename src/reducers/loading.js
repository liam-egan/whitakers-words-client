import { TRANSLATION_REQUEST } from '../actions/translationRequest'
import { TRANSLATION_RESPONSE } from '../actions/translationResponse'

export default function loading(state = false, action) {
  const { type } = action

  switch (type) {
    case TRANSLATION_REQUEST:
      return true
    case TRANSLATION_RESPONSE:
      return false
    default:
      return state
  }
}
