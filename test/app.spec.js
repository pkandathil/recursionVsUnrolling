const { fibonacci } = require('../app')

describe('Fibonacci', () => {
  it('f(0) = 0', (done) => {
    const result = fibonacci(0)
    expect(result).toEqual(0)
    done()
  })
  it('f(1) = 1', (done) => {
    const result = fibonacci(1)
    expect(result).toEqual(1)
    done()
  })
})