/* Problem Solving Problems */


// FizzBuzz
function fizzBuzz(startNumber, endNumber){
    for(let i = startNumber; i <= endNumber; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
//fizzBuzz(0,100);


// Reverse a String
function reverseString(stringToReverse){
    let reversedString = "";
    
    for(let i = (stringToReverse.length - 1); i >= 0; i--){
        reversedString += stringToReverse[i];
    }
    console.log(reversedString);
}
let stringToReverse = "Hello World!"
//reverseString(stringToReverse);


//Capitalize Letter
function capitalizeLetter(string){
    let modifiedString = "";
    modifiedString += string[0].toUpperCase();
    for(let i = 1; i < string.length; i++){
        if(string[i-1] === " "){
            modifiedString += string[i].toUpperCase();
        }
        else{
            modifiedString += string[i];
        }
    }
    console.log(modifiedString);
}
//capitalizeLetter("hello world");


// Compress a string of character
function compressString(string){
    let currentChar = "";
    let charCount = 0;
    let compressedString = "";
    for(let i = 0; i < string.length; i++){
        if(currentChar === string[i]){
            charCount++;
        }
        else{
            if(charCount > 0){
                compressedString += charCount;
                compressedString += currentChar;
                charCount = 0;
            }
            currentChar = string[i];
            charCount = 1;
        }
        if(i === string.length - 1){
            compressedString += charCount;
            compressedString += currentChar;
        }
    }
    console.log(compressedString);
}
//compressString("abbcccddddeeeee");


// Check if two phrases are palindromes
function isPalindrome(phraseToCheck){
    let serializedPhrase = phraseToCheck.toLowerCase().replace(/\s/g, '');
    for(let i = 0; i < Math.round(serializedPhrase.length/2); i++){
        console.log(i);
        if(serializedPhrase[i] === (serializedPhrase[(serializedPhrase.length - 1) -i])){
            if(i === Math.round((serializedPhrase.length-1)/2)){
                return true;
            }
        }
        else{
            return false;
        }
    }
}
let palidromePhrase = "race car";
//console.log(isPalindrome(palidromePhrase));


// Happy Numbers
function checkForHappyNumber(startingNumber) {
    let currentNumber = startingNumber.toString();
    let previousNumbers = [];
    let happyProof = 1;
    let isHappy = false;

    while(!isHappy) {
        let digitsArray = currentNumber.toString().split("");
        let sumOfSquares = 0;

        for(let i = 0; i < digitsArray.length; i++) {
            sumOfSquares += digitsArray[i] * digitsArray[i];
        }

        // check for numbers already hit.
        for(let i = 0; i < previousNumbers.length; i++) {
            if(sumOfSquares === previousNumbers[i]) {
                console.log(startingNumber + " is unhappy :(");
                return;
            }
        }

        if(sumOfSquares === happyProof) {
            console.log(startingNumber + " is happy! :)");
            isHappy = true;
        }
        currentNumber = sumOfSquares;
        previousNumbers.push(currentNumber);
    }
}
checkForHappyNumber(45);

// Check Prime Numbers
function printPrimeNumbers(min, max){
    let primeNumberArray = [];

    if(min < 3 && max >= 2){
        primeNumberArray.push(2);
    }
    for(let i = min >= 3 ? min : 3; i <= max; i++){
        for(let j = 2; j <= Math.ceil(i/2); j++){
            if(i % j === 0){
                break;
            }
            else{
                if(j === Math.ceil(i/2)){
                    primeNumberArray.push(i);
                }
            }
        }
    }
    console.log(primeNumberArray);
}
//printPrimeNumbers(-100000, 1299827)


//Fibonacci
//Recursive
function doFibonacciRecursion(numberOfRemainingIterations, fibonacciArray = [1, 1]) {
    let newNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
    fibonacciArray.push(newNumber);

    numberOfRemainingIterations--;
    if(numberOfRemainingIterations > 0) {
        return doFibonacciRecursion(numberOfRemainingIterations, fibonacciArray);
    }
    return fibonacciArray;
}
//let finalArrayRecursive = doFibonacciRecursion(3);
//console.log('finalArray', finalArrayRecursive);

//While Loop
function doFibonacciWhile() {
    let fibonacciArray = [1, 1];
    let numberOfIterations = 10;

    while(numberOfIterations > 0) {
        let newValue = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        fibonacciArray.push(newValue);
        numberOfIterations--;
    }

    console.log('result', fibonacciArray);
    return fibonacciArray;
}

//let finalArrayWhile = doFibonacciWhile();
//console.log('finalArray', finalArrayWhile);