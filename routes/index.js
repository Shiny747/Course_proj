var express = require('express');
const DatabaseManager = require('../controllers/DatabaseManager');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('index' );
});
router.post("/", function(req, res, next) {
  if(req.body.name !=undefined && req.body.phone !=undefined)
  DatabaseManager.addUser(req.body.name, req.body.phone );
    res.render('index');
  });

module.exports = router;
