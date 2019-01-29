import { SAVED_WORDS_RESPONSE } from '../actions/savedWordsResponse'
import { SAVE_NEW_WORDS } from '../actions/saveNewWords'
import { UNSAVE_WORDS } from '../actions/unsaveWords'

export default function savedWords(state = [], action) {
  const { type, payload, error } = action

  switch (type) {
    case SAVED_WORDS_RESPONSE:
      if (!error) {
        return payload
      } else {
        return state
      }

    case SAVE_NEW_WORDS: {
      const { words, inputLanguage } = payload

      const wordsAlreadySaved = state.some(
        saved => saved.words === words && saved.inputLanguage === inputLanguage
      )

      /**
       * Don't save a word multiple times, so if it already is saved, return
       * the unmodified, already saved words
       */
      if (wordsAlreadySaved) {
        return state
      }

      return state.concat({ words, inputLanguage })
    }

    case UNSAVE_WORDS: {
      const { words, inputLanguage } = payload
      const index = state.findIndex(
        saved => saved.words === words && saved.inputLanguage === inputLanguage
      )

      return state.filter((e, i) => i !== index)
    }

    default:
      return state
  }
}
