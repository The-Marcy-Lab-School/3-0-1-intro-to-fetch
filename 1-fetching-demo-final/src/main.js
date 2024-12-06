import './style.css'

const dogImage = document.querySelector('#dog-image');

const fetchNewDog = () => {
  // 1. Invoke fetch with an API endpoint. A promise is returned.
  const fetchPromise = fetch('https://dog.ceo/api/breeds/image/random');

  // 2. Define promise handlers with .then and .catch
  fetchPromise
    .then((response) => {
      // 3. Check that the response is ok. If it isn't throw a useful error.
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`)
      }

      // 4. Start reading the response body's ReadableStream
      const readingPromise = response.json();
      return readingPromise
    })
    .then((responseBody) => {
      // 5. When the response body is read, do something with it!
      // What you do will depend on the API you're using
      // Here, the dog.ceo API puts the image src in the responseBody.message
      dogImage.src = responseBody.message;
    })
    .catch((err) => {
      // 6. Handle Errors
      console.error(err);
    })
}

const main = () => {
  document
    .querySelector('#new-dog-image-button')
    .addEventListener('click', fetchNewDog);
}

main();