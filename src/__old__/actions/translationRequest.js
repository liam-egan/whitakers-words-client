export const TRANSLATION_REQUEST = 'TRANSLATION_REQUEST'

export default function translationRequest(words, inputLanguage) {
  return {
    type: TRANSLATION_REQUEST,
    payload: {
      words,
      inputLanguage
    }
  }
}
