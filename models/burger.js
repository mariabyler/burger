var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cb) {
    orm.insertOne("burgers", 'burger_name', 'devoured', function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    var condition = "id =" + id;  
    orm.updateOne("burgers", id, {devoured: true}, function(res) {
      cb(res);
    });
  },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller 
module.exports = burger;

