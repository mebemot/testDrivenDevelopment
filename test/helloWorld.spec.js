let helloWorld = require("../helloWorld");

test("helloWorld() should return hello world", () => {
  expect(helloWorld()).toMatch("hello world");
});
