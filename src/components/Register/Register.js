import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import axios from 'axios';

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
            passwordVer: '',
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

    componentDidMount() {
        const { username } = this.props;

        if (username) {
            this.props.history.push('/')
        } else {
            axios.get('/auth/getSessionUser')
                .then(res => {
                    this.props.history.push('/')
                })
        }
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleRegister = () => {
        const { username, password, passwordVer, email, emailVer, first_name, last_name, address, city, state, zipcode } = this.state
        const user = {
            username: username.toLowerCase(),
            password: password,
            email: email.toLowerCase(),
            first_name: first_name,
            last_name: last_name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            profile_pic: 'https://i.pinimg.com/originals/e9/36/17/e93617d92771a7d97c46cb78e6a57c3f.jpg'
        }

        if(password !== passwordVer) {
            return 'Passwords do not match'
        }
        if(email !== emailVer) {
            return 'Emails do not match'
        }

        axios.post('/auth/register', user)
            .then(res => {
                this.props.updateUser(res.data)
                this.setState({
                    username: '',
                    password: '',
                    passwordVer: '',
                    email: '',
                    emailVer: '',
                    first_name: '',
                    last_name: '',
                    address: '',
                    city: '',
                    state: '',
                    zipcode: ''
                })
                this.props.history.push('/')
            })
    }

    render() {
        const { username, password, passwordVer, email, emailVer, first_name, last_name, address, city, state, zipcode, statesList } = this.state
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
                        <input className='registerInput' maxLength="255" value={email} onChange={(e) => this.handleChange(e, 'email')} type='email'/>
                        <p className='registerInputInfo'>Confirm Email:</p>
                        <input className='registerInput' maxLength="255" value={emailVer} onChange={(e) => this.handleChange(e, 'emailVer')} type='email'/>
                        <p className='registerInputInfo'>First Name:</p>
                        <input className='registerInput' maxLength="50" value={first_name} onChange={(e) => this.handleChange(e, 'first_name')} type='text'/>
                        <p className='registerInputInfo'>Last Name:</p>
                        <input className='registerInput' maxLength="50" value={last_name} onChange={(e) => this.handleChange(e, 'last_name')} type='text'/>
                        <p className='registerInputInfo'>Address Line:</p>
                        <input className='registerInput' maxLength="255" value={address} onChange={(e) => this.handleChange(e, 'address')} type='text'/>
                        <p className='registerInputInfo'>City / State:</p>
                        <div className='flex-row'>
                            <input className='registerSmallInput' maxLength="50" value={city} onChange={(e) => this.handleChange(e, 'city')} type='text'/>
                            <select className='registerVerySmallInput' value={state} onChange={(e) => this.handleChange(e, 'state')} type='text'>{options}</select>
                        </div>
                        <p className='registerInputInfo'>Zip</p>
                        <input className='registerSmallInput' maxLength="25" value={zipcode} onChange={(e) => this.handleChange(e, 'zipcode')} type='text'/>
                        <p className='registerInputInfo'>Password:</p>
                        <input className='registerInput' type='password' maxLength="50" value={password} onChange={(e) => this.handleChange(e, 'password')}/>
                        <p className='registerInputInfo'>Confirm Password:</p>
                        <input className='registerInput' type='password' maxLength="50"value={passwordVer} onChange={(e) => this.handleChange(e, 'passwordVer')}/>
                        <p className='registerInputInfo'>Display Name:</p>
                        <input className='registerInput' maxLength="30" value={username} onChange={(e) => this.handleChange(e, 'username')} type='text'/>
                        <button className='registerButton' onClick={this.handleRegister}>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { id, username } = reduxState
    return {
        id,
        username
    }
}

export default connect(mapStateToProps, { updateUser })(Register)