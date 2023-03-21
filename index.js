function loadDogImage(endPoint) {
  /* 
    La función "loadDogImage" requiere que se le proporcione como argumento la dirección de una API que devuelve una URL de imagen de un perro de manera aleatoria en "endPoint". 
    Haciendo uso de esa API, obten la URL de la imagen de un perro, para ello utiliza la API fetch, Puedes leer como funciona API FETCH aqui: https://developer.mozilla.org/en-US/docs/Web/API/fetch#credentials. 
    
    Como esta operación es asíncrona, debes envolverla en una promesa que luego debe ser devuelta por la función "loadDogImage". El propósito de esta promesa es permitir que el código dentro de la función "getRandomDogImage" funcione correctamente.
    
    Por lo tanto, tu tarea es codificar una promesa que garantice el correcto funcionamiento del código en la función "getRandomDogImage".
  */
  '👇️👇️👇️👇️ TU CODIGO DEBE IR AQUI 👇️👇️👇️👇️'
  
  '👆️👆️👆️👆️ TU CODIGO DEBE IR AQUI 👆️👆️👆️👆️'
}

function getRandomDogImage() {
  loadDogImage('https://dog.ceo/api/breeds/image/random').then((data) => {
    if (data.status === 'success') {
      const dogImage = document.getElementById("dog-image");
      dogImage.src = data.message;
    } else {
      dogImage.src("No-Image-Placeholder.png")
    }
  }).catch(error=>console.log(error.message));
}

