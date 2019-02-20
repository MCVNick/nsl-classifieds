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
            selectedTemp: 'saltLakeObj',
            selectedTempName: 'Salt Lake',
            saltLakeURL: `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5781004&appid=${REACT_APP_APIID}`,
            saltLakeObj: {},
            provoURL: `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5781004&appid=${REACT_APP_APIID}`,
            provoObj: {},
            ogdenURL: `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5779206&appid=${REACT_APP_APIID}`,
            ogdenObj: {},
            stGeorgeURL: `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5546220&appid=${REACT_APP_APIID}`,
            stGeorgeObj: {},
            loganURL: `api.openweathermap.org/data/2.5/forecast?units=imperial&id=5777544&appid=${REACT_APP_APIID}`,
            loganObj: {}
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

                let saltLakeObj = {}
                axios.get(`https://${this.state.saltLakeURL}`)
                    .then(res => {
                        saltLakeObj = res.data
                        this.setState({
                            saltLakeObj: saltLakeObj
                        })
                    })
                    .catch((error) => { })

                let provoObj = {}
                axios.get(`https://${this.state.provoURL}`)
                    .then(res => {
                        provoObj = res.data
                        this.setState({
                            provoObj: provoObj
                        })
                    })
                    .catch((error) => { })

                let ogdenObj = {}
                axios.get(`https://${this.state.ogdenURL}`)
                    .then(res => {
                        ogdenObj = res.data
                        this.setState({
                            ogdenObj: ogdenObj
                        })
                    })
                    .catch((error) => { })

                let stGeorgeObj = {}
                axios.get(`https://${this.state.stGeorgeURL}`)
                    .then(res => {
                        stGeorgeObj = res.data
                        this.setState({
                            stGeorgeObj: stGeorgeObj
                        })
                    })
                    .catch((error) => { })

                let loganObj = {}
                axios.get(`https://${this.state.loganURL}`)
                    .then(res => {
                        loganObj = res.data
                        this.setState({
                            // loganTemp: loganTemp >= 0 ? Math.floor(loganTemp) : Math.roof(loganTemp),
                            loganObj: loganObj
                        })
                    })
                    .catch((error) => { })
            })
            .catch(error => this.setState({ gotWeathers: false }))
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
                        {
                            this.state.gotWeathers ?
                                <div className='flex-row auto-left'>
                                    <div className='flex-row center-all weather-icon-parent'><img className='nav-weather-icon' src={this.getWeatherIcon(this.state[selectedTemp].list?this.state[selectedTemp].list[0].weather[0].icon:null)} alt='weather'></img></div>
                                    <div className='flex-row center-all weather-temp'>{this.state[selectedTemp].list?Math.round(this.state[selectedTemp].list[0].main.temp):null}°</div>
                                    <div id='weather-overlay' className='flex-row auto-left'>
                                        <h1>{this.state.selectedTempName}</h1>
                                        <ul>
                                            <li>Salt Lake</li>
                                            <li>Provo</li>
                                            <li>Ogden</li>
                                            <li>St. George</li>
                                            <li>Logan</li>
                                        </ul>
                                    </div>
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