var express = require('express');
var router = express.Router();
var videodata = require("../videodata.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express',
      videodata:videodata
  });
});

router.get('/test/:id',function (req,res,next) {

   res.render('test',{output:req.params.id});
});

module.exports = router;
