function organizeGifts (gifts) {
  let pedido = ''
  gifts.match(/\d+[a-zA-Z]/g).forEach(grupo => {
    const cantidad = grupo.match(/\d+/)[0]
    const tipo = grupo.match(/[a-zA-Z]+/)[0]
    const cajas = Math.floor(cantidad / 50)
    const pales = Math.floor((cantidad % 50) / 10)
    const bolsas = cantidad % 10
    pedido += `[${tipo}]`.repeat(cajas)
    pedido += `{${tipo}}`.repeat(pales)
    if (bolsas > 0) { pedido += '(' + `${tipo}`.repeat(bolsas) + ')' }
  })
  return pedido
}

const result1 = organizeGifts('176a11b')
// '[a]{a}{a}(aaaaaa){b}(b)'
console.log(result1)
