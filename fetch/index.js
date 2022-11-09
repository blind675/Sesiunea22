// Facem un request de tip GET catre /users.
const myPromise = fetch('https://jsonplaceholder.typicode.com/todos');

myPromise
  // Daca raspunsul vine, extragem din el continutul, sub format JSON.
  .then(response => response.json())
  // In callback-ul celui de-al doilea .then putem prelucra datele venite de la server.
  .then(data => {
    // Afisam datele venite de la server.
    console.log(data);
  
    // Selectam div-ul.
    const myDiv = document.querySelector('#main');
    // Parcurgem userii. Functia primita de forEach poate primi ca al doilea parametru indexul elementului.
    data.forEach((element, index) => {
      // Afisam userii pe ecran.
      // myDiv.innerHTML = myDiv.innerHTML + `<p> Taskul nr. ${index} este: ${element.title}`;
      myDiv.innerHTML += `<p> Taskul nr. ${index} este: ${element.title}`;
    });
  });




// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    title: 'test',
    message: 'my post example',
    userId: 1,
  }),
})
.then(response => response.json())
.then(data => {
  console.log(data);

  // throw new Error('Eroarea mea');
})
.catch(error => {
  console.log('error: ', error)
})
