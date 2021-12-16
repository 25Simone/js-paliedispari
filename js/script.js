// // dichiaro la variabile collegata all'html
// const outputHtml = document.querySelector('.output');

// // chiedo all'utente di inserire una parola
// const userWord = prompt('Inserisci una parola per verificare se è palindroma');

// // definisco la funzione per verificare se la parola è palindroma
// function checkPalindrome(word) {
//     let invertedWord = '';
//     let result;
//     for (let i = word.length - 1; i >= 0; i--) {
//         invertedWord += word[i];
//     }
//     if (word === invertedWord) {
//         result = 'è palindroma';
//     } else {
//         result = 'non è palindroma';
//     }
//     return result;
// }

// let palindromeValidation = checkPalindrome(userWord);
// outputHtml.innerHTML += `La parola ${userWord} ${palindromeValidation}`;

// ----------------------------------------------------------------
let pari = false;
let dispari = false;
let num;
let sum = 0;
let score;
let numeroPari = false;
let numeroDispari = false;

function randomNumber (min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result;
}

const buttonPari = document.getElementById('button-pari');
const buttonDispari = document.getElementById('button-dispari');

buttonPari.addEventListener ('click', function() {
    pari = true;
    score = getScore(sum);
    if (numeroPari) {
        console.log('Vince il giocatore')
    } else if(numeroDispari){
        console.log('Vince il computer')
    }
})
buttonDispari.addEventListener ('click', function() {
    dispari = true;
    score = getScore(sum);
    if (numeroDispari) {
        console.log('Vince il giocatore')
    } else if (numeroPari) {
        console.log('Vince il computer')
    }
})

num = parseInt(prompt('inserisci un numero da 1 a 5'));
if (num < 1 || num > 5) {
    console.log('Ho chiesto un numero da 1 a 5')
}

numComputer = parseInt(randomNumber(1, 5));
console.log(num);
console.log(numComputer);

sum = num + numComputer;
console.log(sum);

function getScore() {
    if (sum % 2 === 0) {
        numeroPari = true;
    } else {
        numeroDispari = true;
    }
}


