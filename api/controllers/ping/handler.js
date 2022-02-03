const ping = async (req, res) => {
    res.apiResponse('ping pong ...')
}

module.exports = { ping }