export const UNSAVE_WORDS = 'UNSAVE_WORDS'

export default function unsaveWords(words, inputLanguage) {
  return {
    type: UNSAVE_WORDS,
    payload: {
      words,
      inputLanguage
    }
  }
}
