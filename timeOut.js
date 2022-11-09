// Intrebare de interviu: In ce ordine vor fi afisate mesajele?
console.log('1');
console.log('2');
console.log('3');

function timeOutCallback() {
  console.log('Am intarziat cu o secunda');
}

// setTimeout apeleaza functia (pasata ca prim argument) dupa 1000 de milisecunde (intervalul de timp specificat ca cel de-al doilea argument).
setTimeout(timeOutCallback, 1000);

console.log('4');

// setTimeout va apela functia primita ca argument dupa 0 s. Cu toate acestea, din cauza ca este o functie asincrona, callback-ul sau este executat DUPA instructiunile sincrone.
setTimeout(function(){
  console.log('5');
}, 0);

console.log('6');
