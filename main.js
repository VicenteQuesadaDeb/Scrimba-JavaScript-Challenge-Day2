function addTwoDigits(num)  {
    //  write code here.
    //parse a number to string and create an array with the digits as elements
    const array = num.toString().split("")
    //parse the numbers (string elements) as int
    const firstNumber = parseInt(array[0])
    const secondNumber = parseInt(array[1])    
    //sum both numbers
    return firstNumber + secondNumber

}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('take a two digit number and return the sum of their numbers', () => {
       // arrange
        const num = 29;
        
        // act
        const result = addTwoDigits(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(11);
    });
});