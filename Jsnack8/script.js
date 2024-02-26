let somma = 0;

let n = prompt('inserisci un numero di 4 cifre');

// for (let i = 0; i < n.length; i++) {
//     let x = n[i];
//     x = Number(x);
//     somma += x
// }


let i = 0;
while (i < n.length) {
    let x = n[i];
    x = Number(x);
    somma += x


    i++
}
console.log(somma);


