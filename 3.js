function findNaughtyStep (original, modified) {
  const num = Math.max(original.length, modified.length)
  for (let i = 0; i <= num; i++) {
    if (i >= original.length || i >= modified.length || original[i] !== modified[i]) {
      if (original.length < modified.length) return modified[i]
      if (original.length > modified.length) return original[i]
      if (original[i] !== modified[i]) return modified[i]
    }
  }
  return ''
}

const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)) // Debería devolver 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // Debería devolver 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // Debería devolver ''
