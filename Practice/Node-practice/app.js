var express = require('express');
var app = express();

app.listen(3000);

app.get('/', function(request, response) {
    response.send("http://pokeapi.co/api/v2/pokemon");
});

app.get('/api', function(request, response) {
    response.send({name:"Raymond",age:40});
});
