function checkIsValidCopy (original, copy) {
  // Verifica si las longitudes de las cadenas 'original' y 'copy' son diferentes
  // Si son diferentes, no pueden ser copias válidas, por lo que devuelve false
  if (original.length !== copy.length) return false

  // Definición de caracteres permitidos para la comparación
  const deg = '#+:. '

  // Itera a través de cada caracter en las cadenas 'original' y 'copy'
  for (let i = 0; i < original.length; i++) {
    const co = original[i] // Caracter en la posición 'i' de 'original'
    const cc = copy[i] // Caracter en la posición 'i' de 'copy'
    // console.log(co, cc)

    // Verifica si 'co' es un espacio y 'cc' no es un espacio
    // Si es así, 'cc' no puede ser una copia válida de 'co', por lo que devuelve false
    if (co === ' ' && cc !== ' ') {
      // console.log(co, cc)
      return false
    }

    // valida
    // que no sea un espacio,
    // que sean minusculas,
    // que 'co' sea minuscula,
    // que 'cc' sea mayuscula, ya que 'cc' no puede degradar a mayuscula, si no es, está mal
    // que no se incluya 'cc' en las degradaciones(deg)
    // y que no sea un número
    if (cc !== ' ' &&
       co.toLowerCase() === cc.toLowerCase() &&
       co === co.toLowerCase() &&
       cc === cc.toUpperCase() &&
       !deg.includes(cc) &&
       !/\d/.test(cc)
    ) {
      // console.log(co, cc)
      return false
    }

    // Verifica si 'co' y 'cc' no son iguales en minúsculas y no están en 'deg'
    // ya que si son diferentes es porque es una letra o caracter diferente
    if (co.toLowerCase() !== cc.toLowerCase() && !deg.includes(cc)) {
      // console.log(co, cc)
      return false
    }

    // Verifica la posición de los caracteres en 'deg'
    // ya que '.' no puede degradar a '#', pero '#' si puede degradar a '.'
    if (deg.includes(co, cc)) {
      if (deg.indexOf(co) > deg.indexOf(cc)) {
        // console.log(deg.indexOf(co), deg.indexOf(cc))
        return false
      }
    }
  }
  return true
}
console.log(checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
)) // true
console.log(checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
)) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
console.log(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')) // true
console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')) // false
console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')) // true
