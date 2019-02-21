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

    handleChangeCity(name1 = 'saltLakeObj', name2 = 'Salt Lake') {
        this.setState({
            selectedTemp: name1,
            selectedTempName: name2
        })

        this.handleExpandCity()
    }

    handleTime(num) {
        if (num - 8 < 0) {
            num = num + 24
        }
        num -= 8

        if (num - 12 < 0) {
            return `${num}AM`
        } else {
            return `${num - 12}PM`
        }
    }

    handleExpandCity(bool = false) {
        let expand = document.getElementById('expand-select-city')

        if(expand.classList.contains('expand-select-city')) {
            expand.classList.remove('expand-select-city')
        } else if (bool) {
            expand.classList.add('expand-select-city')
        }
    }

    openWeather() {
        let weather = document.getElementById('weather-overlay')

        if(weather.classList.contains('weather-overlay-slid')) {
            weather.classList.remove('weather-overlay-slid')
        } else {
            weather.classList.add('weather-overlay-slid')
        }
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
                            <div className='flex-row center-all weather-icon-parent' onClick={() => this.openWeather()}><img className='nav-weather-icon' src={this.getWeatherIcon(this.state[selectedTemp].list ? this.state[selectedTemp].list[0].weather[0].icon : null)} alt='weather'></img></div>
                            <div className='flex-row center-all weather-temp' onClick={() => this.openWeather()}>{this.state[selectedTemp].list ? Math.round(this.state[selectedTemp].list[0].main.temp) : null}°</div>
                            <div id='weather-overlay' className='flex-row auto-left weather-overlay-slid'>
                                <div className='prevent-click-on-other-content' onClick={() => {this.openWeather(); this.handleExpandCity()}}></div>
                                <div className='weather-overlay-content'>
                                    <div className='selected-location' onClick={() => this.handleExpandCity(true)}>
                                        <h1>{this.state.selectedTempName}</h1>
                                        <i className="fas fa-pencil-alt auto-left"></i>
                                    </div>
                                    <ul id='expand-select-city'>
                                        <li onClick={() => {this.handleChangeCity()}}>Salt Lake</li>
                                        <li onClick={() => {this.handleChangeCity('provoObj', 'Provo')}}>Provo</li>
                                        <li onClick={() => {this.handleChangeCity('ogdenObj', 'Ogden')}}>Ogden</li>
                                        <li onClick={() => {this.handleChangeCity('stGeorgeObj', 'St. George')}}>St. George</li>
                                        <li onClick={() => {this.handleChangeCity('loganObj', 'Logan')}}>Logan</li>
                                    </ul>
                                    <div className='weather-forecast-expanded'>
                                        <div className='forecast-large-weather'>
                                            <img src={this.getWeatherIcon(this.state[selectedTemp].list ? this.state[selectedTemp].list[0].weather[0].icon : null)} alt='weather'></img>
                                        </div>
                                        <h1 className='forecast-large-temp'>{this.state[selectedTemp].list ? Math.round(this.state[selectedTemp].list[0].main.temp) : null}°</h1>
                                        <h2 className='forecast-time-a'>{this.state[selectedTemp].list ? this.handleTime(parseInt(this.state[selectedTemp].list[0].dt_txt.slice(11, 13))) : null}</h2>
                                        <img className='forecast-img-a' src={this.getWeatherIcon(this.state[selectedTemp].list ? this.state[selectedTemp].list[0].weather[0].icon : null)} alt='weather'></img>
                                        <h2 className='forecast-temp-a'>{this.state[selectedTemp].list ? Math.round(this.state[selectedTemp].list[0].main.temp) : null}°</h2>
                                        <h2 className='forecast-time-b'>{this.state[selectedTemp].list ? this.handleTime(parseInt(this.state[selectedTemp].list[1].dt_txt.slice(11, 13))) : null}</h2>
                                        <img className='forecast-img-b' src={this.getWeatherIcon(this.state[selectedTemp].list ? this.state[selectedTemp].list[1].weather[0].icon : null)} alt='weather'></img>
                                        <h2 className='forecast-temp-b'>{this.state[selectedTemp].list ? Math.round(this.state[selectedTemp].list[2].main.temp) : null}°</h2>
                                        <h2 className='forecast-time-c'>{this.state[selectedTemp].list ? this.handleTime(parseInt(this.state[selectedTemp].list[2].dt_txt.slice(11, 13))) : null}</h2>
                                        <img className='forecast-img-c' src={this.getWeatherIcon(this.state[selectedTemp].list ? this.state[selectedTemp].list[2].weather[0].icon : null)} alt='weather'></img>
                                        <h2 className='forecast-temp-c'>°{this.state[selectedTemp].list ? Math.round(this.state[selectedTemp].list[3].main.temp) : null}</h2>
                                        <h2 className='forecast-humidity'>Humidity {this.state[selectedTemp].list ? this.state[selectedTemp].list[0].main.humidity : null}%</h2>
                                        <h2 className='forecast-info'>{this.state[selectedTemp].list ? this.state[selectedTemp].list[0].weather[0].description : null}</h2>
                                        <a className='forecast-button' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><button>Full Forecast</button></a>
                                    </div>
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