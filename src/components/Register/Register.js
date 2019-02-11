import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import './Register.css'

class Register extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='Register flex-row'>
                <div className='registerParent'>
                    <div className='registerHeaderInfo'>Sign up for a NSL Account</div>
                    <div className='registerContent'>
                        <p className='registerInputInfo'>Email Address:</p>
                        <input className='registerInput'/>
                        <p className='registerInputInfo'>Confirm Email:</p>
                        <input className='registerInput'/>
                        <p className='registerInputInfo'>First Name:</p>
                        <input className='registerInput'/>
                        <p className='registerInputInfo'>Last Name:</p>
                        <input className='registerInput'/>
                        <p className='registerInputInfo'>Address Line 1:</p>
                        <input className='registerInput'/>
                        <p className='registerInputInfo'>City / State:</p>
                        <div>
                            <input className='registerSmallInput'/>
                            <input className='registerVerySmallInput'/>
                        </div>
                        <p className='registerInputInfo'>Zip</p>
                        <input className='registerSmallInput'/>
                        <p className='registerInputInfo'>Password:</p>
                        <input className='registerInput'/>
                        <p className='registerInputInfo'>Confirm Password:</p>
                        <input className='registerInput'/>
                        <p className='registerInputInfo'>Display Name:</p>
                        <input className='registerInput'/>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateUser })(Register)