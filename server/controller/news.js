const axios = require('axios')

let utahNewsObj = {}, southernUtahObj = {}, idahoObj = {}, minutes = 0
let featuresObj = {}, usObj = {}, worldObj = {}
let politicsObj = {}, trafficObj = {}, businessObj = {}
let entertainmentObj = {}, outdoorsObj = {}, latinoObj = {}
const { REACT_APP_NEWS_APIID } = process.env
const utahNewsURL = `https://newsapi.org/v2/everything?q=utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const southernUtahURL = `https://newsapi.org/v2/everything?q=southern%20utah&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const idahoURL = `https://newsapi.org/v2/everything?q=idaho&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const featuresURL = `https://newsapi.org/v2/everything?q=utah&apiKey=${REACT_APP_NEWS_APIID}`
const usURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_APP_NEWS_APIID}`
const worldURL = `https://newsapi.org/v2/top-headlines?q=world&apiKey=${REACT_APP_NEWS_APIID}`
const politicsURL = `https://newsapi.org/v2/top-headlines?q=politic&apiKey=${REACT_APP_NEWS_APIID}`
const trafficURL = `https://newsapi.org/v2/everything?q=traffic&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const businessURL = `https://newsapi.org/v2/top-headlines?category=business&apiKey=${REACT_APP_NEWS_APIID}`
const entertainmentURL = `https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${REACT_APP_NEWS_APIID}`
const outdoorsURL = `https://newsapi.org/v2/everything?q=outdoor&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const latinoURL = `https://newsapi.org/v2/everything?q=latino&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`

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
async function getWorld() {
    const res = await axios.get(worldURL)
    
    return res.data
}async function getPolitics() {
    const res = await axios.get(politicsURL)
    
    return res.data
}
async function getTraffic() {
    const res = await axios.get(trafficURL)
    
    return res.data
}
async function getBusiness() {
    const res = await axios.get(businessURL)
    
    return res.data
}
async function getEntertainment() {
    const res = await axios.get(entertainmentURL)
    
    return res.data
}
async function getOutdoors() {
    const res = await axios.get(outdoorsURL)
    
    return res.data
}
async function getLatino() {
    const res = await axios.get(latinoURL)
    
    return res.data
}

function getTime() {
    const time = new Date()

    const min = time.getUTCMinutes()
    return `${min}`
}

module.exports = {
    getNews: async (req, res) => {

        if (Object.keys(utahNewsObj).length < 1) {
            utahNewsObj = await getUtahNews()
            southernUtahObj = await getSouthernUtah()
            idahoObj = await getIdaho()
            featuresObj = await getFeatures()
            usObj = await getUS()
            worldObj = await getWorld()
            politicsObj = await getPolitics()
            trafficObj = await getTraffic()
            businessObj = await getBusiness()
            entertainmentObj = await getEntertainment()
            outdoorsObj = await getOutdoors()
            latinoObj = await getLatino()
            
            const obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj, worldObj, politicsObj, trafficObj, businessObj, entertainmentObj, outdoorsObj, latinoObj }
            minutes = getTime()

            res.send(obj)
        } else if (getTime() - minutes >= 30) {
            const obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj, worldObj, politicsObj, trafficObj, businessObj, entertainmentObj, outdoorsObj, latinoObj }
            minutes = getTime()
            
            res.send(obj)
            
            utahNewsObj = await getUtahNews()
            southernUtahObj = await getSouthernUtah()
            idahoObj = await getIdaho()
            featuresObj = await getFeatures()
            usObj = await getUS()
            worldObj = await getWorld()
            politicsObj = await getPolitics()
            trafficObj = await getTraffic()
            businessObj = await getBusiness()
            entertainmentObj = await getEntertainment()
            outdoorsObj = await getOutdoors()
            latinoObj = await getLatino()
        } else {
            const obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj, worldObj, politicsObj, trafficObj, businessObj, entertainmentObj, outdoorsObj, latinoObj }
            res.send(obj)
        }
    }
}