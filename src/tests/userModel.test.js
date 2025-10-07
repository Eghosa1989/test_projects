const mongoos = require('mongoose');

//import the function to be tested
const { createUser } = require('../functions/userModel.js');
const { beforeEach } = require('jest-circus');

//test suite
describe('User Model Testing', () => {
    ///AAA pattern- Arrange, Act, Assert
    //jest hooks
    beforeEach(() =>{
        jest.clearAllMocks();
    });
    
    //object literal
    const mockSave = {
        name: "Jeffrey",
        email: "jeffrey.example@gmail.com",
        password: "password123",
        age: 30,
    }
});
