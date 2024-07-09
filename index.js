var amount = prompt("Enter your money like this `150 000`").replaceAll(' ','');

var usd = 12623.1;
var euro = 13652.1;
var rub = 143.77;
var rubby = 151.20;

console.log((amount / usd).toFixed(2) + " US dollar");
console.log((amount / euro).toFixed(2) + " Euro money");
console.log((amount / rub).toFixed(2) + " Russian money");
console.log((amount / rubby).toFixed(2) + " Indian money");