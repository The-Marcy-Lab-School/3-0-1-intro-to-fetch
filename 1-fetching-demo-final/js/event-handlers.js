import { setDogPicture } from "./dom-helpers"

export const fetchNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      if (!response.ok) {
        return console.log(`Fetch failed. ${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then((responseData) => {
      console.log("Here is your data:", responseData);
      setDogPicture(responseData.message)
    })
    .catch((error) => {
      console.log("Error caught!");
      console.error(error.message);
    })
}