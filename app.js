const fibonacci = (inputNumber) => {
  if (inputNumber === 0 || inputNumber === 1) {
    return inputNumber
  }
  const result = fibonacci(inputNumber - 1) + fibonacci(inputNumber - 2)
  return result
}

module.exports = {
  fibonacci
}