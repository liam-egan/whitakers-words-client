import { TRANSLATE_FROM_LATIN } from '../actions/translateFromLatin'
import { TRANSLATE_FROM_ENGLISH } from '../actions/translateFromEnglish'

export default function englishToLatin(state = false, action) {
  const { type } = action

  switch (type) {
    case TRANSLATE_FROM_LATIN:
      return false

    case TRANSLATE_FROM_ENGLISH:
      return true

    default:
      return state
  }
}
