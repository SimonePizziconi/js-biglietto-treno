// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere

let kilometersUser = parseInt(prompt ("Quanti chilometri devi effettuare?"));
console.log(kilometersUser);

//  e l’età del passeggero.

let ageUser = parseInt(prompt ("Quanti anni hai?"));
console.log(ageUser);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let priceTicket = (0.21 * kilometersUser);
console.log(priceTicket);

// va applicato uno sconto del 20% per i minorenni

if (ageUser < 18){
    
    priceTicket = (priceTicket - (priceTicket / 100 * 20));
    console.log(priceTicket);

} else if (ageUser > 65){

    priceTicket = (priceTicket - (priceTicket / 100 * 40));
    console.log(priceTicket);
}


// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let finalPriceTicket = Math.round(priceTicket * 100) / 100;
console.log(finalPriceTicket);

document.getElementById("ticket-price").innerHTML = "Il tuo biglietto costa... " + finalPriceTicket + "€";
