function cyberReindeer (road, time) {
  let all = road.split('')
  const indices = all.map((e, i) => e === '|' ? i : -1).filter(i => i !== -1)
  const result = []

  result.push(road) // Agregar el estado inicial al resultado

  for (let i = 0; i < time - 1; i++) {
    if (i === 4) {
      all = all.map(b => b === '|' ? '*' : b)
    }
    const trineoIndex = all.indexOf('S')

    if (all[trineoIndex + 1] !== '|') {
      if (indices.includes(trineoIndex)) {
        all[trineoIndex] = '*'
        all[trineoIndex + 1] = 'S'
      } else {
        all[trineoIndex] = '.'
        all[trineoIndex + 1] = 'S'
      }
    }
    result.push(all.join(''))
  }
  return result
}
const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))
