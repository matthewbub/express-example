const path = require('path');
const app = require('express')();

const home = path.resolve(__dirname, './index.html');
// console.log(home)


// We generally start with the base url
// Here we are sending a static file index.html
app.get('/', (req, res) => res.sendFile(home))

app.get('/api', (req, res) => res.json('Hello from express!'))


// .listen() is what runs our server
app.listen(3000, () => console.log('Listening on localhost:3000'))