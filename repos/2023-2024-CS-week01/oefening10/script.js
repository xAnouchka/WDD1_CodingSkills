'use strict';

// Oefening 10
let won = parseInt(prompt('Hoeveel wedstrijden heb je gewonnen?')),
  lost = parseInt(prompt('Hoeveel wedstrijden heb je verloren?')),
  undecided = parseInt(
    prompt('Hoeveel wedstrijden heb je noch gewonnen noch verloren?')
  );

let pointsTotal = won * 3 + undecided;
console.log(`Je hebt momenteel ${pointsTotal} punten.`);
