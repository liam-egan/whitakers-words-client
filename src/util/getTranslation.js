import axios from 'axios'

const callApi = debounce(axios.get, 250)

export default async function getTranslation({
  words,
  englishToLatin = false
}) {
  const params = englishToLatin
    ? { input: words, etl: englishToLatin }
    : { input: words }

  const { data } = await callApi(API_URL, {
    params
  })
  return data.data.raw
}

function debounce(f, interval) {
  let timer = null

  return (...args) => {
    clearTimeout(timer)
    return new Promise(resolve => {
      timer = setTimeout(() => resolve(f(...args)), interval)
    })
  }
}
