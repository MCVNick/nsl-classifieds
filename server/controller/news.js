const axios = require('axios')

let utahNewsObj = {}, southernUtahObj = {}, idahoObj = {}, minutes = 0
let featuresObj = {}, usObj = {}
const { REACT_APP_NEWS_APIID } = process.env
const utahNewsURL = `https://newsapi.org/v2/everything?q=utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const idahoURL = `https://newsapi.org/v2/everything?q=idaho&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const featuresURL = `https://newsapi.org/v2/everything?q=utah&apiKey=${REACT_APP_NEWS_APIID}`
const usURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_NEWS_APIID}`
// const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
// const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
// const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
// const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
// const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
// const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
// const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`

async function getUtahNews() {
    const res = await axios.get(utahNewsURL)
    
    return res.data
}
async function getSouthernUtah() {
    const res = await axios.get(southernUtahURL)
    
    return res.data
}
async function getIdaho() {
    const res = await axios.get(idahoURL)
    
    return res.data
}
async function getFeatures() {
    const res = await axios.get(featuresURL)
    
    return res.data
}
async function getUS() {
    const res = await axios.get(usURL)
    
    return res.data
}

function getTime() {
    const time = new Date()

    const min = time.getUTCMinutes()
    return `${min}`
}

module.exports = {
    getNews: async (req, res) => {

        if (getTime() - minutes >= 30 || Object.keys(utahNewsObj).length < 1) {
            utahNewsObj = await getUtahNews()
            southernUtahObj = await getSouthernUtah()
            idahoObj = await getIdaho()
            featuresObj = await getFeatures()
            usObj = await getUS()
            
            const obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj }
            minutes = getTime()

            res.send(obj)
        } else {
            const obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj }
            res.send(obj)
        }
    }
}