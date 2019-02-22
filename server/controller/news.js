const axios = require('axios')

let utahNewsObj = {}, minutes = 0
const { REACT_APP_NEWS_APIID } = process.env
const utahNewsURL = `https://newsapi.org/v2/everything?q=utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`

async function getUtahNews() {
    const res = await axios.get(utahNewsURL)
    
    return res.data
}

function getTime() {
    const time = new Date()

    const min = time.getUTCMinutes()
    return `${min}`
}

module.exports = {
    getNews: async (req, res) => {

        if (getTime() - minutes >= 12 || Object.keys(utahNewsObj).length < 1) {
            utahNewsObj = await getUtahNews()
            
            const obj = { utahNewsObj }
            minutes = getTime()

            res.send(obj)
        } else {
            const obj = { utahNewsObj }
            res.send(obj)
        }
    }
}