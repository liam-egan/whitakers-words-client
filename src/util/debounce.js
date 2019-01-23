export default function debounce(f, interval) {
  let timer = null

  return function(...args) {
    clearTimeout(timer)
    return new Promise(resolve => {
      timer = setTimeout(() => resolve(f(...args)), interval)
    })
  }
}