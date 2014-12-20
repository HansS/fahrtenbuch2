var mongoose = require('mongoose');
var _ = require('underscore');

require('../models/fahrt');
var Fahrt = mongoose.model('Fahrt');

/* /fahrts - create */
exports.post = function (req, res) {

  var fahrt = new Fahrt(req.body);
  fahrt.save();
  res.jsonp(fahrt);

};

/* /fahrts - read by name*/
exports.showByName = function (req,res) {
    Fahrt.loadByName(req.params.name,function (error,fahrt) {
        res.jsonp(fahrt);
    });

}

/* /fahrts - read by id*/
exports.showById = function (req,res) {
  Fahrt.loadById(req.params.id,function (error,fahrt) {
    res.jsonp(fahrt);
  });

}

/* /fahrts - update */
exports.update = function (req,res) {
  Fahrt.load(req.params.name,function (error,fahrt) {
    fahrt = _.extend(fahrt,req.body)

    fahrt.save(function (error) {
      res.jsonp(fahrt);

    })
  });

}

/* /fahrts - delete */
exports.delete = function (req,res) {
  Fahrt.loadById(req.params.id,function (error,fahrt) {
    fahrt.remove(function (error) {
      if (error) {
          console.log(error);
          return;
      }
      res.jsonp(fahrt);

    })
  });

}


/* /fahrts - list */
exports.get = function (req ,res) {

  Fahrt.find().exec(function (error,fahrts) {
    'use strict';
    res.jsonp(fahrts);

  })

};





