import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'

import './Navbar.scss'

class Navbar extends Component {
    constructor() {
        super()
        const { REACT_APP_APIID } = process.env

        this.state = {
            gotWeathers: false,
            saltLakeURL: `api.openweathermap.org/data/2.5/weather?units=imperial&id=5781004&appid=${REACT_APP_APIID}`,
            saltLakeIcon: '',
            saltLakeTemp: '',
            ogdenURL: `api.openweathermap.org/data/2.5/weather?units=imperial&id=5779206&appid=${REACT_APP_APIID}`,
            ogdenIcon: '',
            ogdenTemp: '',
            stGeorgeURL: `api.openweathermap.org/data/2.5/weather?units=imperial&id=5546220&appid=${REACT_APP_APIID}`,
            stGeorgeIcon: '',
            stGeorgeTemp: '',
            loganURL: `api.openweathermap.org/data/2.5/weather?units=imperial&id=5777544&appid=${REACT_APP_APIID}`,
            loganIcon: '',
            loganTemp: '',
        }
    }

    componentDidMount() {
        this.getOtherWeathers()
    }

    getOtherWeathers() {
        axios.get('/weather/handleCalls')
            .then(res => {
                this.setState({
                    gotWeathers: true
                })

                let saltLakeTemp = '', saltLakeIcon = ''
                axios.get(`https://${this.state.saltLakeURL}`)
                    .then(res => {
                        saltLakeTemp = res.data.main.temp
                        saltLakeIcon = res.data.weather[0].icon
                        this.setState({
                            saltLakeTemp: saltLakeTemp >= 0 ? Math.floor(saltLakeTemp) : Math.roof(saltLakeTemp),
                            saltLakeIcon: `http://openweathermap.org/img/w/${saltLakeIcon}.png`
                        })
                    })
                    .catch((error) => { })

                let ogdenTemp = '', ogdenIcon = ''
                axios.get(`https://${this.state.ogdenURL}`)
                    .then(res => {
                        ogdenTemp = res.data.main.temp
                        ogdenIcon = res.data.weather[0].icon
                        this.setState({
                            ogdenTemp: ogdenTemp >= 0 ? Math.floor(ogdenTemp) : Math.roof(ogdenTemp),
                            ogdenIcon: `http://openweathermap.org/img/w/${ogdenIcon}.png`
                        })
                    })
                    .catch((error) => { })

                let stGeorgeTemp = '', stGeorgeIcon = ''
                axios.get(`https://${this.state.stGeorgeURL}`)
                    .then(res => {
                        stGeorgeTemp = res.data.main.temp
                        stGeorgeIcon = res.data.weather[0].icon
                        this.setState({
                            stGeorgeTemp: stGeorgeTemp >= 0 ? Math.floor(stGeorgeTemp) : Math.roof(stGeorgeTemp),
                            stGeorgeIcon: `http://openweathermap.org/img/w/${stGeorgeIcon}.png`
                        })
                    })
                    .catch((error) => { })

                let loganTemp = '', loganIcon = ''
                axios.get(`https://${this.state.loganURL}`)
                    .then(res => {
                        loganTemp = res.data.main.temp
                        loganIcon = res.data.weather[0].icon
                        this.setState({
                            loganTemp: loganTemp >= 0 ? Math.floor(loganTemp) : Math.roof(loganTemp),
                            loganIcon: `http://openweathermap.org/img/w/${loganIcon}.png`
                        })
                    })
                    .catch((error) => { })
            })
            .catch(error => this.setState({ gotWeathers: false }))
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
                            this.state.gotWeathers?
                            <div className='flex-row auto-left'>
                                <div className='flex-row center-all weather-icon-parent'><img className='nav-weather-icon' src={this.state.saltLakeIcon} alt='weather'></img></div>
                                <div className='flex-row center-all weather-temp'>{this.state.saltLakeTemp}°</div>
                            </div>
                            :
                            <div className='flex-row auto-left'></div>
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