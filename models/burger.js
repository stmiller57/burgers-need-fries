const orm = require("./config/orm.js");

orm.selectAll("table", "burger_name", "devoured");

orm.insertOne("burger_name", "devoured");

orm.updateOne("burger_name", "devoured");

module.exports = burger;