'use strict';

// Oefening 12
let currentYear, birthYear;
let years = prompt('Geef het huidige jaar en je geboortejaar, geplitst met ;');
let splitNr = years.search(';');
currentYear = parseInt(years.substring(0, splitNr));
birthYear = parseInt(years.substring(splitNr + 1));
let age = currentYear - birthYear;

let firstName = prompt('Wat is je voornaam?');

console.log(`Een hartige welkom aan ${firstName} die ${age} jaar oud is.`);
