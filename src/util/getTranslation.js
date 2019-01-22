import axios from 'axios'
import { LATIN } from '../actions/translateFromLatin'
import { ENGLISH } from '../actions/translateFromEnglish'

const callApi = debounce(axios.get, 250)

export default async function getTranslation(options) {
  const { words = '', inputLanguage = LATIN } = options

  const params =
    inputLanguage === ENGLISH ? { input: words, etl: true } : { input: words }

  const { data, error } = await callApi(process.env.API_URL, {
    params
  })

  if (error) {
    throw error
  }

  return data.data
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
