export const TRANSLATION_RESPONSE = 'TRANSLATION_RESPONSE'

export default function translationResponse(translation, error) {
  const payload = error || { translation }
  const payloadIsError = !!error

  return {
    type: TRANSLATION_RESPONSE,
    payload,
    error: payloadIsError
  }
}
