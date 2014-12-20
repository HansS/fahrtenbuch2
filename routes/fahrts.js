var express = require('express');
var router = express.Router();

var FahrtenCtrl = require('../controllers/fahrtencontroller');

/* /fahrten - create */
router.post('/', FahrtenCtrl.post);

/* /fahrten - read */
router.get('/name/:name',FahrtenCtrl.showByName);
router.get('/id/:id',FahrtenCtrl.showById);

/* /fahrten - update */
router.put('/',FahrtenCtrl.update)

/* /fahrten - delete */
router.delete('/:id',FahrtenCtrl.delete)

/* /fahrten - create */
router.get('/',FahrtenCtrl.get)

module.exports = router;
