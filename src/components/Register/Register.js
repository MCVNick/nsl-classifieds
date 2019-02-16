import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import axios from 'axios';

import './../../user-auth-container.scss'
import './Register.scss'

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
            address2: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    componentDidMount() {
        const { id } = this.props;

        if (id) {
            this.props.history.push('/')
        } else {
            axios.get('/user/getSessionUser')
                .then(res => {
                    this.props.history.push('/')
                })
                .catch(error => {})
        }
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleRegister = () => {
        const { username, password, passwordVer, email, emailVer, first_name, last_name, address, address2, city, state, zipcode } = this.state
        const user = {
            username: username,
            password: password,
            email: email.toLowerCase(),
            first_name: first_name,
            last_name: last_name,
            address: address,
            address: address2,
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
                this.props.history.push('/')
            })
            .catch(error => {})
    }

    render() {
        const { username, password, passwordVer, email, emailVer, first_name, last_name, address, address2, city, state, zipcode, statesList } = this.state
        const options = statesList.map((state, index) => {
            return (
                <option key={index} value={state.name}>{state}</option>
            )
        })
        
        return (
            <div className='user-auth-container-master'>
                <div className='user-auth-container-parent'>
                    <div className='user-auth-box'>
                        <div className='auth-box-error'>
                            {
                                this.state.signInError ?
                                <h3><p>ERROR :</p><span>{this.state.signInError}</span></h3> :
                                null
                            }
                        </div>
                        <div className='auth-box-header'>
                            <h1>Sign up for a KSL.com Account</h1>
                        </div>
                        <div className='auth-box-content'>
                            <h2><span>*</span>Email Address:</h2>
                            <input type='email' maxLength='255' value={email} onChange={(e) => this.handleChange(e, 'email')}/>
                            <p className='remove-margin'>(this is your login name)</p>
                            <h2><span>*</span>Confirm Email:</h2>
                            <input type='email' maxLength='255' value={emailVer} onChange={(e) => this.handleChange(e, 'emailVer')}/>
                            <h2><span>*</span>First Name:</h2>
                            <input type='text' maxLength="50" value={first_name} onChange={(e) => this.handleChange(e, 'first_name')}/>
                            <h2><span>*</span>Last Name:</h2>
                            <input type='text' maxLength="50" value={last_name} onChange={(e) => this.handleChange(e, 'last_name')}/>
                            <h2><span>*</span>Address Line 1:</h2>
                            <input type='text' maxLength="255" value={address} onChange={(e) => this.handleChange(e, 'address')}/>
                            <h2>Address Line 2:</h2>
                            <input type='text' maxLength="255" value={address2} onChange={(e) => this.handleChange(e, 'address2')}/>
                        </div>
                    </div>
                    {/* <div className='userContainerHeaderInfo'>Sign up for a NSL Account</div> */}
                    {/* <div className='userContainerContent'>
                        <p className='userContainerInputInfo'>Email Address:</p>
                        <input className='userContainerInput' maxLength="255" value={email} onChange={(e) => this.handleChange(e, 'email')} type='email'/>
                        <p className='userContainerInputInfo'>Confirm Email:</p>
                        <input className='userContainerInput' maxLength="255" value={emailVer} onChange={(e) => this.handleChange(e, 'emailVer')} type='email'/>
                        <p className='userContainerInputInfo'>First Name:</p>
                        <input className='userContainerInput' maxLength="50" value={first_name} onChange={(e) => this.handleChange(e, 'first_name')} type='text'/>
                        <p className='userContainerInputInfo'>Last Name:</p>
                        <input className='userContainerInput' maxLength="50" value={last_name} onChange={(e) => this.handleChange(e, 'last_name')} type='text'/>
                        <p className='userContainerInputInfo'>Address Line:</p>
                        <input className='userContainerInput' maxLength="255" value={address} onChange={(e) => this.handleChange(e, 'address')} type='text'/>
                        <p className='userContainerInputInfo'>City / State:</p>
                        <div className='flex-row'>
                            <input className='userContainerSmallInput' maxLength="50" value={city} onChange={(e) => this.handleChange(e, 'city')} type='text'/>
                            <select className='userContainerVerySmallInput' value={state} onChange={(e) => this.handleChange(e, 'state')} type='text'>{options}</select>
                        </div>
                        <p className='userContainerInputInfo'>Zip</p>
                        <input className='userContainerSmallInput' maxLength="25" value={zipcode} onChange={(e) => this.handleChange(e, 'zipcode')} type='text'/>
                        <p className='userContainerInputInfo'>Password:</p>
                        <input className='userContainerInput' type='password' maxLength="50" value={password} onChange={(e) => this.handleChange(e, 'password')}/>
                        <p className='userContainerInputInfo'>Confirm Password:</p>
                        <input className='userContainerInput' type='password' maxLength="50"value={passwordVer} onChange={(e) => this.handleChange(e, 'passwordVer')}/>
                        <p className='userContainerInputInfo'>Display Name:</p>
                        <input className='userContainerInput' maxLength="30" value={username} onChange={(e) => this.handleChange(e, 'username')} type='text'/>
                        <button className='userContainerButton' onClick={this.handleRegister}>Sign Up</button>
                    </div> */}
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