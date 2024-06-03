import './style.css'
import { fetchNewDog } from './js/event-handlers';

const main = () => {
  document
    .querySelector('#new-dog-image-button')
    .addEventListener('click', fetchNewDog);
}

main();