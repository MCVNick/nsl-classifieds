import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { updateUser } from './../../ducks/reducer'

import './Navbar.scss'

function Navbar(props) {
    return (
        <div>
            <nav className="flex-row-nowrap header-nav center">
                <Link className='auto-right nav-name' to='/'>
                    <h1 className='nav-name flex-row-nowrap center' onClick={() => {props.expandAsideNav(false)}}>
                        <div className='flex-row-nowrap center highWeight'>
                            <p className='z10'>N</p>
                            <p className='z9'>S</p>
                            <p className='z8'>L</p>
                        </div>
                        <p className='z7'><div></div></p>
                        <div className='flex-row-nowrap center lowWeight'>
                            <p className='z6'>c</p>
                            <p className='z5'>o</p>
                            <p className='z4'>m</p>
                        </div>
                    </h1>
                </Link>
                <img className='nav-weather-icon' src='https://www.cleveland19.com/pb/resources/images/weather/weather-condition-icons/400x400/74_daily_forecast.png' alt='weather'></img>
                <div className='nav-weather'>-15°</div>
                <button onClick={() => { props.expandAsideNav() }} className='transparent nav-menu-button'>
                    <div className='menu-bars'></div>
                    <div className='menu-bars'></div>
                    <div className='menu-bars'></div>
                    <p className='nav-menu-bars-word'>MENU</p>
                </button>
            </nav>
        </div>
    )
}

function mapStateToProps(reduxState) {
    const { username, profile_pic, id } = reduxState
    return {
        username,
        profile_pic,
        id
    }
}

export default withRouter(connect(mapStateToProps, {updateUser})(Navbar))