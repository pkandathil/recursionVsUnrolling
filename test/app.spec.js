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
  it('f(3) = 2', (done) => {
    const result = fibonacci(3)
    expect(result).toEqual(2)
    done()
  })
  it('f(5) = 5', (done) => {
    const result = fibonacci(5)
    expect(result).toEqual(5)
    done()
  })
  it('f(10) = 55', (done) => {
    const result = fibonacci(10)
    expect(result).toEqual(55)
    done()
  })
  it('f(99) = 218922995834555169026', (done) => {
    const result = fibonacci(99)
    expect(result).toEqual(218922995834555169026)
    done()
  })
})