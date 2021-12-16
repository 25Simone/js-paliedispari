// dichiaro la variabile collegata all'html
const outputHtml = document.querySelector('.output');

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
outputHtml.innerHTML += `La parola ${userWord} ${palindromeValidation}`;
