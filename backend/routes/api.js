const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/startGame', apiController.startGame)

router.post('/checkSuccess', apiController.checkSuccess)

router.post('/addToLeaderboard', apiController.pushToLeaderboard)
router.get('/leaderboardData', apiController.getLeaderboardData)

module.exports = router
