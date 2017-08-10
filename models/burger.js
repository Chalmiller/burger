var orm = require("../config/orm.js");

var burger = {
    selectWhere: function(cb) {
        orm.selectWhere("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne("burgers", function(res) {
            cb(res);
        });
    },
    updateOne: function(burger_name, devoured, cb) {
        orm.updateOne("burgers", function(res) {
            cb(res);
        });
    }
};

module.exports = burger;