var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });

});

router.get('/getNotes2', function(req, res, next) {
    var callback = req.query.callback;
    res.jsonp({
        data: [{
            name: '1111'
        }, {
            name: '222'
        }, {
            name: '333'
        }]
    });
});


router.get('/getNotes', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.send({
        data: [{
            name: '1111'
        }, {
            name: '222'
        }, {
            name: '333'
        }]
    })
});
//练习离线缓存 的存储 storage
//特别注意 设置了
router.get('/storage', function(req, res, next) {
    res.cookie('name', 'koby', {httpOnly: true });
    res.render('cookie',{
        title:'cookie',name:req.cookies.name
    });
});
module.exports = router;