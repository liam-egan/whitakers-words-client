import axios from 'axios'
import { LATIN, ENGLISH } from '../constants/languages'

export default async function fetchTranslation(word = '', language = LATIN) {
  if (!word) {
    return {}
  }

  let params = { input: word }

  if (language === ENGLISH) {
    params = { ...params, etl: true }
  }

  const response = await axios.get(process.env.API_URL, {
    params
  })

  const { data } = response.data

  return data
}
