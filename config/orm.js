var connection = require ('../config/connection');


var orm = { 
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";"; 
        connection.query (queryString, function (err, results) {
            if (err) throw err;
            cb(results); 
        })
    },
    insertOne: function(tableInput, newBurger, cb) {
        var insertBurger = "INSERT INTO " + tableInput + " VALUE " + newBurger + ";"; 
        connection.query (insertBurger, function (err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    updateOne: function(tableInput, id, condition, cb) {
        var updateBurger = "UPDATE " + tableInput + " WHERE " + id + " SET " + condition + ";"; 
        connection.query (updateBurger, function (err, results) {
            if (err) throw err;
            cb(results);
        })
}
}
module.exports = orm; 


