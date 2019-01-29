import { TRANSLATION_RESPONSE } from '../actions/translationResponse'
import { SAVED_WORDS_RESPONSE } from '../actions/savedWordsResponse'

export default function error(state = null, action) {
  const { type, payload } = action

  switch (type) {
    case TRANSLATION_RESPONSE: {
      const { error: errorIsPresent } = action

      if (errorIsPresent) {
        return payload
      }

      return state
    }

    case SAVED_WORDS_RESPONSE: {
      const { error: errorIsPresent } = action

      if (errorIsPresent) {
        return payload
      }

      return state
    }

    default:
      return state
  }
}
