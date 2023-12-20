// Determina la máxima cantidad de regalos que Santa puede entregar en una noche sin activar alarmas.

function maxGifts (houses) {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]

  let incluir = houses[0] // Máximo si se incluye la primera casa
  let excluir = 0 // Máximo si se excluye la primera casa

  for (let i = 1; i < houses.length; i++) {
    const temp = incluir
    incluir = Math.max(excluir + houses[i], incluir)
    excluir = Math.max(temp, excluir)
  }

  return Math.max(incluir, excluir)
}

console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)
