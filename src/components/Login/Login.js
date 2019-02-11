import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import './Login.css'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='Login flex-row'>
                <div className='loginParent'>
                    <div className='loginHeaderInfo'>Log in here</div>
                    <div className='loginContent'>
                        <p className='loginInputInfo'>Username:</p>
                        <input className='loginInput'/>
                        <p className='loginInputInfo'>Password:</p>
                        <input className='loginInput'/>
                        <button className='loginButton'>Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateUser })(Login)