const LeaderboardEntry = require('../models/leaderboardEntry')

exports.startGame = async(req, res) => {
  res.status(200).json({startTime: new Date().getTime()})
}

exports.checkSuccess = async(req, res) => {
  const successLocations = [
    {image: 1, x1: 23, x2: 29, y1: 25, y2: 35},
    {image: 1, x1: 76, x2: 79, y1: 63, y2: 74},
    {image: 2, x1: 19, x2: 36, y1: 38, y2: 56},
    {image: 2, x1: 64, x2: 76, y1: 32, y2: 48},
    {image: 3, x1: 36, x2: 41, y1: 23, y2: 38},
    {image: 3, x1: 76, x2: 88, y1: 64, y2: 78}
  ]
  res.status(200)
    .json({
      endTime: new Date().getTime(),
      ...successLocations[req.body.selectedImageNumber]
    })
}

exports.pushToLeaderboard = async(req, res) => {
  const newLeaderboardEntry = new LeaderboardEntry({
    name: req.body.name,
    time: req.body.time
  })
  await newLeaderboardEntry.save()
  res.json({id: newLeaderboardEntry._id})
}

