export default async function getTranslation({
  words,
  englishToLatin = false
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('translated')
    }, 1000)
  })
}
