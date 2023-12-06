// function findFirstRepeated (gifts) {
//   const repeat = {}
//   for (const id of gifts) {
//     if (repeat[id]) return id
//     repeat[id] = 1
//   }
//   return -1
// }

function findFirstRepeated (gifts) {
  const seen = new Set()
  // añade primero el item y después comprueba su tamaño
  // si después de añadir el item, el tamaño es el mismo
  // quiere decir que ese item es el repetido
  return gifts.find(item => seen.size === seen.add(item).size) ?? -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
