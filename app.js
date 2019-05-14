const fibonacci = (inputNumber) => {
  if (inputNumber === 0 || inputNumber === 1) {
    return inputNumber
  }
  const resultContainer = {
    0: 0,
    1: 1
  }
  for(let index = 0; index <= inputNumber; index++) {
    if(index in resultContainer) {
      continue;
    } else {
      resultContainer[index] = resultContainer[index-1] + resultContainer[index - 2]
    }
  }
  return resultContainer[inputNumber]
}

module.exports = {
  fibonacci
}