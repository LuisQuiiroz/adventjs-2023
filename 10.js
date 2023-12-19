function createChristmasTree (ornaments, height) {
  const tree = []
  let ornamentIndex = 0

  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i)
    const ornamentsLine = Array.from({ length: i }, () => ornaments[ornamentIndex++ % ornaments.length])
    // console.log(ornamentsLine)
    tree.push(`${spaces}${ornamentsLine.join(' ')}`)
  }

  const trunkSpaces = ' '.repeat(height - 1) + '|\n'
  tree.push(trunkSpaces)

  return tree.join('\n')
}

// Ejemplos de uso:
console.log(createChristmasTree('123', 4))
// console.log(createChristmasTree("*@o", 3));

// 0%3  0
// 1%3  1
// 2%3  2
// 3%3  0
// 4%3  1

//  EXPLICACIÓN DE
//  const ornamentsLine = Array.from({ length: i }, () => ornaments[ornamentIndex++ % ornaments.length]);

// 1. { length: i }:

// Esta parte crea un objeto con una propiedad length que se establece en el valor actual de i. En cada iteración del bucle, i representa la altura actual del árbol.

// 2. Array.from():

// Array.from() toma un objeto iterable o similar a un array y crea un nuevo array basado en él. En este caso, crea un nuevo array con una longitud igual al valor de i en la iteración actual.

// 3. () => ornaments[ornamentIndex++ % ornaments.length]:

// Esta es la función de mapeo que se aplica a cada elemento del nuevo array.
// ornaments[ornamentIndex++ % ornaments.length] selecciona un adorno de la cadena ornaments para cada posición del nuevo array.

// Ahora, veamos un ejemplo para entender cómo funciona esta línea:

// Supongamos que ornaments es la cadena "123" y estamos en la tercera iteración del bucle (altura i = 3). En este punto, ornamentIndex es 0 (ya que es el comienzo del bucle) y se crea la línea de adornos para esta altura.

// En la primera posición del nuevo array (posición 0), ornamentIndex % ornaments.length es 0 % 3, que es 0, por lo que seleccionamos el primer carácter de ornaments, que es "1".
// En la segunda posición (posición 1), ornamentIndex % ornaments.length es 1 % 3, que es 1, por lo que seleccionamos el segundo carácter de ornaments, que es "2".
// En la tercera posición (posición 2), ornamentIndex % ornaments.length es 2 % 3, que es 2, por lo que seleccionamos el tercer carácter de ornaments, que es "3".
// Esto crea una línea de adornos para esa altura del árbol. La selección de adornos sigue este patrón cíclico en función del índice actual y la longitud de la cadena de adornos.

// Esta línea de código se repite en cada iteración del bucle, generando las líneas de adornos para cada nivel del árbol de Navidad.

// Cabe mencionar que ornamentIndex aumenta una vez que se haya seleccionado el elemento(adorno), es decir, primero hace esto:
// ornaments[ornamentIndex++ % ornaments.length]
// y después aumenta su indice: ornamentIndex++

// Entonces, para clarificarlo:

// ornaments[ornamentIndex++ % ornaments.length] selecciona un adorno de la cadena ornaments en la posición determinada por ornamentIndex.

// Después de seleccionar el adorno en esa posición, ornamentIndex++ aumenta el valor de ornamentIndex en 1 para la siguiente iteración o para la siguiente posición en el array.

// Es importante notar que el operador ++ después de ornamentIndex (ornamentIndex++) indica un incremento posterior, lo que significa que primero se utiliza el valor actual de ornamentIndex y luego se incrementa después de usarlo en la expresión.

// Este enfoque asegura que se seleccione cada adorno en secuencia y, después de usarlo, se avance al siguiente adorno en la cadena ornaments.
