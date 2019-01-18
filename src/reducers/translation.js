import { TRANSLATION_RESPONSE } from '../actions/translationResponse'

export default function translation(state = '', action) {
  const { type, payload, error } = action

  switch (type) {
    case TRANSLATION_RESPONSE: {
      if (!error) {
        const { translation } = payload
        return translation
      } else {
        return state
      }
    }

    default:
      return state
  }
}
