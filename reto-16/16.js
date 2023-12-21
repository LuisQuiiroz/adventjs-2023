function transformTree (tree) {
  const createNode = index => {
    // Verifica si el índice está fuera de rango o el valor es null
    if (index >= tree.length || tree[index] === null) return null

    // Crea un nodo con el valor del array en el índice actual
    const node = {
      value: tree[index],
      // Crea recursivamente los nodos hijos izquierdo y derecho basados en el patrón de índices
      left: createNode(2 * index + 1),
      right: createNode(2 * index + 2)
    }
    return node
  }

  // Llama a la función para crear el nodo raíz del árbol (índice 0)
  const res = createNode(0)
  return res
}

console.log(transformTree([1, 2, 3, 4, 5]))
