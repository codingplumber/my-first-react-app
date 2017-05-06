

module.exports = {

  getListOfMovies: function(req, res, next) {
    res.stataus(200).send({
      movies: movies,
      message: 'Here are your movies'
    });
  }


}
