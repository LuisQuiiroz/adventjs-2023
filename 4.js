function decode (message) {
  function reverseParentheses (content) {
    return content.split('').reverse().join('')
  }
  while (message.includes('(')) { // se ejecuta hasta queno haya parentesis (
    const startIndex = message.lastIndexOf('(') // guardamos el indice el ultimo (
    const endIndex = message.indexOf(')', startIndex) // guardamos el indice el primer )
    const content = message.substring(startIndex + 1, endIndex) // extraemos el contenido entre los indices "(" y ")"
    const reversedContent = reverseParentheses(content) // llamamos a la funcion, para separar, reverse, unir
    message = message.substring(0, startIndex) + reversedContent + message.substring(endIndex + 1) // une el mensaje sin parentesis
  }
  return message // retorna el mensaje sin párentesis
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
