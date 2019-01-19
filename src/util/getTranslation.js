import axios from 'axios'

export default async function getTranslation({
  words,
  englishToLatin = false
}) {
  const params = englishToLatin
    ? { input: words, etl: englishToLatin }
    : { input: words }

  const { data } = await axios.get('API_URL', {
    params
  })

  return data.data.raw
}
