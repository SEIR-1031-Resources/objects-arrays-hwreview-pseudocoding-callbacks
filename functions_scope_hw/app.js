// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
// This function will cube a number it's given.
// function cc(n)
function calculateCube(num) {
    // I want to cube a number, meaning multiply it by itself and then by itself again
    // The cube of 5 should be 5 * 5 * 5 = 125
    return num * num * num;
}

console.log(calculateCube(5))

// 3. isAVowel
function isAVowel(letter) {
    // const vowels = ['a', 'e', 'i', 'o', 'u']
    // const vowels = 'aeiou'
    // for(let i = 0; i < vowels.length; i++) {
    //     if(letter.toLowerCase() === vowels[i]) return true;
    // }
    const lowerCaseLetter = letter.toLowerCase()
    if(lowerCaseLetter === 'a' || lowerCaseLetter === 'e' || lowerCaseLetter === 'i' || lowerCaseLetter === 'o' || lowerCaseLetter === 'u') return true;
    return false;
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // It is prime if every number from 2 
    // up to, but not including, the number is 
    // not a factor
    if(num % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(num); i+=2) {
        if(num % i === 0) return false;
    }
    return true;
}

// console.log(checkPrime(7)) //true
// console.log(checkPrime(11)) //true
// console.log(checkPrime(12)) //false

// 6.2 printPrimes
function printPrimes(num) {
    // I want to check each number up to
    // and including the num to see if they
    // are prime or not. Print out if they are
    for(let i = 2; i <= num; i++) {
        if(checkPrime(i)) console.log(i);
    }
}

// printPrimes(12) //2, 3, 5, 7, 11

// 7. printLongestWord
function printLongestWord(arr) {
    let longestString = 0;
    let longestWord = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestString) {
            longestString = arr[i].length;
            longestWord = arr[i];
        }
    }
    return longestWord;
}

// console.log(printLongestWord(["Bojack", "Princess", "Dog", "Cat", "Peanutbutter", "Other"]))

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    let fibSequence = [1, 2];
    let evenValueSum = 2;
    while(fibSequence[fibSequence.length - 1] < num) {
        const newNumberInSequence = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(newNumberInSequence);
        // console.log(fibSequence)
        if(newNumberInSequence % 2 === 0 && newNumberInSequence < num) evenValueSum += newNumberInSequence
    }
    // console.log(fibSequence);
    return evenValueSum;
}

// console.log(eulerFibo(100));
// console.log(eulerFibo(4000000));

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};