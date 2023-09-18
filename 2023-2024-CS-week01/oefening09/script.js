'use strict';

// Oefening 09
let x = parseInt(prompt('Geef een getal X op:')),
  y = parseInt(prompt('Geef een getal Y op:')),
  z = parseInt(prompt('Geef een getal Z op:'));

let avg = (x + y + z) / 3;

console.log(`Het gemiddelde van ${x} en ${y} en ${z} is ${parseInt(avg)}`);
