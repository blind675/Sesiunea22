console.log('1');
// Request GET catre serverul dorit.
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
  // Este foarte important sa stim forma raspunsului.
  console.log(data);
  // Selectam imaginea.
  const myImage = document.getElementById('image');
  // Schimbam sursa imaginii cu sursa primita de la server.
  myImage.setAttribute('src', data.message);
})

console.log('2');
