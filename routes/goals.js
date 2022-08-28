var express = require('express');
var router = express.Router();

let goals = [
  {
    "id": "1",
    "details": "Travel to Mexico",
    "period": "Month",
    "events": 1,
    "icon": "✈️",
    "deadline": "2030-01-01",
    "completed": 40
  },
  {
    "id": "2",
    "details": "Read books",
    "period": "Month",
    "events": 1,
    "icon": "📖",
    "deadline": "2030-01-01",
    "completed": 40
  },
  {
    "id": "3",
    "details": "Bike",
    "period": "Month",
    "events": 1,
    "icon": "🚲",
    "deadline": "2030-01-01",
    "completed": 40
  }
]

/* GET goals listing. */
router.get('/', function(req, res, next) {
  res.send(goals)
});

/* GET goal by id. */
router.get('/:id', function(req, res, next) {
  const goalId = req.params.id
  const goal = goals.find(item => item.id === goalId)
  if (!goal) {
    return res.sendStatus(404)
  }
  res.send(goal)
});

/* POST create goal. */
router.post('/', function(req, res, next) {
  const goal = req.body

  const exists = goals.find(item => item.id === goal.id)

  if (exists) {
    return res.send('This goal id already exists')
  }

  goals.push(goal)
  res.status(201)
  res.send(goal)
});

/* PUT update goal. */
router.put('/:id', function(req, res, next) {
  const goalId = req.params.id
  const goal = req.body
  
  if (goal.id !== goalId) {
    return res.sendStatus(409)
  }

  const index = goals.findIndex(item => item.id === goalId)

  if (index === -1) {
    return res.sendStatus(404)
  }

  goals[index] = goal
  res.send(goal)

});

/* PUT delete goal. */
router.delete('/:id', function(req, res, next) {
  const goalId = req.params.id
  const index = goals.findIndex(item => item.id === goalId)

  if (index === -1) {
    return res.sendStatus(404)
  }
  goals.splice(index, 1)
  res.sendStatus(204)
});

module.exports = router;
