// Esta función calcula el tiempo total de las entregas y devuelve el tiempo en formato hh:mm:ss
function calculateTime (deliveries) {
  // El objeto 'signo' se usa para determinar el signo del tiempo total
  const signo = { true: '-', false: '' }

  // Se inicializa el tiempo en 7 horas (7 * 3600 segundos)
  let time = 7 * 3600

  // Se recorren las entregas sumando o restando el tiempo correspondiente
  for (const delivery of deliveries) {
    // Se separan las horas, minutos y segundos de cada entrega
    const [hours, minutes, seconds] = delivery.split(':')
    // Se resta el tiempo de la entrega al tiempo total
    time += -hours * 3600 - minutes * 60 - seconds
  }

  // Se verifica si el tiempo total es positivo
  const bool = time > 0
  time = Math.abs(time) // Se obtiene el valor absoluto del tiempo total

  // Se calculan las horas, minutos y segundos del tiempo total
  const seconds = time % 60
  const minutes = Math.trunc(time / 60) % 60
  const hours = (Math.trunc(time / 60) - minutes) / 60

  // Se forma la cadena con el tiempo formateado en hh:mm:ss
  const formatedTime =
    `${hours}`.padStart(2, '0') +
    ':' +
    `${minutes}`.padStart(2, '0') +
    ':' +
    `${seconds}`.padStart(2, '0')

  // Se retorna el tiempo total con el signo correspondiente
  return signo[bool] + formatedTime
}
calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'
