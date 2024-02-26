
let dispari = []

for (let i = 0; i < 6; i++) {

    let number = parseInt(prompt('inserisci un numero'));

    if (number % 2 != 0) {
        dispari.unshift(number);
    }


}

// let i = 0;

// while (i < 6) {
//   let number = parseInt(prompt('inserisci un numero'));

// if (number % 2 != 0) {
//     dispari.unshift(number);
// }

//     i++
// }

console.log(dispari);
