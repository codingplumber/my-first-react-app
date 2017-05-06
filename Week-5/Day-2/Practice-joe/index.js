const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let firstName = 'Jason';

let lastName = ['Stickel'];

app.get('/name', (req, res) => {
  res.status(200).send(lastName);
});

app.put('/name/change', (req, res) => {
  firstName = 'Frank';
  res.status(200).send(firstName);
});

app.post('/name', (req, res) => {
  console.log(req);

  lastname.push(req.body.name);

  res.status(200).json(lastName);
});




const PORT = 3535;
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})
