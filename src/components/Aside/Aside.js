import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'

import './Aside.scss'

function Aside(props) {
    return (
        <aside id='AsideNav' className='AsideNav aside-flex-row'>
            <div className='aside-flex-column'>
                <button className='transparent x-line' onClick={() => { props.expandAsideNav(); }}>
                    <div className='x-line-one'></div>
                    <div className='x-line-two'></div>
                </button>
                <ul>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>News <span>►</span></p>
                            <ul>
                                <li>Utah</li>
                                <li>Southern Utah</li>
                                <li>Idaho</li>
                                <li>Features</li>
                                <li>U.S.</li>
                                <li>World</li>
                                <li>Politics</li>
                                <li>Traffic</li>
                                <li>Business</li>
                                <li>Entertainment</li>
                                <li>Outdoors</li>
                                <li>Latino</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Sports</p>
                            <ul>
                                <li>BYU</li>
                                <li>U of U</li>
                                <li>Utah Jazz</li>
                                <li>USU</li>
                                <li>RSL</li>
                                <li>Prep</li>
                                <li>Pickem</li>
                                <li>NFL</li>
                                <li>Weber St.</li>
                                <li>SUU</li>
                                <li>UVU</li>
                                <li>Stats/Scores</li>
                                <li>Great Clips of the Week</li>
                                <li>More</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Brandview</p>
                            <ul>
                                <li>Robert J DeBry</li>
                                <li>U of U Health</li>
                                <li>MountainStarHealthcare</li>
                                <li>Steward Healthcare</li>
                                <li>Intermountain Healthcare</li>
                                <li>Salt Lake Chamber</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>TV</p>
                            <ul>
                                <li>Watch Live</li>
                                <li>Meet Our Team</li>
                                <li>Contests & Promotions</li>
                                <li>KSL Investigators</li>
                                <li>High 5</li>
                                <li>Studio 5</li>
                                <li>Outdoors with Adam Eakle</li>
                                <li>Your Life Your Health</li>
                                <li>Wednesday's Child</li>
                                <li>Read Today</li>
                                <li>Program Guide</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Radio</p>
                            <ul>
                                <li>Listen Live</li>
                                <li>Story Audio</li>
                                <li>KSL Schedule</li>
                                <li>Meet Our Team</li>
                                <li>Contests & Promotions</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Live</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='nav-new-item aside-item-boarder'>Obituaries <span className='nav-new-item-span'>New</span></p>
                            <ul>
                                <li>Create Life Story</li>
                                <li>My Life Stories</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Weather</p>
                            <ul>
                                <li>VORTEX</li>
                                <li>Microcast</li>
                                <li>Current Conditions</li>
                                <li>Cameras</li>
                                <li>Photo Contest</li>
                                <li>Ski Report</li>
                                <li>Snowpack</li>
                                <li>Weather Alerts</li>
                                <li>Outdoor Weather Planner</li>
                                <li>Air Quality</li>
                                <li>Weather</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <p className='aside-header aside-item-boarder'>MARKETPLACE</p>
                <ul>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Classifieds</p>
                            <ul>
                                <li>My Listings</li>
                                <li>My Favorites</li>
                                <li>Create Listing</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Cars</p>
                            <ul>
                                <li>My Listings</li>
                                <li>My Favorites</li>
                                <li>Saved Searches</li>
                                <li>Create Listing</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Homes</p>
                            <ul>
                                <li>My Listings</li>
                                <li>My Favorites</li>
                                <li>Create Listing</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Jobs</p>
                            <ul>
                                <li>My Listings</li>
                                <li>My Favorites</li>
                                <li>Saved Searches</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Services</p>
                            <ul>
                                <li>My Ads</li>
                                <li>List a Business</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p className='aside-item-boarder'>Deals</p>
                        </div>
                    </li>
                </ul>
                <p className='aside-header aside-item-boarder'>ACCOUNT</p>
                <div className='aside-account-buttons-parent aside-item-boarder'>
                    <button className='blue-button'>Login</button>
                    <button className='transparent'>Create Account<span className='carrots-forward'>>></span></button>
                </div>
            </div>
        </aside >
    )
}

function logout(props) {
    axios.post('/auth/logout')
        .then(res => {
            props.updateUser({ id: 0 })
            props.history.push('/')
        })
}

function changeSize(str) {
    if (str) {
        const { length: l } = str
        switch (true) {
            case (l < 9):
                return { fontSize: '30px' }
            case (l < 11):
                return { fontSize: '25px' }
            case (l < 13):
                return { fontSize: '20px' }
            case (l < 16):
                return { fontSize: '16px' }
            case (l < 18):
                return { fontSize: '14px' }
            case (l < 21):
                return { fontSize: '12px' }
            case (l < 26):
                return { fontSize: '10px' }
            default:
                return { fontSize: '8px' }
        }
    }
}

export default connect()(Aside)