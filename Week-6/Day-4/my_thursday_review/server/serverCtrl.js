const app = require('./server')
    , db = app.get('db');

module.exports = {

  newUser: function(req, res) {
    console.log(req.body.newUserObj);
    let firstName = req.body.newUserObj.firstname //newUserObj is from the mainSrvc controller
      , lastName = req.body.newUserObj.lastname
      , username = req.body.newUserObj.username
      , pass = req.body.newUserObj.password;
    db.new_user([username, pass, firstName, lastName], function(err, user) { //user is the response from the database
      !err ? res.status(200).send(user) : res.status(500).send(err) // ? means then, : means else; this is a turnary statement, it needs if and else
    });
  }

};
