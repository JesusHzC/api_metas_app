var express = require("express");
var router = express.Router();
const { getAll, getById, create, update, deleteItem } = require("../db/request");

/* GET goals listing. */
router.get("/", function (req, res, next) {
  getAll("goals", (error, result) => {
    if (error) next(error);

    res.send(result);
  });
});

/* GET goal by id. */
router.get("/:id", function (req, res, next) {
  const goalId = req.params.id;
  
  getById("goals", goalId, (error, result) => {
    if (error) next(error);

    res.send(result);
  })
});

/* POST create goal. */
router.post("/", function (req, res, next) {
  const goal = req.body;

  create("goals", goal, (error, result) => {
    if (error) next(error);

    res.status(201);
    res.send(goal);
  })
});

/* PUT update goal. */
router.put("/:id", function (req, res, next) {
  const goalId = req.params.id;
  const goal = req.body;

  update("goals", goalId, goal, (error, result) => {
    if (error) next(error);
    
    res.send(goal);
  })

});

/* PUT delete goal. */
router.delete("/:id", function (req, res, next) {
  const goalId = req.params.id;
  
  deleteItem("goals", goalId, (error, result) => {
    if (error) next(error);
    
    res.sendStatus(204);
  })

});

module.exports = router;
