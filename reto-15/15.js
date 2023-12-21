function autonomousDrive (store, movements) {
  let initialPos
  // Encuentra la posición inicial del robot en el almacén
  for (let i = 0; i < store.length; i++) {
    const idx = store[i].indexOf('!')
    if (idx !== -1) {
      initialPos = { x: idx, y: i }
      break
    }
  }

  const start = { ...initialPos }
  const rows = store.length
  const cols = store[0].length

  // Crea una copia del almacén para trabajar con ella
  const robot = store.map(row => row.split(''))
  robot[start.y][start.x] = '.'

  // Define las funciones para mover el robot
  const move = {
    R: () => initialPos.x < cols - 1 && robot[initialPos.y][initialPos.x + 1] !== '*'
      ? initialPos.x += 1
      : null,
    L: () => initialPos.x > 0 && robot[initialPos.y][initialPos.x - 1] !== '*'
      ? initialPos.x -= 1
      : null,
    U: () => initialPos.y > 0 && robot[initialPos.y - 1][initialPos.x] !== '*'
      ? initialPos.y -= 1
      : null,
    D: () => initialPos.y < rows - 1 && robot[initialPos.y + 1][initialPos.x] !== '*'
      ? initialPos.y += 1
      : null
  }

  // Realiza cada movimiento
  for (const moveDir of movements) {
    move[moveDir]()
    if (!initialPos) {
      break // Si el robot no puede moverse más, detiene el bucle
    }
  }

  // Actualiza la posición final del robot en el almacén
  robot[initialPos.y][initialPos.x] = '!'

  return robot.map(row => row.join(''))
}

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/
