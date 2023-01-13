const mathOperations = ('./Exercise5.4.js')

  test('testing mathoperation function', () =>{
    expect(sum(1,2)).toBe(3)
    expect(diff(2,2)).toBe(0)
    expect(product(1,2)).toBe(2)
})

// to run the testing file (npm init -y) and npm i jest to install node modules and jest 