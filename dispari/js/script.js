// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// // 1. chiedo all'utente di inserire pari e dispari e inserire un numero da 1 a 5
// var pariDispariUtente = prompt("inserisci o pari o dispari");
// var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
// // 2. genero un numero random tra 1 e 5 per la computer
// var numeroCpu = Math.Floor(Math.random() + 5) + 1;
// console.log(numeroCpu);
// // 3. sommo il numero inserito dall'utente con quello della computer
// var somma = numeroUtente + numeroCpu;
// // 4. verifico se la somma è pari o dispari
// var risultatoPariDispari = "dispari";
// if (somma % 2 = 0){
//   risultatoPariDispari = "pari";
// }
//
// // 5. l'utente vince se la somma è pari e ha scelto pari oppure la somma è dispari e ha scelto dispari
// if (risultatoPariDispari == pariDispariUtente) {
//   console.log("hai vinto");
// } else {
//   console.log("hai perso");
// }
// // altrimenti perde

// -- SECONDO METODO --

// 1. chiedo all'utente di inserire pari e dispari e inserire un numero da 1 a 5
var pariDispariUtente = prompt("inserisci o pari o dispari").toLowerCase();
// while per validare che l'utente inserisca pari o dispari -- toLowerCase (trasforma la stringa in minuscolo)--
while (pariDispariUtente != "pari" && pariDispariUtente != "dispari") {
  var pariDispariUtente = prompt("hai sbagliato!! inserisci pari o dispari");
}


var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
while (numeroUtente > 5 || numeroUtente < 1 || isNan(numeroUtente)) {
  numeroUtente = parseInt(prompt("Hai sbagliato!! inserisci un numero da 1 a 5"));
}
// 2. genero un numero random tra 1 e 5 per la computer
var numeroCpu = generaNumeroRandom(1, 5);
console.log(numeroCpu);
// 3. sommo il numero inserito dall'utente con quello della computer
var somma = numeroUtente + numeroCpu;
// 4. verifico se la somma è pari o dispari
var risultatoPariDispari = checkPariDispari(somma);


// 5. l'utente vince se la somma è pari e ha scelto pari oppure la somma è dispari e ha scelto dispari
if (risultatoPariDispari == pariDispariUtente) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}
// altrimenti perde


/*
  funzione che restituisce un numero random
*/

function generaNumeroRandom(min, max) {
  var numRandom = Math.Floor(Math.random() + (max - min +1)) + min;
  return numRandom;
}
