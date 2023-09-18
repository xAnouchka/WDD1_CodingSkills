'use strict';

// Oefening 06
let total = parseInt(
  prompt('Geef het aantal seconden op: ')
);

let seconds = total % 60;
let minutes = (total - seconds) / 60;

console.log(`${total} is gelijk aan ${minutes} minuten en ${seconds} seconden`);
