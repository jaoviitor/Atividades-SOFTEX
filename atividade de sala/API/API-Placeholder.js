const options ={
    method: "GET",
    mode: "cors",
    caches: "default"
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))