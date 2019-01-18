import { TRANSLATION_RESPONSE } from '../actions/translationResponse'

export default function error(state = null, action) {
  const { type, payload } = action

  switch (type) {
    case TRANSLATION_RESPONSE: {
      const { error: thrownError } = action

      if (thrownError) {
        return payload
      }

      return state
    }

    default:
      return state
  }
}
