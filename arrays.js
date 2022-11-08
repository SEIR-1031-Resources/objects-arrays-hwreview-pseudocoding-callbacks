// Why are arrays so important?

let nums = [3, 8, 15, 9];

// for(let i = 0; i < nums.length; i++) {
//     if(nums[i] > 10) {
//         nums.splice(i, 0, 2);
//         i--;
//         continue;
//     }
//     console.log(nums[i]);
// }

nums.forEach((num) => {
    console.log(num);
})

// nums.map(num => {
//     if(num < 10) {
//         console.log(num);
//     }
//     // console.log(num);
// })

// let movies = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
// movies.splice(2, 0, 'Spaceballs', 'Alien');
// // console.log(movies) // [ 'Caddyshack', 'Interstellar', 'Spaceballs', 'Alien', 'Scarface', 'Trading Places' ]
// // const addBack = movies[3]
// movies.splice(1, 2);
// movies.splice(2, 1)
// console.log(movies)
// let removedMovies = movies.splice(0, 3);
// console.log(removedMovies); //[ 'Caddyshack', 'Interstellar', 'Spaceballs' ]
// console.log(movies) // [ 'Alien', 'Scarface', 'Trading Places' ]
// removedMovies = movies.splice(1, 0, 'The Sting', 'Another movie');

// console.log(removedMovies)// []
// console.log(movies) // [ 'Spaceballs', 'The Sting', 'Another movie', 'Alien' ]

let nums1 = [23, 16, 55, 1];
let nums2 = [3, 7, 8, 15];
console.log(`Type of nums1 is ${typeof nums1}`)
// let nums3 = [5, 17, 7, 28];
// nums3.sort((a, b) => {
//     return a - b;
// });
// console.log(nums3);
console.log([...nums1, ...nums2, 125])
// Sort these two arrays into one!

// function sortNumberically(a, b) {
//     return a - b;
// }

function sortArray(arr) {
    console.log(arr);
    // Using a known built in .sort for numbers. .sort without the callback
    // expects to sort things alphabetically, not numerically
    arr.sort((a, b) => {
        return a - b;
    })
    // This will return a sorted array and works on any input array of numbers
    console.log(arr);
    return arr;
}

function sortAnyTwoNumericalArrays(arr1, arr2, helloEveryone) {
    // I'm first going to set arr1 and arr2 to sorted versions of those arrays
    arr1 = helloEveryone(arr1);
    // When it sees a callback, it's setting arr1 to the value returned from the callback
    arr2 = helloEveryone(arr2);
    // Create a variable sorted array that will take in the numbers smallest to largest
    let sortedArr = [];
    // While both have items in them, run this loop
    while(arr1.length && arr2.length) {
        // if item 1 in arr1, which is the smallest now that it's sorted, is larger, 
        // I'm going to push in arr2's first item because that's smallest right
        if(arr1[0] > arr2[0]) {
            sortedArr.push(arr2[0]);
            arr2.splice(0, 1);
        } else {
            sortedArr.push(arr1[0]);
            arr1.splice(0, 1);
        }
    }
    console.log(`Sorted array is ${sortedArr}`)
    console.log(`Array 1 is ${arr1}`)
    console.log(`Array 2 is ${arr2}`)
    return [...sortedArr, ...arr1, ...arr2]
}

console.log(sortAnyTwoNumericalArrays(nums1, nums2, sortArray))


// Test if num1 is a factor of num2
function factor(num1, num2) {
    if(num2 % num1 === 0) return true;
    return false;
}

// Check if a number prime 
function prime(num, callback) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(callback(i, num)) {
            return false;
        }
    }
    return true;
}

console.log(prime(7, factor)); //true
console.log(prime(11, factor)); //true
console.log(prime(15, factor)); //false
