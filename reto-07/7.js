function drawGift (size, symbol) {
  if (size === 1) return '#' + '\n'
  let gift = ''; const long = size - 2
  gift += ' '.repeat(size - 1) + '#'.repeat(size) + '\n'
  // 1
  for (let i = 0; i < long; i++) {
    gift += ' '.repeat(long - i) + '#' + symbol.repeat(long) + '#' + symbol.repeat(i) + '#' + '\n'
  }

  gift += '#'.repeat(size) + symbol.repeat(long) + '#' + '\n'
  // 3
  for (let i = long; i >= 1; i--) {
    gift += '#' + symbol.repeat(long) + '#' + symbol.repeat(i - 1) + '#' + '\n'
  }

  gift += '#'.repeat(size) + '\n'
  return gift
}

console.log(drawGift(4, '+'))
console.log(drawGift(5, '*'))
console.log(drawGift(1, '^'))
