export default function debounce(f, interval = 0) {
  let timer = null

  return function(...args) {
    clearTimeout(timer)

    return new Promise(resolve => {
      timer = setTimeout(() => resolve(f(...args)), interval)
    })
  }
}
