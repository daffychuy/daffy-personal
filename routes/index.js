var express = require('express');
var router = express.Router({ mergeParams: true, strict: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('some api...');
});

router.use('/personal/v1/', require('./personal_site/api'));

module.exports = router;