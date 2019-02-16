import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import './Navbar.scss'

function Navbar(props) {
    return (
        <div>
            <nav className='header-nav header-grid'>
                <div></div>
                <Link className='nav-name' to='/'>
                    <h1 className='flex-row nav-name center' onClick={() => { props.expandAsideNav(false) }}>
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
                    <div className='flex-row center-all weather-icon-parent'><img className='nav-weather-icon' src='https://www.cleveland19.com/pb/resources/images/weather/weather-condition-icons/400x400/74_daily_forecast.png' alt='weather'></img></div>
                    <div className='flex-row center-all weather-temp'>-15°</div>
                    {
                        props.location.pathname.includes('/classifieds') ?
                        null :
                        <div className='nav-search'><div className='search-circle'></div><div className='search-line'></div></div>
                    }
                    <button onClick={() => { props.expandAsideNav() }} className='transparent nav-menu-button'>
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

function mapStateToProps(reduxState) {
    const { url } = reduxState
    return {
        url
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))