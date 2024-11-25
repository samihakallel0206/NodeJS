const http= require('http')
let PORT=5000;
http.createServer((request, response) => {
    response.end("<h1>Hello Node !!! </h1>")
  }).listen(5000)
 ;
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);