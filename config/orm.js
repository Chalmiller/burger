var connection = require("../config/connection.js");

var orm = {
    selectWhere: function(table, cb) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [table], function(err, result) {
            return result;
        });
    }
    insertOne: function(table, burger_name, cb) {
        var queryString = "INSERT INTO " + table + "(burger_name) VALUES " + name;

        connection.query(queryString, [table, name], function(err, result) {
            return result;
        });
    }
    updateOne: function(table, burger_name, devoured, cb) {
        var queryString = "UPDATE " + table + "SET " + devoured + "= TRUE WHERE burger_name = " + burger_name;

        connection.query(queryString, [table, burger_name, devoured], function(err, result) {
            return result;
        });
    }
};

module.exports = orm;