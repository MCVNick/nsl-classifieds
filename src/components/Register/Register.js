import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import axios from 'axios';
import { Link } from 'react-router-dom'

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
            state: 'UT',
            zipcode: '',
            NSLNewsradio: false,
            NSL5Television: false,
            NSLDeals: false,
            NSLcom: false,
            eighteen: false,
            errorList: []
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
                .catch(error => { })
        }
    }

    componentDidUpdate() {
        let showErrors = document.getElementById('auth-box-error')

        if (this.state.errorList.length > 0) {
            showErrors.classList.remove('none')
        }
        else {
            showErrors.classList.add('none')
        }
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    toggleRed = (id) => {
        let toBeRed = document.getElementById(id)

        toBeRed.classList.add('user-invalid-input')
    }

    handleRegister = () => {
        const { email, emailVer, first_name, last_name, address, address2, city, state, zipcode, password, passwordVer, username, NSLNewsradio, NSL5Television, NSLDeals, NSLcom, eighteen } = this.state
        let errors = []
        
        if (!password) {
            errors.push('A Password is Required')
            this.toggleRed('register-password-input')
            this.setState({
                errorList: errors
            })
            if (!email) {
                errors.push('An E-Mail Address is Required')
                this.toggleRed('register-email-input')
                this.setState({
                    errorList: errors
                })
            }
            return
        }
        
        if (!email) {
            errors.push('An E-Mail Address is Required')
            this.toggleRed('register-email-input')
            this.setState({
                errorList: errors
            })
            if (!password) {
                errors.push('A Password is Required')
                this.toggleRed('register-password-input')
                this.setState({
                    errorList: errors
                })
            }
            return
        }
        
        if (!eighteen) {
            errors.push("You must be at least 18 years old")
        }
        
        let emailTest = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!emailTest.test(email)) {
            errors.push("You need to enter a valid email address")
            this.toggleRed('register-email-input')
            this.toggleRed('register-email-ver-input')
        }
        
        if (email.toLowerCase() !== emailVer.toLowerCase()) {
            errors.push("Your email addresses don't match")
            this.toggleRed('register-email-ver-input')
        }
        
        if (password.length < 6) {
            errors.push('Your need to enter a password with at least six characters')
            this.toggleRed('register-password-input')
            this.toggleRed('register-password-ver-input')
        }

        if (password !== passwordVer) {
            errors.push("Your Passwords don't match")
            this.toggleRed('register-password-ver-input')
        }
        
        if (!first_name) {
            errors.push("You need to enter a first name")
            this.toggleRed('register-first-name-input')
        }
        
        if (!last_name) {
            errors.push("You need to enter a last name")
            this.toggleRed('register-last-name-input')
        }
        
        if (!address) {
            errors.push("You need to enter a street address")
            this.toggleRed('register-address-input')
        }
        
        if (!city) {
            errors.push("You need to enter a city")
            this.toggleRed('register-city-input')
        }
        
        if (!zipcode) {
            errors.push("You need to enter a zipcode")
            this.toggleRed('register-zipcode-input')
        }
        
        this.setState({
            errorList: errors
        })
        
        if (errors.length) {
            return;
        } else {
            const user = {
                email: email.toLowerCase(),
                first_name,
                last_name,
                address,
                address2,
                city,
                state,
                zipcode,
                password,
                username,
                NSLNewsradio,
                NSL5Television,
                NSLDeals,
                NSLcom
            }
            
            axios.post('/auth/register', user)
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push('/')
            })
            .catch(error => { })
        }
        
        
    }
    
    render() {
        const { email, emailVer, first_name, last_name, address, address2, city, state, zipcode, password, passwordVer, username, NSLNewsradio, NSL5Television, NSLDeals, NSLcom, errorList, eighteen, statesList } = this.state
        const options = statesList.map((state, index) => {
            return (
                <option key={index} value={state.name}>{state}</option>
            )
        })
        const errors = errorList.map((error, index) => {
            return (
                <li key={index}>ERROR :<span>{error}</span></li>
            )
        })

        return (
            <div className='user-auth-container-master'>
                <div className='user-auth-container-parent'>
                    <div className='user-auth-box'>
                        <div id='auth-box-error' className='auth-box-error none'>
                            {
                                this.state.errorList ?
                                    <ul>{errors}</ul> :
                                    null
                            }
                        </div>
                        <div className='auth-box-header'>
                            <h1>Sign up for a KSL.com Account</h1>
                        </div>
                        <div className='auth-box-content'>
                            <h2><span>*</span>Email Address:</h2>
                            <input id='register-email-input' type='email' maxLength='255' value={email} onChange={(e) => this.handleChange(e, 'email')} />
                            <p className='remove-margin'>(this is your login name)</p>
                            <h2><span>*</span>Confirm Email:</h2>
                            <input id='register-email-ver-input' type='email' maxLength='255' value={emailVer} onChange={(e) => this.handleChange(e, 'emailVer')} />
                            <h2><span>*</span>First Name:</h2>
                            <input id='register-first-name-input' type='text' maxLength="50" value={first_name} onChange={(e) => this.handleChange(e, 'first_name')} />
                            <h2><span>*</span>Last Name:</h2>
                            <input id='register-last-name-input' type='text' maxLength="50" value={last_name} onChange={(e) => this.handleChange(e, 'last_name')} />
                            <h2><span>*</span>Address Line 1:</h2>
                            <input id='register-address-input' type='text' maxLength="255" value={address} onChange={(e) => this.handleChange(e, 'address')} />
                            <h2>Address Line 2:</h2>
                            <input type='text' maxLength="255" value={address2} onChange={(e) => this.handleChange(e, 'address2')} />
                            <h2><span>*</span>City / State:</h2>
                            <div className='smaller-boxes-parent'>
                                <input id='register-city-input' className='auth-box-small-input' type='text' maxLength="50" value={city} onChange={(e) => this.handleChange(e, 'city')} />
                                <select className='auth-box-smaller-input' type='text' value={state} onChange={(e) => this.handleChange(e, 'state')}>{options}</select>
                            </div>
                            <h2><span>*</span>Zipcode</h2>
                            <input id='register-zipcode-input' className='auth-box-small-input' type='text' maxLength="25" value={zipcode} onChange={(e) => this.handleChange(e, 'zipcode')} />
                            <h2><span>*</span>Password:</h2>
                            <input id='register-password-input' type='password' maxLength="50" value={password} onChange={(e) => this.handleChange(e, 'password')} />
                            <h2><span>*</span>Confirm Password:</h2>
                            <input id='register-password-ver-input' type='password' maxLength="50" value={passwordVer} onChange={(e) => this.handleChange(e, 'passwordVer')} />
                            <h2>Screenname:</h2>
                            <input type='text' maxLength='30' value={username} onChange={(e) => this.handleChange(e, 'username')} />
                            <p>Optional. This will be your name on the comment boards)</p>
                            <h3>Subscribe</h3>
                            <div className='newsletter-subscribe-gird'>
                                <h1>NSL Newsradio</h1>
                                <input type='checkbox' onChange={() => { this.setState({ NSLNewsradio: !NSLNewsradio });}}/>
                                <h1>NSL 5 Television</h1>
                                <input type='checkbox' onChange={() => { this.setState({ NSL5Television: !NSL5Television });}}/>
                                <h1>NSL Deals</h1>
                                <input type='checkbox' onChange={() => { this.setState({ NSLDeals: !NSLDeals });}}/>
                                <h1>NSL.com</h1>
                                <input type='checkbox' onChange={() => { this.setState({ NSLcom: !NSLcom });}}/>
                            </div>
                            <h3 className='terms-of-agreement'>By creating an account, I agree to NSL's <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Terms of Service</a>, <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Privacy Statement</a> and Classifieds <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Terms of User</a>, KSL Local <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Review Guidelines and Terms of Use</a></h3>
                            <div className='same-line'>
                                <h2><span>*</span>I certify I am 18 or older</h2>
                                <input type='checkbox' onChange={() => { this.setState({ eighteen: !eighteen });}}/>
                            </div>
                            <div>
                                <button className='sign-up-button' onClick={() => { this.handleRegister() }}>Sign Up</button>
                            </div>
                            <h3 className='already-have-account'>Already have a NSL account? <Link to='/login'>Log in now</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { id, username } = reduxState.user
    return {
        id,
        username
    }
}

export default connect(mapStateToProps, { updateUser })(Register)