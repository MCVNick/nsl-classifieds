function getTime() {
    const time = new Date()

    const hours = time.getUTCHours()
    return `${hours > 12 ? (hours - 12) : hours}:${time.getUTCMinutes()} ${hours >= 12 ? 'pm' : 'am'}`
}

module.exports = {
    handleCalls: async (req, res) => {
        const db = req.app.get('db')
        const time = getTime()

        let getCalls = await db.weather.get_calls()
        getCalls = getCalls[0]

        if (getCalls.time !== time) {
            db.weather.increment_calls({time})
            res.sendStatus(200)
        } else if (getCalls < 2) {
            db.weather.reset_calls({time})
            res.sendStatus(200)
        }
        else {
            res.sendStatus(409)
        }
    }
}