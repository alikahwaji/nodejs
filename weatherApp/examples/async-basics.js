console.log('Starting app')

setTimeout(() => {
console.log ('Inside of a callback')
}, 2000);

setTimeout(() => {
    console.log('Another inside a callback')
}, 0)
console.log('Finishing app')