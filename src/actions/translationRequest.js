export const TRANSLATION_REQUEST = 'TRANSLATION_REQUEST'

export default function translationRequest({ words }) {
  return {
    type: TRANSLATION_REQUEST,
    payload: {
      words
    }
  }
}
