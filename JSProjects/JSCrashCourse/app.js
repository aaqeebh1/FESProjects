// let count = 1;

// while (count <= 100) {
//     console.log(`this ran ${count} times`);
//     count++;
// }

// for (let i = 1; i <= 100; ++i) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log(` ${i} -> frontend simplified`)
//     } else if (i % 3 === 0) {
//         console.log(` ${i} -> frontend`)
//     } else if (i % 5 === 0) {
//         console.log(` ${i} -> simplified`)
//     } else {
//         console.log(`${i} -> ${i}`)
//     }
// }

// let str = "Frontend Simplified"

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }

// function definition
// function welcomePersonToFES (firstName, lastName) {
//     console.log(`Welcoms to FES, ${firstName} ${lastName}`)
// }

// // call function
// welcomePersonToFES('Aaqeeb', 'Hussain')
// welcomePersonToFES('Alia', 'Mirza')
// welcomePersonToFES('Hawwa', 'Hussain')
// welcomePersonToFES('Hud', 'Hussain')

// function sumOfTwoNumbers(num1, num2) {
//     return num1 / num2
// }
// console.log(sumOfTwoNumbers(30, 10))

// function convertCelsiusToFahrenheit(cel) {
//     let fah = cel * 1.8 + 32
//     return fah
// }

// const convertCelsiusToFahrenheit = (cel) => {
//     return cel * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(0))

// let arr = [20, 30, 40, 50, 100]

// console.log(arr[0])

// console.log(arr[arr.length - 1])

// arr.push(200)

// //  [] =>
// let newArr = arr.filter(elem => elem <= 50)

// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']

// let passGrades = grades.filter(elem => elem !== 'FAIL')

// console.log(passGrades)

// let grades = ['A+', 'A', 'B', 'FAIL']

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] != 'FAIL') {
//         goodGrades.push(grades[i])
//     }
// }

// console.log(goodGrades)

// let arr = [1,4,9,16]

// let newArr = arr.map(elem => 'dog')

// console.log(newArr)

// let dollars = [0, 10, 20]

// let cents = dollars.map((elem) => {return elem * 100})

// console.log(cents)

// let dollars = [0, 10, 20]

// let cents = []

// for (let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] * 100)
// }

// console.log(cents)

// let users = [
//   {
//     username: "Aaqeeb",
//     email: "aaqeebh1@googlemail.com",
//     password: "test123",
//     subStatus: "PRO",
//     discord: "N/A",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "Alia",
//     email: "alia1@googlemail.com",
//     password: "test123",
//     subStatus: "VIP",
//     discord: "ALIA123",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
//   {
//     username: "Hawwa",
//     email: "hawwa1@googlemail.com",
//     password: "test123",
//     subStatus: "PRO",
//     discord: "N/A",
//     lessonsCompleted: [0, 1, 2],
//   },
//   {
//     username: "Hud",
//     email: "hud1@googlemail.com",
//     password: "test123",
//     subStatus: "PRO",
//     discord: "HUD123",
//     lessonsCompleted: [0, 1],
//   },
// ];

// function register(user) {
//   users.push(user);
// }

// register({
//   username: "Akeel",
//   email: "akeel1@gmail",
//   password: "test123",
//   subStatus: "Pro",
//   discord: "AKEEL123",
//   lessonsCompleted: [0, 1, 2],
// });

// console.log(users);

// first way of accessing an element
// console.log(document.querySelector('#title'))

// second way of getting an element
// console.log(document.getElementById('title'))

// document.querySelector('#title').innerHTML = 'frontend simplified'

// document.querySelector('#title').style.color = 'pink'

function toggleDarkMode() {
   document.querySelector('body').classList.toggle("dark-theme")
   document.querySelector('button').classList.toggle("btnColor")
   return
}

