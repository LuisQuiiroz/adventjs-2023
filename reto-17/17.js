function optimizeIntervals (intervals) {
  // ordena los intervalos por su primer elemento
  intervals.sort((a, b) => a[0] - b[0])

  // se asigna el primer elemento
  const mergedIntervals = [intervals[0]]

  for (const currentInterval of intervals) {
    // se asigna el ultimo elemento añadido a mergedIntervals
    const lastMerged = mergedIntervals[mergedIntervals.length - 1]

    if (currentInterval[0] <= lastMerged[1]) {
      // Fusionar intervalos
      lastMerged[1] = Math.max(lastMerged[1], currentInterval[1])
    } else {
      // No hay superposición, agregar el intervalo actual a la lista fusionada
      mergedIntervals.push(currentInterval)
    }
  }

  return mergedIntervals
}

console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]
