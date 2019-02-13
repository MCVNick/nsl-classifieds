import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios';
import { updateUser } from './../../ducks/reducer'

import './Navbar.css'

function Navbar(props) {
    return (
        <div>
            <nav className="flex-row HeaderNav">
                <Link className='auto-right navName' to='/'><h1 className='navName' onClick={() => {expandSubNav(false); expandSubNavCog(false)}}>NSL</h1></Link>
                <div className='navWeather'>-15°</div>
                <button onClick={() => { expandSubNavCog(false); expandSubNav() }} className='navMenuButton transparent'>
                    <i className="fas fa-bars"></i>
                    <p className='navMenuWords'>MENU</p>
                </button>
            </nav>

            <nav id='SubNav' className='flex-row SubNav'>
                {
                    props.id === 0 ?
                        <div className='relative flex-row headerProfilePicParentOut'>
                            <Link className='auto-left' to='/register'>
                                <button className='headerRegister' onClick={() => { expandSubNavCog(false); expandSubNav(); }}>
                                    Register
                                </button>
                            </Link>
                            <Link to='/login'>
                                <button className='headerLogin' onClick={() => { expandSubNavCog(false); expandSubNav(); }}>
                                    Log in
                                </button>
                            </Link>
                            <Link to='/login' onClick={() => { expandSubNavCog(false); expandSubNav(); }}>
                                <img
                                    className='headerProfilePic'
                                    src='https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png'
                                    alt='profile_pic'
                                />
                            </Link>
                        </div>
                        :
                        <div className='relative flex-row headerProfilePicParent'>
                            <i className="fas fa-envelope mailIcon"></i>
                            <p
                                className='auto-left usernameHeader'
                                style={
                                    changeSize(props.username)
                                }
                            >{props.username}</p>
                            <i className="fas fa-cog cogIcon" onClick={() => { expandSubNavCog() }}></i>
                            <img
                                className='headerProfilePic'
                                src={props.profile_pic}
                                alt='profile_pic'
                            />
                            <button className='transparent navProfileStatus'>
                                O
                            </button>
                        </div>
                }
            </nav>

            <div id='SubNavCog' className='SubNavCog flex-column'>
                <div className='childSubNavCog'><button className='transparent' onClick={() => {expandSubNavCog(false); expandSubNav(); logout(props)}}>Logout</button></div>
                <Link to='/profile' className='childSubNavCog'><button className='transparent' onClick={() => {expandSubNavCog(false); expandSubNav()}}>Settings</button></Link>
            </div>
        </div>
    )
}

function logout(props) {
    axios.post('/auth/logout')
        .then(res => {
            props.updateUser({id: 0})
            props.history.push('/')
        })
}

function expandSubNav(bool = true) {
    let show = document.getElementById('SubNav')

    if (show.classList.contains('SubNavExpand')) {
        show.classList.remove('SubNavExpand')
    }
    else if (bool){
        show.classList.add('SubNavExpand')
    }
}

function expandSubNavCog(bool = true) {
    let show = document.getElementById('SubNavCog')

    if (show.classList.contains('SubNavCogExpand')) {
        show.classList.remove('SubNavCogExpand')
    }
    else if (bool) {
        show.classList.add('SubNavCogExpand')
    }
}

function changeSize(str) {
    if(str) {
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

function mapStateToProps(reduxState) {
    const { username, profile_pic, id } = reduxState
    return {
        username,
        profile_pic,
        id
    }
}

export default withRouter(connect(mapStateToProps, {updateUser})(Navbar))