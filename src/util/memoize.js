const cachedFunctions = new Map()

export default function memoize(f) {
  return function(...args) {
    const argumentsKey = args.map(argumentToString).join('___')

    if (cachedFunctions.has(f)) {
      const cachedFunctionResults = cachedFunctions.get(f)

      if (cachedFunctionResults.has(argumentsKey)) {
        return cachedFunctionResults.get(argumentsKey)
      } else {
        const result = f(...args)

        setTimeout(() => {
          cachedFunctionResults.set(argumentsKey, result)
        }, 0)

        return result
      }
    } else {
      const functionResults = new Map()
      const result = f(...args)

      setTimeout(() => {
        functionResults.set(argumentsKey, result)
        cachedFunctions.set(f, functionResults)
      }, 0)

      return result
    }
  }
}

function argumentToString(argument) {
  if (typeof argument === 'object') {
    return JSON.stringify(argument)
  }

  return String(argument)
}
