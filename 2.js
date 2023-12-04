const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
  let pass =[]
  for(const item of gifts){
    let count = 0
    for(const char of item){
      if(materials.includes(char)){
        count++
      }
    }
    if(item.length === count){
      pass.push(item)
    }
  }
  return pass
}

function manufacture2(gifts, materials) {
  return gifts.filter(item => {
    const itemChars = new Set(item);
    return [...itemChars].every(char => materials.includes(char));
  });
}


console.log(manufacture(gifts, materials))
console.log(manufacture2(gifts, materials))
