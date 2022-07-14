// question 1

// function showRating(rating){

//     //  for loop
//     let ratings = ""
//     for (let i = 0; i < Math.floor(rating); ++i){
//        if(i === Math.floor(rating) - 1){
//            ratings += "*"
//        } else {
//         ratings += "* "
//        }
//     }
//     if (!Number.isInteger(rating)){
//         ratings += " ."
//     }
//     return ratings

// }

// console.log(showRating(6.5))

//  question 2

// function sortLowToHigh(arr){
//     return arr.sort((a, b) => a - b)
// }

// console.log(sortLowToHigh([1,5,8,9,251,3,7,1,4,5,6]))

// question 3

// function sortHighToLow(obj) {
//   return obj.sort((a, b) =>  b.price - a.price);
// }

// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//   ])
// );

//  question 4

// watched 3 async videos

// question 5

// async function postsByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const result = await promise.json();

//   const posts = result.filter((elem) => elem.userId === userId);

//   console.log(posts);
// }

// postsByUser();

// question 6

// async function firstSixIncomplete(n) {
//     const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const result = await todos.json()
//     let incompletedTodos = result.filter((elem) => !elem.completed).slice(0, 6)

// this makes it dynamic able to change first 6 to any amount
// let firstSix = incompletedTodos.slice(0, n)
// console.log(incompletedTodos)

// }

//     console.log(firstSixIncomplete(6))
