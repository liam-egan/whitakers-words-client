import axios from 'axios'
import debounce from './debounce'
import memoize from './memoize'
import { LATIN } from '../actions/translateFromLatin'
import { ENGLISH } from '../actions/translateFromEnglish'

const callApi = debounce(axios.get, 350)

export default memoize(async function getTranslation(options) {
  const { words = '', inputLanguage = LATIN } = options

  const params =
    inputLanguage === ENGLISH ? { input: words, etl: true } : { input: words }

  // don't need to make a request to API if there is no input
  if (words === '') {
    return ''
  }

  const { data, error } = await callApi(process.env.API_URL, {
    params
  })

  if (error) {
    throw error
  }

  return data.data
})
