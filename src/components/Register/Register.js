import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import './Register.css'

class Register extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            statesList: [
                'AL',
                'AK',
                'AZ',
                'AR',
                'CA',
                'CO',
                'CT',
                'DE',
                'FL',
                'GA',
                'HI',
                'ID',
                'IL',
                'IN',
                'IA',
                'KS',
                'KY',
                'LA',
                'ME',
                'MD',
                'MA',
                'MI',
                'MN',
                'MS',
                'MO',
                'MT',
                'NE',
                'NV',
                'NH',
                'NJ',
                'NM',
                'NY',
                'NC',
                'ND',
                'OH',
                'OK',
                'OR',
                'PA',
                'RI',
                'SC',
                'SD',
                'TN',
                'TX',
                'UT',
                'VT',
                'VA',
                'WA',
                'WV',
                'WI',
                'WY'
            ]
        }
    }

    render() {
        const options = this.state.statesList.map((state, index) => {
            return (
                <option key={index} value={state.name}>{state}</option>
            )
        })
        return (
            <div className='Register flex-row'>
                <div className='registerParent'>
                    <div className='registerHeaderInfo'>Sign up for a NSL Account</div>
                    <div className='registerContent'>
                        <p className='registerInputInfo'>Email Address:</p>
                        <input className='registerInput' />
                        <p className='registerInputInfo'>Confirm Email:</p>
                        <input className='registerInput' />
                        <p className='registerInputInfo'>First Name:</p>
                        <input className='registerInput' />
                        <p className='registerInputInfo'>Last Name:</p>
                        <input className='registerInput' />
                        <p className='registerInputInfo'>Address Line 1:</p>
                        <input className='registerInput' />
                        <p className='registerInputInfo'>City / State:</p>
                        <div className='flex-row'>
                            <input className='registerSmallInput' />
                            <select className='registerVerySmallInput'>{options}</select>
                        </div>
                        <p className='registerInputInfo'>Zip</p>
                        <input className='registerSmallInput' />
                        <p className='registerInputInfo'>Password:</p>
                        <input className='registerInput' />
                        <p className='registerInputInfo'>Confirm Password:</p>
                        <input className='registerInput' />
                        <p className='registerInputInfo'>Display Name:</p>
                        <input className='registerInput' />
                        <button className='registerButton'>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateUser })(Register)