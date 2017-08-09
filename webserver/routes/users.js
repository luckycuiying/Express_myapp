var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/d2', function(req, res, next) {
  res.render('form', { 
    title: '表单验证' ,
    username: req.query.username,
    email:req.query.email,
    personinfo:req.query.personinfo,
});

});
/* post home page. */

module.exports = router;
