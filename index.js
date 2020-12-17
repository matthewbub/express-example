const path = require('path');
const express = require('express');

const app = express();

const home = path.resolve(__dirname, './index.html');
// console.log(home)

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We generally start with the base url
// Here we are sending a static file index.html
app.get('/', (req, res) => res.sendFile(home));

app.get('/api/hello-world', (req, res) => res.json('Hello from express!'));

app.post('/api/user-input', (req, res) => res.json(req.body));

// .listen() is what runs our server
app.listen(3000, () => console.log('Listening on localhost:3000'));
