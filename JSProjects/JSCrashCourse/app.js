// let count = 1;

// while (count <= 100) {
//     console.log(`this ran ${count} times`);
//     count++;
// }


for (let i = 1; i <= 100; ++i) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log(` ${i} -> frontend simplified`)
    } else if (i % 3 === 0) {
        console.log(` ${i} -> frontend`)
    } else if (i % 5 === 0) {
        console.log(` ${i} -> simplified`)
    } else {
        console.log(`${i} -> ${i}`)
    }
}