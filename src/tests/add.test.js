const { add } = require('../functions/add');

//this is a test case
test('Adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
    
    
});