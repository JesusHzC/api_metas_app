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
  res.send('metas');
});

/* POST create goal. */
router.post('/', function(req, res, next) {
  res.send('metas');
});

/* PUT update goal. */
router.put('/:id', function(req, res, next) {
  res.send('metas');
});

/* PUT delete goal. */
router.delete('/:id', function(req, res, next) {
  res.send('metas');
});

module.exports = router;
