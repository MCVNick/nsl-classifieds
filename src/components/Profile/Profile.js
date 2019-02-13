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
            state: 'AL',
            zipcode: '',
            emailError: '',
            nameError: '',
            addressError: '',
            passwordError: ''
        }
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value,
            emailError: '',
            nameError: '',
            addressError: '',
            passwordError: ''
        })
    }

    componentDidMount() {
        const { id } = this.props;

        if (id) {
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
        if (this.state.email.toLowerCase() !== this.state.emailVer.toLowerCase()) {
            this.setState({
                emailError: 'Email Mismatch'
            })
            return;
        }
        if (!this.state.email && !this.state.emailVer) {
            this.setState({
                emailError: 'Must Not Be Empty'
            })
            return;
        }

        axios.put('/user/updateEmail', { email: this.state.email.toLowerCase(), id: this.props.id })
            .then(res => {
                this.props.updateUser(res.data)
                this.setState({
                    email: '',
                    emailVer: ''
                })
                expand('updateEmail')
            })
    }

    handleUpdateUserName() {
        if (!this.state.first_name) {
            this.setState({
                nameError: 'Enter First Name'
            })
            return;
        }
        if (!this.state.last_name) {
            this.setState({
                nameError: 'Enter Last Name'
            })
            return;
        }
        axios.put('/user/updateName', { first_name: this.state.first_name, last_name: this.state.last_name, id: this.props.id })
            .then(res => {
                this.props.updateUser(res.data)
                this.setState({
                    first_name: '',
                    last_name: ''
                })
                expand('updateName')
            })
    }

    handleUpdateUserAddress() {
        if (!this.state.address) {
            this.setState({
                addressError: 'Enter Address'
            })
            return;
        }
        if (!this.state.city) {
            this.setState({
                addressError: 'Enter City'
            })
            return;
        }
        if (!this.state.zipcode) {
            this.setState({
                addressError: 'Enter Zipcode'
            })
            return;
        }
        axios.put('/user/updateAddress', { address: this.state.address, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode, id: this.props.id})
            .then(res => {
                this.props.updateUser(res.data)
                this.setState({
                    address: '',
                    city: '',
                    zipcode: ''
                })
                expand('updateAddress')
            })
    }

    handleUpdateUserPassword() {
        //only do this if axios request to check if initial password was correct
        if (this.state.password !== this.state.passwordVer) {
            this.setState({
                passwordError: 'Password Mismatch'
            })
            return;
        }
        if (!this.state.password && !this.state.passwordVer) {
            this.setState({
                passwordError: 'Fields Require Input'
            })
            return;
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
                        <div>
                            <div onClick={() => { expand('updateEmail'); this.setState({ emailError: '', email: '', emailVer: '' }) }} className='userContainerHeaderInfo'>Update Email</div>
                            {
                                this.state.emailError ?
                                    <div className='flex-row heightZero slide-in'>{this.state.emailError}</div> :
                                    <div className='flex-row heightZero'>{this.state.emailError}</div>
                            }
                        </div>
                        <div id='updateEmail' className='userContainerContent heightZero'>
                            <p className='userContainerInputInfo'>New Email:</p>
                            <input className='userContainerInput' maxLength="255" value={email} onChange={(e) => this.handleChange(e, 'email')} type='email' />
                            <p className='userContainerInputInfo'>Confirm New Email:</p>
                            <input className='userContainerInput' maxLength="255" value={emailVer} onChange={(e) => this.handleChange(e, 'emailVer')} type='email' />
                            <button className='userContainerButton' onClick={() => this.handleUpdateUserEmail()}>Update</button>
                        </div>
                    </div>
                </div>
                <div className='userContainer flex-row'>
                    <div className='userContainerParent'>
                        <div>
                            <div onClick={() => { expand('updateName'); this.setState({ nameError: '', first_name: '', last_name: '' }) }} className='userContainerHeaderInfo'>Update Name</div>
                            {
                                this.state.nameError ?
                                    <div className='flex-row heightZero slide-in'>{this.state.nameError}</div> :
                                    <div className='flex-row heightZero'>{this.state.nameError}</div>
                            }
                        </div>
                        <div id='updateName' className='userContainerContent heightZero'>
                            <p className='userContainerInputInfo'>New First Name:</p>
                            <input className='userContainerInput' maxLength="50" value={first_name} onChange={(e) => this.handleChange(e, 'first_name')} type='text' />
                            <p className='userContainerInputInfo'>New Last Name:</p>
                            <input className='userContainerInput' maxLength="50" value={last_name} onChange={(e) => this.handleChange(e, 'last_name')} type='text' />
                            <button className='userContainerButton' onClick={() => this.handleUpdateUserName()}>Update</button>
                        </div>
                    </div>
                </div>
                <div className='userContainer flex-row'>
                    <div className='userContainerParent'>
                        <div>
                            <div onClick={() => { expand('updateAddress'); this.setState({ addressError: '', address: '', city: '', zipcode: '' }) }} className='userContainerHeaderInfo'>Update Address</div>
                            {
                                this.state.addressError ?
                                    <div className='flex-row heightZero slide-in'>{this.state.addressError}</div> :
                                    <div className='flex-row heightZero'>{this.state.addressError}</div>
                            }
                        </div>
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
                            <button className='userContainerButton' onClick={() => this.handleUpdateUserAddress()}>Update</button>
                        </div>
                    </div>
                </div>
                <div className='userContainer flex-row'>
                    <div className='userContainerParent'>
                        <div>
                            <div onClick={() => { expand('updatePassword'); this.setState({ passwordError: '', password: '', passwordVer: '' }) }} className='userContainerHeaderInfo'>Update Password</div>
                            {
                                this.state.passwordError ?
                                    <div className='flex-row heightZero slide-in'>{this.state.passwordError}</div> :
                                    <div className='flex-row heightZero'>{this.state.passwordError}</div>
                            }
                        </div>
                        <div id='updatePassword' className='userContainerContent heightZero'>
                            <p className='userContainerInputInfo'>Old Password:</p>
                            <input className='userContainerInput' type='password' maxLength="50" value={oldPassword} onChange={(e) => this.handleChange(e, 'oldPassword')} />
                            <p className='userContainerInputInfo'>New Password:</p>
                            <input className='userContainerInput' type='password' maxLength="50" value={password} onChange={(e) => this.handleChange(e, 'password')} />
                            <p className='userContainerInputInfo'>Confirm New Password:</p>
                            <input className='userContainerInput' type='password' maxLength="50" value={passwordVer} onChange={(e) => this.handleChange(e, 'passwordVer')} />
                            <button className='userContainerButton' onClick={() => this.handleUpdateUserPassword()}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function expand(idName, bool = true) {
    let show = document.getElementById(idName)

    if (show.classList.contains(idName)) {
        show.classList.remove(idName)
    }
    else if (bool) {
        show.classList.add(idName)
    }
}

function mapStateToProps(reduxState) {
    const { username, id } = reduxState
    return {
        username,
        id
    }
}

export default connect(mapStateToProps, { updateUser })(Profile)