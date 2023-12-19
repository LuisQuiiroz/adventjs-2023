function maxDistance (movements) {
  let count = 0; let balance = 0
  for (const mov of movements) {
    if (mov === '>') count++
    if (mov === '<') count--
    if (mov === '*') balance++
  }
  return Math.abs(count) + balance
}

const movements = '>>*<'
const resultado = maxDistance(movements)
console.log(resultado) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
