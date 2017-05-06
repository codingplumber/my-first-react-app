
var movies = require['./model/movies.js'];
var moviesController - require['./controllers/movie_controllers.js'];


app.get('/movies', moviesController.getListOfMovies);


//middleware - happens on every request app.use
app.use(function(req, res, next) {
  console.log('1st middleware');
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req, res, next) {
  //do logic with request
  //if it passes your test you can call next()
  //otherwise return error
  console.log('4th middleware');
})









app.get('/movies/find' function (req, res, next) {
  console.log('queries', req.query);
  var results = [];
  for (var i = 0; i < movies.length; i++) {
    for ( var key in req.query) {
      if (movies[i][key] === req.query[key]) {
        results.push(movies[i]);
      }

    }
  }
  console.log('results');
});

app.get('/movies/:id' function(req, res, next) {
  console.log(req.params);
  for (var i = 0; i < movies.length; i++) {
    if (i.toString() === req.params.id) {
      return res.status(200).send(movies[req.params.id]);
    }
    res.status(404).send('not found');
  }
});
