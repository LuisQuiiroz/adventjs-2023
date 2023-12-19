function adjustLights (lights) {
  const green = ['🟢', '🔴']
  let toggleGreen = 0
  const red = ['🔴', '🟢']
  let toggleRed = 0
  let i = 0
  for (const light of lights) {
    toggleGreen += green[i % 2] !== light
    toggleRed += red[i % 2] !== light
    i++
  }
  return Math.min(toggleGreen, toggleRed)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)
