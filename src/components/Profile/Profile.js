import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import axios from 'axios'

import './Profile.css'

class Profile extends Component {
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
            oldPassword: '',
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

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        const { username } = this.props;

        if (username) {
            //stay here
        } else {
            axios.get('/user/getSessionUser')
                .then(res => {
                    this.props.updateUser(res.data)
                })
                .catch(error => { this.props.history.push('/') })
        }
    }

    handleUpdateUserEmail() {
        if (this.state.email !== this.state.emailVer) {
            return 'Emails do not match'
        }
        if (!this.state.email && !this.state.emailVer) {
            return 'Please fill in both email fields'
        }
        axios.put('/user/updateEmail', { email: this.state.email })
            .then(res => {
                this.props.updateUser(res.data)
                this.setState({
                    email: '',
                    emailVer: ''
                })
            })
    }

    handleUpdateUserName() {
        if (!this.state.first_name) {
            return 'Please enter a first name'
        }
        if (!this.state.last_name) {
            return 'Please enter a last name'
        }
        //axios
    }

    handleUpdateUserAddress() {
        if (!this.state.address) {
            return 'Please enter an address'
        }
        if (!this.state.city) {
            return 'Please enter a city'
        }
        if (!this.state.zipcode) {
            return 'Please enter a zipcode'
        }
        //axios
    }

    handleUpdateUserPassword() {
        if (this.state.password !== this.state.passwordVer) {
            return 'Passwords do not match'
        }
        if (!this.state.password && !this.state.passwordVer) {
            return 'Please fill in both password fields'
        }
        //axios
    }

    render() {
        const { oldPassword, password, passwordVer, email, emailVer, first_name, last_name, address, city, state, zipcode, statesList } = this.state
        const options = statesList.map((state, index) => {
            return (
                <option key={index} value={state.name}>{state}</option>
            )
        })

        return (
            <div>
                <div className='userContainer flex-row'>
                    <div className='userContainerParent'>
                        <div onClick={() => { expandSubNavCog('updateEmail') }} className='userContainerHeaderInfo'>Update Email</div>
                        <div id='updateEmail' className='userContainerContent heightZero'>
                            <p className='userContainerInputInfo'>New Email:</p>
                            <input className='userContainerInput' maxLength="255" value={email} onChange={(e) => this.handleChange(e, 'email')} type='email' />
                            <p className='userContainerInputInfo'>Confirm New Email:</p>
                            <input className='userContainerInput' maxLength="255" value={emailVer} onChange={(e) => this.handleChange(e, 'emailVer')} type='email' />
                            <button className='userContainerButton' onClick={this.handleUpdateUserEmail}>Update</button>
                        </div>
                    </div>
                </div>
                <div className='userContainer flex-row'>
                    <div className='userContainerParent'>
                        <div onClick={() => { expandSubNavCog('updateName') }} className='userContainerHeaderInfo'>Update Name</div>
                        <div id='updateName' className='userContainerContent heightZero'>
                            <p className='userContainerInputInfo'>New First Name:</p>
                            <input className='userContainerInput' maxLength="50" value={first_name} onChange={(e) => this.handleChange(e, 'first_name')} type='text' />
                            <p className='userContainerInputInfo'>New Last Name:</p>
                            <input className='userContainerInput' maxLength="50" value={last_name} onChange={(e) => this.handleChange(e, 'last_name')} type='text' />
                            <button className='userContainerButton' onClick={this.handleUpdateUserName}>Update</button>
                        </div>
                    </div>
                </div>
                <div className='userContainer flex-row'>
                    <div className='userContainerParent'>
                        <div onClick={() => { expandSubNavCog('updateAddress') }} className='userContainerHeaderInfo'>Update Address</div>
                        <div id='updateAddress' className='userContainerContent heightZero'>
                            <p className='userContainerInputInfo'>Address Line:</p>
                            <input className='userContainerInput' maxLength="255" value={address} onChange={(e) => this.handleChange(e, 'address')} type='text' />
                            <p className='userContainerInputInfo'>City / State:</p>
                            <div className='flex-row'>
                                <input className='userContainerSmallInput' maxLength="50" value={city} onChange={(e) => this.handleChange(e, 'city')} type='text' />
                                <select className='userContainerVerySmallInput' value={state} onChange={(e) => this.handleChange(e, 'state')} type='text'>{options}</select>
                            </div>
                            <p className='userContainerInputInfo'>Zip</p>
                            <input className='userContainerSmallInput' maxLength="25" value={zipcode} onChange={(e) => this.handleChange(e, 'zipcode')} type='text' />
                            <button className='userContainerButton' onClick={this.handleUpdateUserAddress}>Update</button>
                        </div>
                    </div>
                </div>
                <div className='userContainer flex-row'>
                    <div className='userContainerParent'>
                        <div onClick={() => { expandSubNavCog('updatePassword') }} className='userContainerHeaderInfo'>Update Password</div>
                        <div id='updatePassword' className='userContainerContent heightZero'>
                            <p className='userContainerInputInfo'>Old Password:</p>
                            <input className='userContainerInput' type='password' maxLength="50" value={oldPassword} onChange={(e) => this.handleChange(e, 'oldPassword')} />
                            <p className='userContainerInputInfo'>New Password:</p>
                            <input className='userContainerInput' type='password' maxLength="50" value={password} onChange={(e) => this.handleChange(e, 'password')} />
                            <p className='userContainerInputInfo'>Confirm New Password:</p>
                            <input className='userContainerInput' type='password' maxLength="50" value={passwordVer} onChange={(e) => this.handleChange(e, 'passwordVer')} />
                            <button className='userContainerButton' onClick={this.handleUpdateUserPassword}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function expandSubNavCog(idName, bool = true) {
    let show = document.getElementById(idName)

    if (show.classList.contains(idName)) {
        show.classList.remove(idName)
    }
    else if (bool) {
        show.classList.add(idName)
    }
}

function mapStateToProps(reduxState) {
    const { username } = reduxState
    return {
        username
    }
}

export default connect(mapStateToProps, { updateUser })(Profile)