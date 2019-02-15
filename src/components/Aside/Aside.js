import React from 'react'
// import { connect } from 'react-redux'
// import { withRouter, Link } from 'react-router-dom'
// import axios from 'axios'

import './Aside.scss'

function handleExpand(name1, name2) {
    let rotateArr = document.getElementsByClassName('aside-expand-arrow')
    let rotateMarket = document.getElementsByClassName('aside-expand-arrow-marketplace')
    let first = document.getElementById(name1)
    let second = document.getElementById(name2)
    let allUnsortedTabs = ['aside-news-h2s', 'aside-sports-h2s', 'aside-brandview-h2s', 'aside-tv-h2s', 'aside-radio-h2s', 'aside-obituaries-h2s', 'aside-weather-h2s']
    let allMarketplaceTabs = ['aside-classifieds-h2s', 'aside-cars-h2s', 'aside-homes-h2s', 'aside-jobs-h2s', 'aside-services-h2s']
    
    if(allUnsortedTabs.includes(name1)) {
        for(let x = 0; x < rotateArr.length; x++) {
            if(rotateArr[x].classList.contains('rotate90')) {
                if(rotateArr[x].id !== name2) {
                    rotateArr[x].classList.remove('rotate90')
                    document.getElementById('aside-news-h2s')
                }
            }
        }
        
        allUnsortedTabs.forEach(elementName => {
            if(elementName !== name1) {
                document.getElementById(elementName).classList.remove(elementName)
            }
        });
        
        if(first.classList.contains(name1)) {
            first.classList.remove(name1)
        }
        else {
            first.classList.add(name1)
        }
        
        if(second.classList.contains('rotate90')) {
            second.classList.remove('rotate90')
        }
        else {
            second.classList.add('rotate90')
        }
    }
    else {
        for(let x = 0; x < rotateMarket.length; x++) {
            if(rotateMarket[x].classList.contains('rotate90')) {
                if(rotateMarket[x].id !== name2) {
                    rotateMarket[x].classList.remove('rotate90')
                    document.getElementById('aside-news-h2s')
                }
            }
        }
        
        allMarketplaceTabs.forEach(elementName => {
            if(elementName !== name1) {
                document.getElementById(elementName).classList.remove(elementName)
            }
        });
        
        if(first.classList.contains(name1)) {
            first.classList.remove(name1)
        }
        else {
            first.classList.add(name1)
        }
        
        if(second.classList.contains('rotate90')) {
            second.classList.remove('rotate90')
        }
        else {
            second.classList.add('rotate90')
        }
    }
    
}

function Aside(props) {
    return (
        <aside id='aside-nav' className='aside-nav aside-flex-row'>
            <div className='aside-flex-column'>
                <button className='transparent x-line' onClick={() => { props.expandAsideNav(); }}>
                    <div className='x-line-one'></div>
                    <div className='x-line-two'></div>
                </button>
                <div className='aside-content-parent'>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-news-h2s', 'aside-news-span')}>
                        <h1 className='aside-flex-row'>News <span id='aside-news-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-news-h2s'>
                            <h2>Utah</h2>
                            <h2>Southern Utah</h2>
                            <h2>Idaho</h2>
                            <h2>Features</h2>
                            <h2>U.S.</h2>
                            <h2>World</h2>
                            <h2>Politics</h2>
                            <h2>Traffic</h2>
                            <h2>Business</h2>
                            <h2>Entertainment</h2>
                            <h2>Outdoors</h2>
                            <h2>Latino</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-sports-h2s', 'aside-sports-span')}>
                        <h1 className='aside-flex-row'>Sports <span id='aside-sports-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-sports-h2s'>
                            <h2>BYU</h2>
                            <h2>U of U</h2>
                            <h2>Utah Jazz</h2>
                            <h2>USU</h2>
                            <h2>RSL</h2>
                            <h2>Prep</h2>
                            <h2>Pickem</h2>
                            <h2>NFL</h2>
                            <h2>Weber St.</h2>
                            <h2>SUU</h2>
                            <h2>UVU</h2>
                            <h2>Stats/Scores</h2>
                            <h2>Great Clips of the Week</h2>
                            <h2>More</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-brandview-h2s', 'aside-brandview-span')}>
                        <h1 className='aside-flex-row'>Brandview <span id='aside-brandview-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-brandview-h2s'>
                            <h2>Robert J DeBry</h2>
                            <h2>U of U Health</h2>
                            <h2>MountainStar Healthcare</h2>
                            <h2>Steward Healthcare</h2>
                            <h2>Intermountain Healthcare</h2>
                            <h2>Salt Lake Chamber</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-tv-h2s', 'aside-tv-span')}>
                        <h1 className='aside-flex-row'>TV <span id='aside-tv-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-tv-h2s'>
                            <h2>Watch Live</h2>
                            <h2>Meet Our Team</h2>
                            <h2>Contests & Promotions</h2>
                            <h2>KSL Investigators</h2>
                            <h2>High 5</h2>
                            <h2>Studio 5</h2>
                            <h2>Outdoors with Adam Eakle</h2>
                            <h2>Your Life Your Health</h2>
                            <h2>Wednesday's Child</h2>
                            <h2>Read Today</h2>
                            <h2>Program Guide</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-radio-h2s', 'aside-radio-span')}>
                        <h1 className='aside-flex-row'>Radio <span id='aside-radio-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-radio-h2s'>
                            <h2>Listen Live</h2>
                            <h2>Story Audio</h2>
                            <h2>KSL Schedule</h2>
                            <h2>Meet Our Team</h2>
                            <h2>Contests & Promotions</h2>
                        </div>
                    </div>
                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row'>Live</h1>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-obituaries-h2s', 'aside-obituaries-span')}>
                        <h1 className='aside-flex-row'>Obituaries <span className='aside-new-tag'>New</span><span id='aside-obituaries-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-obituaries-h2s'>
                            <h2>Create Life Story</h2>
                            <h2>My Life Story</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-weather-h2s', 'aside-weather-span')}>
                        <h1 className='aside-flex-row'>Weather <span id='aside-weather-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-weather-h2s'>
                            <h2>VORTEX</h2>
                            <h2>Microcast</h2>
                            <h2>Current Conditions</h2>
                            <h2>Cameras</h2>
                            <h2>Photo Contest</h2>
                            <h2>Ski Report</h2>
                            <h2>Snowpack</h2>
                            <h2>Weather Alerts</h2>
                            <h2>Outdoor Weather Planner</h2>
                            <h2>Air Quality</h2>
                            <h2>Weather Works</h2>
                        </div>
                    </div>

                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row aside-big-header'>MARKETPLACE</h1>
                    </div>

                    <div className='aside-content-single' onClick={() => handleExpand('aside-classifieds-h2s', 'aside-classifieds-span')}>
                        <h1 className='aside-flex-row'>Classifieds <span id='aside-classifieds-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-classifieds-h2s'>
                            <h2>My Listings</h2>
                            <h2>My Favorites</h2>
                            <h2>Create Listing</h2>
                            <h2>Support</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-cars-h2s', 'aside-cars-span')}>
                        <h1 className='aside-flex-row'>Cars <span id='aside-cars-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-cars-h2s'>
                            <h2>My Listings</h2>
                            <h2>My Favorites</h2>
                            <h2>Saved Searches</h2>
                            <h2>Create Listing</h2>
                            <h2>Support</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-homes-h2s', 'aside-homes-span')}>
                        <h1 className='aside-flex-row'>Homes <span id='aside-homes-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-homes-h2s'>
                            <h2>My Listings</h2>
                            <h2>My Favorites</h2>
                            <h2>Create Listing</h2>
                            <h2>Support</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-jobs-h2s', 'aside-jobs-span')}>
                        <h1 className='aside-flex-row'>Jobs <span id='aside-jobs-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-jobs-h2s'>
                            <h2>My Listings</h2>
                            <h2>My Favorites</h2>
                            <h2>Saved Searches</h2>
                            <h2>Create Listing</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-services-h2s', 'aside-services-span')}>
                        <h1 className='aside-flex-row'>Support <span id='aside-services-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-services-h2s'>
                            <h2>My Ads</h2>
                            <h2>List a Business</h2>
                            <h2>Support</h2>
                        </div>
                    </div>
                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row'>Deals</h1>
                    </div>

                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row aside-big-header'>ACCOUNT</h1>
                    </div>

                    <div className='aside-account-buttons-parent'>
                        <button className='blue-button'>Login</button>
                        <button className='transparent'>Create Account <span className='carrots'>>></span></button>
                    </div>
                </div>
            </div>
        </aside >
    )
}

// function logout(props) {
//     axios.post('/auth/logout')
//         .then(res => {
//             props.updateUser({ id: 0 })
//             props.history.push('/')
//         })
// }

export default Aside
