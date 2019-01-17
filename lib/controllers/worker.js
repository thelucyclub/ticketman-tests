// Generated by CoffeeScript 1.8.0
(function() {
  var Worker, mongoose;

  mongoose = require('mongoose');

  Worker = mongoose.model('Worker');

  exports.index = function(req, res, next) {
    Worker.find(function(err, workers) {
      if (err != null) {
        return next(err);
      }
      res.render('workers/index', {
        workers: workers
      });
    });
  };

  exports.create = function(req, res, next) {
    var ticket;
    ticket = new Worker(req.body);
    ticket.save((function(_this) {
      return function(err) {
        if (err != null) {
          return next(err);
        }
        switch (req.params.format) {
          case 'json':
            res.json(ticket);
            break;
          default:
            res.redirect("/workers");
        }
      };
    })(this));
  };

}).call(this);