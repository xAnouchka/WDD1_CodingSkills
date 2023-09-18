'use strict';

// Oefening 11
let itemName = prompt('Wat is de artikelnaam?'),
  itemPrice = parseFloat(prompt('Wat is de inkoopprijs?')),
  profitPrct = parseFloat(prompt('Wat is het gewenste winstpercentage?'))/100;

let priceToSell = itemPrice + itemPrice * profitPrct;
console.log(` ${itemName} zal verkocht worden aan ${priceToSell.toFixed(2)}`);
