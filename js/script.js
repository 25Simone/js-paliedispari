// dichiaro la variabile collegata all'html
const output1Html = document.querySelector('.output1');

// chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola per verificare se è palindroma');

// definisco la funzione per verificare se la parola è palindroma
function checkPalindrome(word) {
    let invertedWord = '';
    let result;
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
    }
    if (word === invertedWord) {
        result = 'è palindroma';
    } else {
        result = 'non è palindroma';
    }
    return result;
}

let palindromeValidation = checkPalindrome(userWord);
output1Html.innerHTML += `La parola ${userWord} ${palindromeValidation}`;

// ----------------------------------------------------------------

// dichiaro la variabile di collegamento al codice html
const output2Html = document.querySelector('.output2');
const scoreOutput = document.getElementById('score');

// dichiaro le variabili dei bottoni
const buttonPari = document.getElementById('button-pari');
const buttonDispari = document.getElementById('button-dispari');

// definisco le variabli flag e le impongo false
let pari = false;
let dispari = false;
let numeroIsPari = false;
let numeroIsDispari = false;

let num;
let sum = 0;
let score;

// funzioni
function randomNumber (min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result;
}
function checkPariOrDispari() {
    if (sum % 2 === 0) {
        numeroIsPari = true;
    } else {
        numeroIsDispari = true;
    }
}

// chiedo all'utente un numero da 1 a 5
userNum = parseInt(prompt('inserisci un numero da 1 a 5'));
output2Html.innerHTML += `Il tuo numero é ${userNum}`;

// check numero da 1 a 5
if (userNum < 1 || userNum > 5) {
    output2Html.innerHTML += '<br/>Ho chiesto un numero da 1 a 5';
} else {
    // estraggo un numero random da 1 a 5 per il computer
    numComputer = parseInt(randomNumber(1, 5));

    // calcolo la somma tra i due numeri
    sum = userNum + numComputer;

    // definisco gli eventi per i click sui button
    buttonPari.addEventListener ('click', function() {
        pari = true;
        score = checkPariOrDispari(sum);
        if (numeroIsPari) {
            console.log('Vince il giocatore')
        } else if(numeroIsDispari){
            console.log('Vince il computer')
        }
    })
    buttonDispari.addEventListener ('click', function() {
        dispari = true;
        score = checkPariOrDispari(sum);
        if (numeroIsDispari) {
            console.log('Vince il giocatore')
        } else if (numeroIsPari) {
            console.log('Vince il computer')
        }
    })
}
