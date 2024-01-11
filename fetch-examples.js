console.log('hello world!!');

const getPikachuData = () => {
  const promise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

  promise
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(error => console.error(error.message))
};

const getAndRenderRandomDog = () => {
  const promise = fetch("https://dog.ceo/api/breeds/image/random");

  promise
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const img = document.createElement('img');
      img.src = data.message;
      document.body.append(img);
    })
}

const getJoke = () => {
  const promise = fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')

  promise
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const p = document.createElement('p');
      p.textContent = `${data.setup} ${data.delivery}`
      document.body.append(p);
    })
}

const postUser = () => {
  const newUser = { name: "morpheus", job: "leader" };

  const options = {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    }
  }

  fetch('https://reqres.in/api/users', options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // do something with the data
    })
    .catch((error) => {
      console.error(`${error.name}: ${error.message}`)
    })
}

const main = () => {
  getAndRenderRandomDog();
  getPikachuData();
  getJoke();
  postUser();
}

main();
