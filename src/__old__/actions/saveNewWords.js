export const SAVE_NEW_WORDS = 'SAVE_NEW_WORDS'

export default function saveNewWords(words, inputLanguage) {
  return {
    type: SAVE_NEW_WORDS,
    payload: {
      words,
      inputLanguage
    }
  }
}
