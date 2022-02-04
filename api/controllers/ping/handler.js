const ping = async (req, res) => {
    res.apiResponse('ping pong ...ping')
}

module.exports = { ping }