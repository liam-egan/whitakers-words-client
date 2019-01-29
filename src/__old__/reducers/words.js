import { TRANSLATION_REQUEST } from '../actions/translationRequest'

export default function words(state = '', action) {
  const { type, payload } = action

  switch (type) {
    case TRANSLATION_REQUEST:
      return payload.words

    default:
      return state
  }
}
