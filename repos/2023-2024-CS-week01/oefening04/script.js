'use strict';

// Oefening 04
let base = parseFloat(prompt('Geef de basis van de driehoek op:'));
let height = parseFloat(prompt('Geef de hoogte van de driehoek op:'));

console.log(`De basis van de driehoek: ${(base).toFixed(2)}\nDe hoogte van de driehoek: ${(height).toFixed(2)}\nDe oppervlakte bedraagt ${((base*height)/2).toFixed(2)}`);