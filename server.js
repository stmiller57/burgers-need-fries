const express = require("express");
const mysql = require("mysql");
const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tatum!Football2House",
    database: "burgers_db"
});

// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
