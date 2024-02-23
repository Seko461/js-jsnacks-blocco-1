// In un array sono contenuti nonmi degli invitati alla
// festa del grande Gatsby.
// Chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa

var invitato = prompt('Inserisci il tuo nome').value;


const list = ['Giacomo', 'Salvatore', 'Corrado', 'Carmelo', 'Ginevra', 'Susanna'];

let canAccess = false;

for (i = 0; i < list.length; i++) {
    var control = list[i];

    if (control === list.value) {


        canAccess = true;
        break;
    }



}
if (canAccess) {
    console.log('ok')

} else {
    console.log('no')

}