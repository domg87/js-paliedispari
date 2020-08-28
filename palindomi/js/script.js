// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// // 1. chiediamo all'utente di inserire un nome
// var nome = prompt("Inserisci un nome");
//
// // 2. creiamo la funzione
// function palindroma(verifica){
//     var reverseString = '';
//     for(var k in verifica){
//        reverseString += verifica[(verifica.length - k) - 1];
//     }
//   if(verifica === reverseString){
//     console.log('è palindromo');
//   }else{
//     console.log('Non è palindromo');
//   }
//   console.log(nome);
//
// }

// --- CORREZZIONE ESERCIZIO ---

// chiedi la parola all'utente
var parola = prompt("inserisci una parola");

// facciamo il reverse della parola
var parolaCapovolta = capovolgiParola(parola);
// parola inserita (esempio (se di 7 lettere)) -1 = 6 | i >= 0 | i--
// var parolaCapovolta = "";
// for(var i = parola.length - 1; i >= 0; i--) {
//   parolaCapovolta = parolaCapovolta + parola[i];
// }
// console.log(parola);
// console.log(parolaCapovolta);

// controllare se le due parole sono uguali
if(parola == parolaCapovolta){
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}


/*
  Funzione che capovolge una stringa
  parametri:
  cosa restituisce? una parola capovolta
*/
function capovolgiParola(stinga) {
  var dtringaCapovolta = "";
  for(var i = stringa.length - 1; i >= 0; i--) {
    stringaCapovolta += stringa[i];
  }
  return stringaCapovolta;
}






// var controllo = true;
// for(var i = 0; i < nome.length / 1; i++) {
//   console.log(nome[i]);
//   // console.log(nome.charAt(nome.length -i -1))
//   controllo = false;
// }
// if (controllo){
//   console.log("'E' palindromo");
// } else {
//   console.log("Non è palindormo");
// }




// function palindroma (verifica) {
//   var l = verifica.length;
//   for(var i = verifica.length; i < 1 / 2; i++ ) {
//     if(verifica.charAt(i) !== verifica.charAt(l - 1 - i)) {
//       return false;
//     }
//   }
//   return true;
// }
// if (palindroma("1122332211")) {
//     console.log("The word is a palindrome");
// } else {
//     console.log("The word is NOT a palindrome");
// }


// // metodo 2 online
//
// function palindroma(verifica) {
//
//     var characters  = verifica.split(''),
//         firstLetter = characters.shift(),
//         lastLetter  = characters.pop();
//
//     if (firstLetter !== lastLetter) {
//         return false;
//     }
//
//     if (characters.length < 2) {
//         return true;
//     }
//
//     return palindroma(characters.join(''));
//     console.log(verifica);
// }
