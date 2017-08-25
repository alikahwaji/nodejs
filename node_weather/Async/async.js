console.log('Starting app')

setTimeout(() => {
  console.log('Callback')
}, 5000)

setTimeout(() => {
  console.log('Another callback')
}, 0)
console.log('Finishing up')
