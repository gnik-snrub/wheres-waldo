exports.startGame = async(req, res) => {
  res.status(200).json({startTime: new Date().getTime()})
}

