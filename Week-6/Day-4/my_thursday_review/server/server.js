const express = require('express')
      ,bodyParser = require('body-parser')
      ,massive = require('massive')
      ,cors = require('cors'); //blocks things from other ports coming in

const app = module.exports = express();

const corsOptions = {
  origin: 'http://localhost:3000', //tells server its ok to accept things from this url
};

const massiveInstance = massive.connectSync('connectionString: postgres://postgres@localhost/thursday_review');

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + './../public')); // ./ = current directory, ../ = go out one folder

const port = 3000;


app.post('/newuser', serverCtrl.newUser) //from mainSrvc


//db folder needs to be on the root folder, not burried
app.set('db', massiveInstance);
const serverCtrl = require('./serverCtrl');
const db = app.get('db');





app.listen(port, console.log('Listening on port:', port));
