var express = require('express');
const DatabaseManager = require('../controllers/DatabaseManager');
const Helpers = require('../controllers/Helpers');
var router = express.Router();

let userCookies = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  if(req.cookies!=undefined && req.cookies!=null && req.cookies.user!=undefined)
  {
    for(let data of userCookies)
    {
      if(data.cookie==req.cookies.user)
      {
        res.send(`Hello ${data.username}!`);
        break;
      }
    }
  }
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  if(DatabaseManager.hasUser(req.body.username, req.body.password))
  {
    let cookie = Helpers.makeid(20)
    res.cookie("user", cookie);
    userCookies.push({username:req.body.username, cookie:cookie});
    res.send(`Hello ${req.body.username}!`);
  }
  else
    res.redirect('/');
})

router.get("/api", function(req, res, next) {
  let friends = ['Rahim', 'Sanjar']
  res.send(friends);
})

module.exports = router;
