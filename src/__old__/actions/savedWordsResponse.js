export const SAVED_WORDS_RESPONSE = 'SAVED_WORDS_RESPONSE'

export default function savedWordsResponse(savedWords, error) {
  const payload = error || savedWords
  const payloadIsError = !!error

  return {
    type: SAVED_WORDS_RESPONSE,
    payload,
    error: payloadIsError
  }
}
