const axios = require('axios')

let utahNewsObj = {}, southernUtahObj = {}, idahoObj = {}, hour = 0
let featuresObj = {}, usObj = {}, worldObj = {}
let politicsObj = {}, trafficObj = {}, businessObj = {}
let entertainmentObj = {}, outdoorsObj = {}, latinoObj = {}
let byuObj = {}, uofuObj = {}, utahJazzObj = {}
let usuObj = {}, rslObj = {}, nflObj = {}
let weberStObj = {}, suuObj = {}, uvuObj = {}
let moreSportsObj = {}
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
const byuURL = `https://newsapi.org/v2/everything?q=BYU&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const uofuURL = `https://newsapi.org/v2/everything?q=U%20of%20U&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const utahJazzURL = `https://newsapi.org/v2/everything?q=Utah%20Jazz&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const usuURL = `https://newsapi.org/v2/everything?q=USU&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const rslURL = `https://newsapi.org/v2/everything?q=RSL&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const nflURL = `https://newsapi.org/v2/everything?q=NFL&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const weberStURL = `https://newsapi.org/v2/everything?q=weber%20state&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const suuURL = `https://newsapi.org/v2/everything?q=SUU&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const uvuURL = `https://newsapi.org/v2/everything?q=UVU&sortBy=publishedAt&apiKey=${REACT_APP_NEWS_APIID}`
const moreSportsURL = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${REACT_APP_NEWS_APIID}`

async function getBYU() {
    const res = await axios.get(byuURL)
    
    return res.data
}
async function getUofU() {
    const res = await axios.get(uofuURL)
    
    return res.data
}
async function getUtahJazz() {
    const res = await axios.get(utahJazzURL)
    
    return res.data
}
async function getUSU() {
    const res = await axios.get(usuURL)
    
    return res.data
}
async function getRSL() {
    const res = await axios.get(rslURL)
    
    return res.data
}
async function getNFL() {
    const res = await axios.get(nflURL)
    
    return res.data
}
async function getWeberSt() {
    const res = await axios.get(weberStURL)
    
    return res.data
}
async function getSUU() {
    const res = await axios.get(suuURL)
    
    return res.data
}
async function getUVU() {
    const res = await axios.get(uvuURL)
    
    return res.data
}
async function getMoreSports() {
    const res = await axios.get(moreSportsURL)
    
    return res.data
}
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

    const hour = time.getUTCHours()
    return `${hour}`
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
            byuObj = await getBYU()
            uofuObj = await getUofU()
            utahJazzObj = await getUtahJazz()
            usuObj = await getUSU()
            rslObj = await getRSL()
            nflObj = await getNFL()
            weberStObj = await getWeberSt()
            suuObj = await getSUU()
            uvuObj = await getUVU()
            moreSportsObj = await getMoreSports()
            
            let obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj, worldObj, politicsObj, trafficObj, businessObj, entertainmentObj, outdoorsObj, latinoObj, byuObj, uofuObj, utahJazzObj, usuObj, rslObj, nflObj, weberStObj, suuObj, uvuObj, moreSportsObj }
            hour = getTime()

            res.send(obj)
        } else if (getTime() !== hour) {
            let obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj, worldObj, politicsObj, trafficObj, businessObj, entertainmentObj, outdoorsObj, latinoObj, byuObj, uofuObj, utahJazzObj, usuObj, rslObj, nflObj, weberStObj, suuObj, uvuObj, moreSportsObj }
            hour = getTime()
            
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
            byuObj = await getBYU()
            uofuObj = await getUofU()
            utahJazzObj = await getUtahJazz()
            usuObj = await getUSU()
            rslObj = await getRSL()
            nflObj = await getNFL()
            weberStObj = await getWeberSt()
            suuObj = await getSUU()
            uvuObj = await getUVU()
            moreSportsObj = await getMoreSports()
        } else {
            let obj = { utahNewsObj, southernUtahObj, idahoObj, featuresObj, usObj, worldObj, politicsObj, trafficObj, businessObj, entertainmentObj, outdoorsObj, latinoObj, byuObj, uofuObj, utahJazzObj, usuObj, rslObj, nflObj, weberStObj, suuObj, uvuObj, moreSportsObj }
            res.send(obj)
        }
    }
}