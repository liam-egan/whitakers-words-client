import translationRequest from './translationRequest'

export const TRANSLATE_FROM_ENGLISH = 'TRANSLATE_FROM_ENGLISH'
export const ENGLISH = 'ENGLISH'

export default function translateFromEnglish(words) {
  return translationRequest(words, ENGLISH)
}
