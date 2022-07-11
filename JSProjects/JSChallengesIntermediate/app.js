// question 1
// function filterOutFalsy(elem1, elem2) {
//     return !elem1 ? elem1 : elem2
// }

// console.log(filterOutFalsy(10, 500))
// question 2

// function arrLength(arr) {
//     return arr.length
// }

// console.log(arrLength([1,212,2,5,5,1,5,1,5]))
// question 3

// function lastElem(arr) {
//     return arr[arr.length - 1];
// }

// console.log(lastElem([3,2,5,1,8,6,5]))
// question 4

// function arrSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i) {
//         sum += arr[i]
//     }

//     return sum

// }

// console.log(arrSum([100,200,500]))
// question 5

// function progressiveSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(progressiveSum(3))
// question 6

// function calcTime(sec) {
//     let timerMinutes = Math.floor(sec / 60)
//     let timerSeconds = sec % 60

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }

//     if (timerSeconds.toString().length === 1) {
//         timerSeconds = '0' + timerSeconds
//     }

//     return timerMinutes + ':' + timerSeconds

// }

// console.log(calcTime(615))
// question 7

// function getMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(getMax([5, -200, 1000]));

// question 8

// function reverseString(str) {
//     // let strArr = []
//     // for (let i = 0; i < str.length; ++i) {
//     //     strArr += str[i]
//     // }
//     return str.split('').reverse().join('')
//     // split('') = string to array
//     // reverse() = reverses array
//     // join('') = array to string
// }

// console.log(reverseString('Aaqeeb'))

// question 9

// function convertToZeros(arr) {
//  array.map
// return arr.map(i => 0)

//  array.fill
// let newArr = arr.fill(0, 0, arr.length)

// for loop
// for (let i = 0; i < arr.length; i++) {
//     newArr = newArr + (arr[i] - arr[i])
//  or
//      arr[i] = 0 **
// }
// return newArr.split('')
// return arr **
// return newArr
// }

// console.log(convertToZeros([3,3,3,3,45345234]))

//  question 10

// function removeApples(arr) {
// for loop
// let newArr = []
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] !== 'Apple') {
//         newArr.push(arr[i])
//     }
// }
// return newArr

// arr.filter only returns given argument
//   return arr.filter((elem) => elem !== "Apple");
// }

// console.log(removeApples(["Banana", "Apple", "Oranges", "Apple"]));

// question 11

// function filterOutFlasy(arr) {
// array.filter
// return arr.filter(elem => !!elem === true)
// for loop
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if( !!arr[i] === true) {
//         newArr.push(arr[i])
//     }
// }
// return newArr

// }

// console.log(filterOutFlasy(["Banana", NaN, undefined, null, '']))

// question 12

// function convertToBoolean(arr) {
  // for loop
  // let newArr = []
  // for (let i = 0; i < arr.length; i++) {
  //     if (!!arr[i] === true) {
  //         newArr.push(true)
  //     }else {
  //         newArr.push(false)
  //     }
  // }

  // return newArr
  // array.map
//   return arr.map((elem) => !!elem);
// }

// console.log(convertToBoolean([500, 0, "Aaqeeb", "", []]));
