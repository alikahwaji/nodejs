console.log('Starting Notes')

// console.log(module)

module.exports.addNote = () => {
  console.log('Added Note')
  return 'New Note'
}

module.exports.addNumbers = (a, b) => {
  console.log('Adding two numbers')
  return a + b
}

module.exports.subNumbers = (a, b) => {
  console.log('Sub numbers')
  return a - b
}

module.exports.divNumbers = (a, b) => {
  console.log('Div numbers')
  return a / b
}

module.exports.multiNumbers = (a, b) => {
  console.log('Multi numbers')
  return a * b
}
