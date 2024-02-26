let somma = 0;

let n = prompt('inserisci un numero di 4 cifre');

for (let i = 0; i < n.length; i++) {
    let x = n[i];
    x = Number(x);
    somma += x
}
console.log(somma);


