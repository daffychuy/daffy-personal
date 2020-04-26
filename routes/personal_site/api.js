var express = require('express');
var router = express.Router({ mergeParams: true, strict: true});
const personal = require('./personal_query');

router.get('/personal', personal.getMain);

module.exports = router;