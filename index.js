const path = require('path');
const express = require('express');

const app = express();

const home = path.resolve(__dirname, './index.html');
// console.log(home)

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We generally start with the base url
// Here we are sending a static file index.html to http://localhost:3000
app.get('/', (req, res) => res.sendFile(home));

// see the front-end @ https://github.com/hi-matbub/express-example/blob/cef5c9246b1bfd628aef04b4f863a519163b0876/index.html#L43-L60
app.get('/api/hello-world', (req, res) => res.json('Hello from express!'));

// see the front-end @ https://github.com/hi-matbub/express-example/blob/main/index.html#L62-L92
app.post('/api/user-input', (req, res) => res.json(req.body));

// .listen() is what runs our server
app.listen(3000, () => console.log('Listening on localhost:3000'));
