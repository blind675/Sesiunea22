
// Promise-urile sunt niste obiecte speciale, care permit codului sa nu se execute imediat.
// ATENTIE! Exemplu de aici este copiat de pe pagine de MDN, fiind la inceput te sfatuiesc calduros sa nu te concentrezi pe a intelege cum sunt create promise-urile, ci pe cum sunt utilizate.
const myPromise = new Promise((resolve, reject) => {
  
  setTimeout(()=> {
    console.log('A trecut o secunda');
    const raspuns = 'Text returnat dupa o secunda';
    reject(raspuns);
  }, 1000);
});

// const myPromise = fetch();

console.log('1');

// Daca rulam acest cod in consola, vom vedea ca promise-ul contine un [[PromiseResult]].
console.log(myPromise);

// Partea importanta: cum uitilizam promise-urile. Pentru a prelua datele venite din promise (ce se afla in [[PromiseResult]]), este nevoie sa utilizam metoda numita then. Then primeste ca argument o functie, iar functia respectiva primeste ca argument datele venite din promise si poate face ce vrea cu ele.
myPromise
  .then(function(data) {
    console.log('data from promise: ', data)
  })
  .catch(function(error) {
    console.log(error);
  });

console.log('2');
