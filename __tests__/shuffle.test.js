const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    // Test if shuffle returns an array
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(Array.isArray(shuffled)).toBe(true);
  });

  test('return an array of the same length as the argument', () => {
    // Test if shuffle returns an array of the same length 
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled.length).toBe(arr.length);
  });

});
