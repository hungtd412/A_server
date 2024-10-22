var Test = require('../models/TestModel')

exports.home = function (req, res) {
  Test.get_all(function (data) {
    res.send({ result: data });
  });
};
