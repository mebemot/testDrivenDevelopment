let numberList = require("../numberList");

test("numberList(1,3) should return '1,2,3.'", () => {
    expect(numberList(1,3)).toMatch("1,2,3.")
})
test("numberList(1,2) should return '1,2.'", () => {
    expect(numberList(1,2)).toMatch("1,2.")
})
test("numberList(5,7) should return '5,6,7.'", () => {
    expect(numberList(5,7)).toMatch("5,6,7.")
})
test("numberList(-1,1) should return '-1,0,1.'", () => {
    expect(numberList(-1,1)).toMatch("-1,0,1.")
})
test("numberList(2,1) should return '2,1.'", () => {
    expect(numberList(2,1)).toMatch("2,1.")
})
test("numberList(1,1) should return '1.'", () => {
    expect(numberList(1,1)).toMatch("1.")
})
test("numberList(one,2) should throw exception ''Please use an integer for the starting number''", () => {
    expect(()=>{numberList('one',2)}).toThrow('Please use an integer for the starting number'); //You must wrap the function in ()=> {} function or the exception gets missed
})