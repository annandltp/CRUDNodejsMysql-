const sequelize = require("sequelize");

const db = new sequelize("project19", "root", "", {
    dialect: "mysql"
});

db.sync({});

module.exports = db;