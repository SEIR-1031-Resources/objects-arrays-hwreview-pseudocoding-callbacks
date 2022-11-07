// Why are arrays so important?

// let nums = [3, 8, 15, 9];

// for(let i = 0; i < nums.length; i++) {
//     if(nums[i] > 10) {
//         nums.splice(i, 0, 2);
//         i--;
//         continue;
//     }
//     console.log(nums[i]);
// }

// nums.forEach(num => {
//     console.log(num);
// })

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

let nums1 = [2, 4, 5, 9];
let nums2 = [3, 7, 8, 15];
console.log(`Type of nums1 is ${typeof nums1}`)
// let nums3 = [5, 17, 7, 28];
// nums3.sort((a, b) => {
//     return a - b;
// });
// console.log(nums3);
console.log([...nums1, ...nums2, 125])
// Sort these two arrays into one!

function sortTwoSortedArrays(arr1, arr2) {
    let sortedArr = [];
    while(arr1.length && arr2.length) {
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

console.log(sortTwoSortedArrays(nums1, nums2))

