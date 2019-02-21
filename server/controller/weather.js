const axios = require('axios')

let saltLakeObj = {}, provoObj = {}, ogdenObj = {}, stGeorgeObj = {}, loganObj = {}
const { REACT_APP_APIID } = process.env
const saltLakeURL = `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5781004&appid=${REACT_APP_APIID}`
const provoURL = `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5781004&appid=${REACT_APP_APIID}`
const ogdenURL = `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5779206&appid=${REACT_APP_APIID}`
const stGeorgeURL = `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5546220&appid=${REACT_APP_APIID}`
const loganURL = `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5777544&appid=${REACT_APP_APIID}`

async function getSaltLake() {
    const res = await axios.get(`https://${saltLakeURL}`)
    
    return res.data
}

async function getProvo() {
    const res = await axios.get(`https://${provoURL}`)

    return res.data
}

async function getOgden() {
    const res = await axios.get(`https://${ogdenURL}`)

    return res.data
}

async function getStGeorge() {
    const res = await axios.get(`https://${stGeorgeURL}`)

    return res.data
}

async function getLogan() {
    const res = await axios.get(`https://${loganURL}`)

    return res.data
}

function getTime() {
    const time = new Date()

    const hours = time.getUTCHours()
    return `${hours > 12 ? (hours - 12) : hours} ${hours >= 12 ? 'pm' : 'am'}`
}

module.exports = {
    handleCalls: async (req, res) => {
        const time = getTime()
        const db = req.app.get('db')

        let getCalls = await db.weather.get_calls()
        getCalls = getCalls[0]

        if (getCalls.time !== time || Object.keys(saltLakeObj).length < 1) {
            saltLakeObj = await getSaltLake()
            provoObj = await getProvo()
            ogdenObj = await getOgden()
            stGeorgeObj = await getStGeorge()
            loganObj = await getLogan()

            const obj = { saltLakeObj, provoObj, ogdenObj, stGeorgeObj, loganObj }
            db.weather.reset_calls({time})
            res.send(obj)
        } else {
            const obj = { saltLakeObj, provoObj, ogdenObj, stGeorgeObj, loganObj }
            res.send(obj)
        }
    }
}