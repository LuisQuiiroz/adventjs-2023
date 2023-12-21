function drawClock (time) {
  const digits = [
    [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*']
    ],
    [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*']
    ],
    [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*']
    ]
  ]

  // Separar la hora de los minutos
  const [hour, minute] = time.split(':')

  // Obtener la representación de los dígitos para las horas y los minutos
  const hourDigits = hour.padStart(2, '0').split('').map(d => digits[Number(d)])
  const minuteDigits = minute.padStart(2, '0').split('').map(d => digits[Number(d)])

  // Matriz para representar el reloj
  const clockMatrix = Array(7).fill(0).map(() => Array(17).fill(' '))

  // Función para insertar dígitos en la matriz del reloj
  const insertDigit = (digit, colOffset) => {
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 3; col++) {
        clockMatrix[row][col + colOffset] = digit[row][col]
      }
    }
  }

  // Insertar los dígitos de la hora en la matriz del reloj
  insertDigit(hourDigits[0], 0)
  insertDigit(hourDigits[1], 4)
  insertDigit(minuteDigits[0], 10)
  insertDigit(minuteDigits[1], 14)

  // Insertar los dos puntos
  clockMatrix[2][8] = '*'
  clockMatrix[4][8] = '*'

  return clockMatrix
}
console.log(drawClock('01:30'))
