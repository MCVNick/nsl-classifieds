import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'

import './Navbar.scss'

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            call: '',
            temp: ''
        }
    }

    getWeatherTemp() {
        let newTemp = ''
        axios.get(`https://${this.state.call}`)
            .then(res => {
                newTemp = res.data.main.temp
                this.setState({
                    temp: newTemp >= 0 ? Math.floor(newTemp) : Math.roof(newTemp)
                })
            })
            .catch((error) => {})
    }

    render() {
        return (
            <div>
                <nav className='header-nav header-grid'>
                    <div></div>
                    <Link className='nav-name' to='/'>
                        <h1 className='flex-row nav-name center' onClick={() => { this.props.expandAsideNav(false) }}>
                            <div className='flex-row high-weight'>
                                <p>N</p>
                                <p>S</p>
                                <p>L</p>
                            </div>
                            <div className='nav-name-dot'><div></div></div>
                            <div className='flex-row low-weight'>
                                <p>c</p>
                                <p>o</p>
                                <p>m</p>
                            </div>
                        </h1>
                    </Link>
                    <div className='flex-row center-all'>
                        {
                            navigator.geolocation ?
                            <div className='auto-left'>
                                {
                                    navigator.geolocation.getCurrentPosition((position) => {
                                        const lat = position.coords.latitude;
                                        const lon = position.coords.longitude
                                        
                                        this.setState({
                                            call: `api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=3567d421dc1f8bdf2054d84b758403f1`,
                                            allowed: true
                                        })

                                        this.getWeatherTemp()
                                    })
                                }
                                {
                                    this.state.allowed ?
                                    <div className='flex-row auto-left'>
                                        <div className='flex-row center-all weather-icon-parent'><img className='nav-weather-icon' src='https://www.cleveland19.com/pb/resources/images/weather/weather-condition-icons/400x400/74_daily_forecast.png' alt='weather'></img></div>
                                        <div className='flex-row center-all weather-temp'>{this.state.temp}°</div>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            :
                            <div>
                                
                            </div>
                        }
                        {
                            this.props.location.pathname.includes('/classifieds') ?
                                null :
                                <div className='nav-search'><div className='search-circle'></div><div className='search-line'></div></div>
                        }
                        <button onClick={() => { this.props.expandAsideNav() }} className='transparent nav-menu-button'>
                            <div className='menu-bars'></div>
                            <div className='menu-bars'></div>
                            <div className='menu-bars'></div>
                            <p className='nav-menu-bars-word'>MENU</p>
                        </button>
                    </div>
                    <div></div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)