let prompt1 = prompt('inserisci una parola');
let prompt2 = prompt('inserisci una parola');

let promptValue1 = [prompt1];
let promptValue2 = [prompt2];

console.log(promptValue1, promptValue2);


if (prompt1.length > prompt2.length) {
    document.write(promptValue1 + ' è il numero più grande');

} else {
    document.write(promptValue2 + ' è il numero più grande');
}
