let userName = prompt("Qual è il tuo nome?");
let lastName = prompt("Qual è il tuo cognome?");
let favColor = prompt("Qual è il tuo colore preferito?");
let messaggio = `${userName}${lastName}${favColor}23`;
document.getElementById('titolo').innerHTML = messaggio;
console.log(userName);
console.log(lastName);
console.log(favColor);