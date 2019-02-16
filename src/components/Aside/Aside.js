import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import { updateUser } from './../../ducks/reducer'

import './Aside.scss'

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
                        <h1 className='aside-flex-row'><Link to='/' onClick={() => props.expandAsideNav()}>News</Link> <span id='aside-news-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-news-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()} onClick={() => props.expandAsideNav()}>Utah</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Southern Utah</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Idaho</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Features</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>U.S.</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>World</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Politics</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Traffic</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Business</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Entertainment</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Outdoors</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Latino</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-sports-h2s', 'aside-sports-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Sports</a> <span id='aside-sports-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-sports-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>BYU</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>U of U</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Utah Jazz</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>USU</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>RSL</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Prep</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Pickem</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>NFL</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Weber St.</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>SUU</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>UVU</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Stats/Scores</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Great Clips of the Week</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>More</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-brandview-h2s', 'aside-brandview-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Brandview</a> <span id='aside-brandview-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-brandview-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Robert J DeBry</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>U of U Health</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>MountainStar Healthcare</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Steward Healthcare</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Intermountain Healthcare</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Salt Lake Chamber</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-tv-h2s', 'aside-tv-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>TV</a> <span id='aside-tv-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-tv-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Watch Live</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Meet Our Team</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Contests & Promotions</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>KSL Investigators</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>High 5</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Studio 5</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Outdoors with Adam Eakle</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Your Life Your Health</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Wednesday's Child</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Read Today</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Program Guide</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-radio-h2s', 'aside-radio-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Radio</a> <span id='aside-radio-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-radio-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Listen Live</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Story Audio</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>KSL Schedule</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Meet Our Team</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Contests & Promotions</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Live</a></h1>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-obituaries-h2s', 'aside-obituaries-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Obituaries</a><span className='aside-new-tag'>New</span><span id='aside-obituaries-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-obituaries-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Create Life Story</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Life Story</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-weather-h2s', 'aside-weather-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Weather</a><span id='aside-weather-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-weather-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>VORTEX</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Microcast</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Current Conditions</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Cameras</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Photo Contest</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Ski Report</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Snowpack</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Weather Alerts</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Outdoor Weather Planner</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Air Quality</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Weather Works</a></h2>
                        </div>
                    </div>

                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row aside-big-header'>MARKETPLACE</h1>
                    </div>

                    <div className='aside-content-single' onClick={() => handleExpand('aside-classifieds-h2s', 'aside-classifieds-span')}>
                        <h1 className='aside-flex-row'><Link to='/classifieds' onClick={() => props.expandAsideNav()}>Classifieds</Link><span id='aside-classifieds-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-classifieds-h2s'>
                            <h2>My Listings</h2>
                            <h2>My Favorites</h2>
                            <h2>Create Listing</h2>
                            <h2>Support</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-cars-h2s', 'aside-cars-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Cars</a><span id='aside-cars-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-cars-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Listings</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Favorites</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Saved Searches</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Create Listing</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Support</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-homes-h2s', 'aside-homes-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Homes</a><span id='aside-homes-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-homes-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Listings</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Favorites</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Create Listing</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Support</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-jobs-h2s', 'aside-jobs-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Jobs</a><span id='aside-jobs-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-jobs-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Listings</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Favorites</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Saved Searches</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Create Listing</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-services-h2s', 'aside-services-span')}>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Support</a><span id='aside-services-span' className='aside-expand-arrow-marketplace'>►</span></h1>

                        <div id='aside-services-h2s'>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>My Ads</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>List a Business</a></h2>
                            <h2><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Support</a></h2>
                        </div>
                    </div>
                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' onClick={() => props.expandAsideNav()}>Deals</a></h1>
                    </div>

                    <div className='aside-content-single'>
                        <h1 className='aside-flex-row aside-big-header'>ACCOUNT</h1>
                    </div>
                    {
                        props.id === 0 ?
                            <div className='aside-account-buttons-parent'>
                                <Link to='/login'><button className='blue-button' onClick={() => props.expandAsideNav()}>Login</button></Link>
                                <Link to='/register'><button className='transparent' onClick={() => props.expandAsideNav()}>Create Account <span className='carrots'>>></span></button></Link>
                            </div>
                            :
                            <div className='aside-content-single aside-account-buttons-parent aside-logged-in'>
                                <h1 className='aside-flex-row'>Welcome {props.username}</h1>
                                <button className='blue-button' onClick={() => logout(props)}>Logout</button>
                            </div>
                    }
                </div>
            </div>
        </aside >
    )
}

function handleExpand(name1, name2) {
    let rotateArr = document.getElementsByClassName('aside-expand-arrow')
    let rotateMarket = document.getElementsByClassName('aside-expand-arrow-marketplace')
    let first = document.getElementById(name1)
    let second = document.getElementById(name2)
    let allUnsortedTabs = ['aside-news-h2s', 'aside-sports-h2s', 'aside-brandview-h2s', 'aside-tv-h2s', 'aside-radio-h2s', 'aside-obituaries-h2s', 'aside-weather-h2s']
    let allMarketplaceTabs = ['aside-classifieds-h2s', 'aside-cars-h2s', 'aside-homes-h2s', 'aside-jobs-h2s', 'aside-services-h2s']

    if (allUnsortedTabs.includes(name1)) {
        for (let x = 0; x < rotateArr.length; x++) {
            if (rotateArr[x].classList.contains('rotate90')) {
                if (rotateArr[x].id !== name2) {
                    rotateArr[x].classList.remove('rotate90')
                }
            }
        }

        allUnsortedTabs.forEach(elementName => {
            if (elementName !== name1) {
                document.getElementById(elementName).classList.remove(elementName)
            }
        });

        if (first.classList.contains(name1)) {
            first.classList.remove(name1)
        }
        else {
            first.classList.add(name1)
        }

        if (second.classList.contains('rotate90')) {
            second.classList.remove('rotate90')
        }
        else {
            second.classList.add('rotate90')
        }
    }
    else {
        for (let x = 0; x < rotateMarket.length; x++) {
            if (rotateMarket[x].classList.contains('rotate90')) {
                if (rotateMarket[x].id !== name2) {
                    rotateMarket[x].classList.remove('rotate90')
                }
            }
        }

        allMarketplaceTabs.forEach(elementName => {
            if (elementName !== name1) {
                document.getElementById(elementName).classList.remove(elementName)
            }
        });

        if (first.classList.contains(name1)) {
            first.classList.remove(name1)
        }
        else {
            first.classList.add(name1)
        }

        if (second.classList.contains('rotate90')) {
            second.classList.remove('rotate90')
        }
        else {
            second.classList.add('rotate90')
        }
    }

}

function logout(props) {
    axios.post('/auth/logout')
        .then(res => {
            props.expandAsideNav()
            props.updateUser({ id: 0 })
            props.history.push('/')
        })
}

function mapStateToProps(reduxState) {
    const { username, id } = reduxState
    return {
        username,
        id
    }
}

export default withRouter(connect(mapStateToProps, { updateUser })(Aside))
