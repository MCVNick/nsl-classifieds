import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'

import './Navbar.scss'

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            selectedTemp: 'saltLakeObj',
            selectedTempName: 'Salt Lake',
            saltLakeObj: {},
            provoObj: {},
            ogdenObj: {},
            stGeorgeObj: {},
            loganObj: {}
        }
    }

    componentDidMount() {
        this.getOtherWeathers()
    }

    getOtherWeathers() {
        axios.get('/weather/handleCalls')
            .then(res => {
                const { saltLakeObj, provoObj, ogdenObj, stGeorgeObj, loganObj } = res.data
                this.setState({
                    saltLakeObj,
                    provoObj,
                    ogdenObj,
                    stGeorgeObj,
                    loganObj
                })
            })
            .catch(error => {})
    }

    getWeatherIcon(icon) {
        return `http://openweathermap.org/img/w/${icon}.png`
    }

    render() {
        const { selectedTemp } = this.state

        return (
            <div className='header-parent-top'>
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
                        <div className='flex-row auto-left'>
                            <div className='flex-row center-all weather-icon-parent'><img className='nav-weather-icon' src={this.getWeatherIcon(this.state[selectedTemp].list ? this.state[selectedTemp].list[0].weather[0].icon : null)} alt='weather'></img></div>
                            <div className='flex-row center-all weather-temp'>{this.state[selectedTemp].list ? Math.round(this.state[selectedTemp].list[0].main.temp) : null}°</div>
                            <div id='weather-overlay' className='flex-row auto-left'>
                                <div className='selected-location'>
                                    <h1>{this.state.selectedTempName}</h1>
                                    <i className="fas fa-pencil-alt auto-left"></i>
                                </div>
                                <ul>
                                    <li>Salt Lake</li>
                                    <li>Provo</li>
                                    <li>Ogden</li>
                                    <li>St. George</li>
                                    <li>Logan</li>
                                </ul>
                                <div className='weather-forecast-expanded'>
                                    <img className='forecast-large-weather' src={this.getWeatherIcon(this.state[selectedTemp].list ? this.state[selectedTemp].list[0].weather[0].icon : null)} alt='weather'></img>
                                    <h1 className='forecast-large-temp'>{this.state[selectedTemp].list ? Math.round(this.state[selectedTemp].list[0].main.temp) : null}°</h1>
                                    <h2 className='forecast-time-a'></h2>
                                    <img className='forecast-img-a'></img>
                                    <h2 className='forecast-temp-a'>°</h2>
                                    <h2 className='forecast-time-b'></h2>
                                    <img className='forecast-img-b'></img>
                                    <h2 className='forecast-temp-b'>°</h2>
                                    <h2 className='forecast-time-c'></h2>
                                    <img className='forecast-img-c'></img>
                                    <h2 className='forecast-temp-c'>°</h2>
                                    <h2 className='forecast-humidity'></h2>
                                    <h2 className='forecast-info'></h2>
                                    <button className='forecast-button'>Full Forecast</button>
                                </div>
                            </div>
                        </div>
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