import translationRequest from './translationRequest'

export const TRANSLATE_FROM_LATIN = 'TRANSLATE_FROM_LATIN'
export const LATIN = 'LATIN'

export default function translateFromLatin(words) {
  return translationRequest(words, LATIN)
}
