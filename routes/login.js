let express = require('express');
const DatabaseManager = require('../controllers/DatabaseManager');
let router = express.Router();


router.get('/', function(req, res, next) {
  res.render("login");
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  DatabaseManager.append(req.body);
  res.redirect('index')
})
module.exports = router;
