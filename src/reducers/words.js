import { TRANSLATION_REQUEST } from '../actions/translationRequest'

export default function words(state = '', action) {
  const { type, payload } = action

  switch (type) {
    case TRANSLATION_REQUEST: {
      const { words } = payload

      return words
    }

    default:
      return state
  }
}
