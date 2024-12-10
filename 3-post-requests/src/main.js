const addNewUserToList = (data) => {
  const { name, job, createdAt, id } = data;
  const ul = document.querySelector('#post-container>.data-container');
  const li = document.createElement('li')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')
  h3.textContent = `${name}, ${job}`
  p.textContent = `Created at ${createdAt} with id ${id}`
  li.append(h3, p)
  ul.append(li);
}

const handleFormSubmit = (e) => {
  // normal form stuff to get the form inputs
  e.preventDefault();
  const form = e.target;

  const newUser = {
    name: form.username.value,
    job: form.job.value
  };

  form.reset();

  /* Before we send the fetch, configure the request options 
  - method: the type of request, this is a POST request
  - body: the data to send, we want to JSON.stringify our user object
  - headers: what kind of data are we sending, JSON data
  */
  const options = {
    method: "POST",                      // The type of HTTP request
    body: JSON.stringify(newUser),       // The data to be sent to the API
    headers: {
      "Content-Type": "application/json" // The format of the body's data
    }
  }

  // This is a good API to practice GET/POST/PATCH/DELETE requests
  const url = 'https://reqres.in/api/users';

  // Notice that the options object is provided as the second arg to fetch
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`)
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Here is your new user:", responseData);
      addNewUserToList(responseData);
    })
    .catch((error) => {
      console.log("Error caught!");
      console.error(error.message);
    });
}

const main = () => {
  document
    .querySelector('#new-user-form')
    .addEventListener('submit', handleFormSubmit)
}

main();