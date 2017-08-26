var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('a and b must be numbers')
      }
    }, 2000)
  })
}

asyncAdd(5, 11).then((res) => {
  console.log('Reslut:', res)
  return asyncAdd(res, 50)
}).then((res) => {
  console.log('Result1 : ', res)
}).catch((errorMessage) => {
  console.log(errorMessage)
})

// var test = new Promise((resolve, rejecct) => {
//   setTimeout(() => {
//     resolve('Welcome')
//   }, 3000)
// })

// test.then((message) => {
//   console.log('Print: ', message)
// }, (errorMessage) => {
//   console.log('Error', errorMessage)
// })
