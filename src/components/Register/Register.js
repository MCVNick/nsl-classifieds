import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import { Link } from 'react-router-dom'

import './Register.css'

class Register extends Component {
    constructor() {
        super()

        this.state = {
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
            ],
            username: '',
            password: '',
            passwordVar: '',
            email: '',
            emailVer: '',
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleRegister = () => {
        const { username, password, passwordVar, email, emailVer, first_name, last_name, address, city, state, zipcode } = this.state
        const user = {
            username: username,
            password: password,
            email: email,
            first_name: first_name,
            last_name: last_name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            profile_pic: ''
        }

        this.props.updateUser(user)
        this.setState({
            username: '',
            password: '',
            passwordVar: '',
            email: '',
            emailVer: '',
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        })
    }

    render() {
        const { username, password, passwordVar, email, emailVer, first_name, last_name, address, city, state, zipcode, statesList } = this.state
        const options = statesList.map((state, index) => {
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
                        <input className='registerInput' value={email} onChange={(e) => this.handleChange(e, 'email')} type='email'/>
                        <p className='registerInputInfo'>Confirm Email:</p>
                        <input className='registerInput' value={emailVer} onChange={(e) => this.handleChange(e, 'emailVer')} type='email'/>
                        <p className='registerInputInfo'>First Name:</p>
                        <input className='registerInput' value={first_name} onChange={(e) => this.handleChange(e, 'first_name')} type='text'/>
                        <p className='registerInputInfo'>Last Name:</p>
                        <input className='registerInput' value={last_name} onChange={(e) => this.handleChange(e, 'last_name')} type='text'/>
                        <p className='registerInputInfo'>Address Line:</p>
                        <input className='registerInput' value={address} onChange={(e) => this.handleChange(e, 'address')} type='text'/>
                        <p className='registerInputInfo'>City / State:</p>
                        <div className='flex-row'>
                            <input className='registerSmallInput' value={city} onChange={(e) => this.handleChange(e, 'city')} type='text'/>
                            <select className='registerVerySmallInput' value={state} onChange={(e) => this.handleChange(e, 'state')} type='text'>{options}</select>
                        </div>
                        <p className='registerInputInfo'>Zip</p>
                        <input className='registerSmallInput' value={zipcode} onChange={(e) => this.handleChange(e, 'zipcode')} type='text'/>
                        <p className='registerInputInfo'>Password:</p>
                        <input className='registerInput' value={password} onChange={(e) => this.handleChange(e, 'password')} type='text'/>
                        <p className='registerInputInfo'>Confirm Password:</p>
                        <input className='registerInput' value={passwordVar} onChange={(e) => this.handleChange(e, 'passwordVar')} type='text'/>
                        <p className='registerInputInfo'>Display Name:</p>
                        <input className='registerInput' value={username} onChange={(e) => this.handleChange(e, 'username')} type='text'/>
                        <Link to='/'><button className='registerButton' onClick={this.handleRegister}>Sign Up</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { id } = reduxState
    return {
        id
    }
}

export default connect(mapStateToProps, { updateUser })(Register)