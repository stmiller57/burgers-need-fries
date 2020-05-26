// Require express and create router
const express = require("express");
const router = express.Router();

// Import burger model to use database functions
const burger = require("../models/burger.js");

// Create routes 
// Route to get all burgers
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Route to add new burgers
router.post("/api/burgers", (req, res) => {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured], (result) => {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});

// Route to update burgers
router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;