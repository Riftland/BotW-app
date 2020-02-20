
const pipe = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x)

const toArray = str => str.split('')
const firstToUpper = ([first, ...rest]) => [first.toUpperCase(), ...rest]
const toStr = arr => arr.join('')

export const capitalize = word =>
  pipe(toArray, firstToUpper, toStr)(word)


  