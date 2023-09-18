'use strict';

// Oefening 05
let days = parseInt(
    prompt('Geef het aantal dagen:')
  );
  let hours = parseInt(
    prompt('Geef het aantal uren:')
  );
  let minutes = parseInt(
    prompt('Geef het aantal minuten:')
  );
  let seconds = parseInt(
    prompt('Geef het aantal seconden:')
  );
  
  hours += days * 24;
  minutes += hours * 60;
  seconds += minutes * 60;
  
  
  console.log(`Het totaal aantal seconden is: ${seconds.toFixed(5)}`);
  