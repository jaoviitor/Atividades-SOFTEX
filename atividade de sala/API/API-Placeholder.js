let box = document. getElementById("box");
let DATA = async () => (await fetch("https://jsonplaceholder.typicode.com/posts")).json
DataTransfer().then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})