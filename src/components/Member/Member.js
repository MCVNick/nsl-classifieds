import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Member.scss'

class Home extends Component {
    constructor(props) {
        super(props)

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
            selected: 'account-options-home',
            address: '',
            address2: '',
            city: '',
            state: 'UT',
            zipcode: '',
            primary_phone: '',
            alt_phone: '',
            oldPassword: '',
            newPassword: '',
            newPasswordVer: '',
            errorList: [],
            radio: false,
            fiveTelevision: false,
            deals: false,
            com: false
        }
    }

    componentDidMount() {
        const { id } = this.props;


        if (id) {
            const { nslnewsradio, nsl5television, nsldeals, nslcom } = this.props;
            this.setState({
                radio: nslnewsradio,
                fiveTelevision: nsl5television,
                deals: nsldeals,
                com: nslcom
            })
        } else {
            axios.get('/user/getSessionUser')
                .then(res => {
                    this.props.updateUser(res.data)
                    const { nslnewsradio, nsl5television, nsldeals, nslcom } = res.data;
                    this.setState({
                        radio: nslnewsradio,
                        fiveTelevision: nsl5television,
                        deals: nsldeals,
                        com: nslcom
                    })
                })
                .catch(() => { this.props.history.push('/') })
        }

    }

    componentDidUpdate() {
        try {
            let showErrors = document.getElementById('edit-box-error')

            if (this.state.errorList.length > 0) {
                showErrors.classList.remove('none')
            }
            else {
                showErrors.classList.add('none')
            }
        } catch {

        }
    }

    changeSelected(name) {
        let selected = document.getElementsByClassName('account-options-selected')
        selected[0].classList.remove('account-options-selected')

        let newSelected = document.getElementById(name)
        newSelected.classList.add('account-options-selected')
        this.setState({
            selected: name
        })
    }

    showEdit(name) {
        let selected = document.getElementById(name)

        if (selected.classList.contains('none')) {
            selected.classList.remove('none')
        }
        else {
            selected.classList.add('none')
            this.setState({
                address: '',
                address2: '',
                city: '',
                state: 'UT',
                zipcode: '',
                primary_phone: '',
                alt_phone: '',
                oldPassword: '',
                newPassword: '',
                newPasswordVer: '',
                errorList: []
            })
        }
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleUpdateUserAddress() {
        let errors = []

        if (!this.state.address) {
            errors.push('Invalid Address Entered')
        }

        this.setState({
            errorList: errors
        })

        if (errors.length > 0) {
            return
        }

        axios.put('/user/updateAddress', { address: this.state.address, address2: this.state.address2, id: this.props.id })
            .then(res => {
                this.props.updateUser(res.data)
                this.showEdit('edit-address')
            })
    }

    handleUpdateCity() {
        let errors = []

        if (!this.state.city) {
            errors.push('Invalid city entered')
        }
        if (!this.state.zipcode) {
            errors.push('Invalid zip code entered')
        }

        this.setState({
            errorList: errors
        })

        if (errors.length > 0) {
            return
        }

        axios.put('/user/updateCity', { city: this.state.city, state: this.state.state, zipcode: this.state.zipcode, id: this.props.id })
            .then(res => {
                this.props.updateUser(res.data)
                this.showEdit('edit-city')
            })
    }

    handleUpdatePrimaryPhone() {
        axios.put('/user/updatePrimaryPhone', { primary_phone: this.state.primary_phone, id: this.props.id })
            .then(res => {
                this.props.updateUser(res.data)
                this.showEdit('edit-primary-phone')
            })
    }

    handleUpdateAltPhone() {
        axios.put('/user/updateAltPhone', { alt_phone: this.state.alt_phone, id: this.props.id })
            .then(res => {
                this.props.updateUser(res.data)
                this.showEdit('edit-alt-phone')
            })
    }

    handleUpdateUserPassword() {
        let errors = []

        if (this.state.newPassword !== this.state.newPasswordVer) {
            errors.push('Password did not match')
        }
        if (!this.state.newPassword && !this.state.newPasswordVer && !this.state.oldPassword) {
            errors.push('Blank data sent to server')
        }
        if (this.state.newPassword.length < 6) {
            errors.push('Invalid/Unsafe password entered')
        }

        this.setState({
            errorList: errors
        })

        if (errors.length > 0) {
            return
        }

        axios.post('/auth/verifyPassword', { password: this.state.oldPassword, id: this.props.id })
            .then(res => {
                axios.put('/auth/updatePassword', { password: this.state.newPassword, id: this.props.id })
                    .then(res => {
                        this.props.updateUser(res.data)
                        this.showEdit('edit-password')
                    })
            })
            .catch(error => { this.setState({ errorList: ['Password provided is incorrect'] }) })
    }

    handleChangeNewsletters() {
        const { radio, fiveTelevision, deals, com } = this.state
        axios.put('/user/updateNewsletters', { id: this.props.id, nslnewsradio: radio, nsl5television: fiveTelevision, nsldeals: deals, nslcom: com })
            .then(res => {

            })
    }

    render() {
        const options = this.state.statesList.map((state, index) => {
            return (
                <option key={index} value={state.name}>{state}</option>
            )
        })
        const errors = this.state.errorList.map((error, index) => {
            return (
                <li key={index}>{error}</li>
            )
        })
        const { address: updateAddress, address2: updateAddress2, city: updateCity, state: updateState, zipcode: updateZipcode, primary_phone: updatePrimaryPhone, alt_phone: updateAltPhone, oldPassword, newPassword, newPasswordVer } = this.state
        let { radio, fiveTelevision, deals, com } = this.state
        const { first_name, last_name, username, creation_time, last_log_in_time, login_tally, email, address, address2, city, state, zipcode, primary_phone, alt_phone } = this.props


        return (
            <div className='member-home-grid'>
                <h1>Account Options</h1>
                <h3 id='account-options-home' onClick={() => { this.changeSelected('account-options-home') }} className='account-options-selected'>Home</h3>
                <h3 id='account-options-account' onClick={() => { this.changeSelected('account-options-account') }}>Account</h3>
                <h3 id='account-options-newsletters' onClick={() => { this.changeSelected('account-options-newsletters') }}>Newsletters</h3>
                <h3 id='account-options-email-alerts' onClick={() => { this.changeSelected('account-options-email-alerts') }}>Email Alerts</h3>
                <h3 id='account-options-enrollment' onClick={() => { this.changeSelected('account-options-enrollment') }}>Enrollment</h3>
                <Link to='/member/profile/delete'><h3>Delete Account</h3></Link>
                <div id='account-options-expanded'>
                    {
                        this.state.selected === 'account-options-home' ?
                            <div className='account-options-home-parent'>
                                <h1>{first_name} {last_name} : Account Home</h1>
                            </div>
                            :
                            null
                    }
                    {
                        this.state.selected === 'account-options-account' ?
                            <div className='account-options-account-parent'>
                                <h6>My nsl.com Account</h6>
                                <div>
                                    <h2>Profile</h2>
                                    <p>(Your private information is kept confidential and cannot be viewed by other accounts)</p>
                                    <h1>{first_name} {last_name}</h1>
                                    {
                                        username ?
                                            <h3 className='username-account-options'>{username}</h3> :
                                            null
                                    }
                                    <div className='personal-info-grid'>
                                        <h4>Account Type:</h4>
                                        <h5>Personal</h5>
                                        <h4>Account Created:</h4>
                                        <h5>{creation_time}</h5>
                                        <h4>Last Login:</h4>
                                        <h5>{last_log_in_time}</h5>
                                        <h4>Login Tally:</h4>
                                        <h5>{login_tally}</h5>
                                        <h4>Email:</h4>
                                        <h5>{email}</h5>
                                        <h4>Street Address:<span onClick={() => { this.showEdit('edit-address') }}>[Edit]</span></h4>
                                        <h5>{address} {address2}</h5>
                                        <h4>City, State, Zip:<span onClick={() => { this.showEdit('edit-city') }}>[Edit]</span></h4>
                                        <h5>{city}, {state} {zipcode}</h5>
                                        <h4>Primary Phone:<span onClick={() => { this.showEdit('edit-primary-phone') }}>[Edit]</span></h4>
                                        <h5>{primary_phone}</h5>
                                        <h4>Alt Phone:<span onClick={() => { this.showEdit('edit-alt-phone') }}>[Edit]</span></h4>
                                        <h5>{alt_phone}</h5>
                                        <h4>Password:<span onClick={() => { this.showEdit('edit-password') }}>[Edit]</span></h4>
                                        <h5 className='not-displayed-info'>(not displayed)</h5>
                                    </div>
                                    <h2 className='comment-history'>Comment History</h2>
                                    <button>Load More Comment History</button>
                                    <button>Load More Comment History</button>
                                    <div className='bottom-line-personal-info'></div>
                                </div>
                                <div id='edit-address' className='edit-stuff none'>
                                    <div>
                                        <h1 onClick={() => { this.showEdit('edit-address') }}>X</h1>
                                    </div>
                                    {
                                        this.state.errorList ?
                                            <ul id='edit-box-error'>{errors}</ul> :
                                            null
                                    }
                                    <h1>Address Line 1:</h1>
                                    <input maxLength="255" value={updateAddress} onChange={(e) => this.handleChange(e, 'address')} type='text' />
                                    <h1>Address Line 2:</h1>
                                    <input maxLength="255" value={updateAddress2} onChange={(e) => this.handleChange(e, 'address2')} type='text' />
                                    <button onClick={() => this.handleUpdateUserAddress()}>Submit</button>
                                </div>
                                <div id='edit-city' className='edit-stuff none'>
                                    <div>
                                        <h1 onClick={() => { this.showEdit('edit-city') }}>X</h1>
                                    </div>
                                    {
                                        this.state.errorList ?
                                            <ul id='edit-box-error'>{errors}</ul> :
                                            null
                                    }
                                    <h1>City:</h1>
                                    <input type='text' maxLength="50" value={updateCity} onChange={(e) => this.handleChange(e, 'city')} />
                                    <h1>State:</h1>
                                    <select type='text' value={updateState} onChange={(e) => this.handleChange(e, 'state')}>{options}</select>
                                    <h1>Zip:</h1>
                                    <input type='text' maxLength="25" value={updateZipcode} onChange={(e) => this.handleChange(e, 'zipcode')} />
                                    <button onClick={() => this.handleUpdateCity()}>Submit</button>
                                </div>
                                <div id='edit-primary-phone' className='edit-stuff none'>
                                    <div>
                                        <h1 onClick={() => { this.showEdit('edit-primary-phone') }}>X</h1>
                                    </div>
                                    {
                                        this.state.errorList ?
                                            <ul id='edit-box-error'>{errors}</ul> :
                                            null
                                    }
                                    <h1>Primary Phone:</h1>
                                    <input type='text' maxLength='20' value={updatePrimaryPhone} onChange={(e) => this.handleChange(e, 'primary_phone')} />
                                    <button onClick={() => this.handleUpdatePrimaryPhone()}>Submit</button>
                                </div>
                                <div id='edit-alt-phone' className='edit-stuff none'>
                                    <div>
                                        <h1 onClick={() => { this.showEdit('edit-alt-phone') }}>X</h1>
                                    </div>
                                    {
                                        this.state.errorList ?
                                            <ul id='edit-box-error'>{errors}</ul> :
                                            null
                                    }
                                    <h1>Alt. Phone:</h1>
                                    <input type='text' maxLength='20' value={updateAltPhone} onChange={(e) => this.handleChange(e, 'alt_phone')} />
                                    <button onClick={() => this.handleUpdateAltPhone()}>Submit</button>
                                </div>
                                <div id='edit-password' className='edit-stuff none'>
                                    <div>
                                        <h1 onClick={() => { this.showEdit('edit-password') }}>X</h1>
                                    </div>
                                    {
                                        this.state.errorList ?
                                            <ul id='edit-box-error'>{errors}</ul> :
                                            null
                                    }
                                    <h1>Old Password:</h1>
                                    <input type='password' maxLength="50" value={oldPassword} onChange={(e) => this.handleChange(e, 'oldPassword')} />
                                    <h1>New Password:</h1>
                                    <input type='password' maxLength="50" value={newPassword} onChange={(e) => this.handleChange(e, 'newPassword')} />
                                    <h1>Confirm New:</h1>
                                    <input type='password' maxLength="50" value={newPasswordVer} onChange={(e) => this.handleChange(e, 'newPasswordVer')} />
                                    <button onClick={() => this.handleUpdateUserPassword()}>Submit</button>
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        this.state.selected === 'account-options-newsletters' ?
                            <div className='account-options-newsletters-parent'>
                                <h1>Newsletter Subscriptions</h1>
                                <div>
                                    <h2>NSL Newsradio</h2><input type='checkbox' onChange={() => { this.setState({ radio: !radio }) }} checked={radio} />
                                    <h2>NSL 5 Television</h2><input type='checkbox' onChange={() => { this.setState({ fiveTelevision: !fiveTelevision }) }} checked={fiveTelevision} />
                                    <h2>NSL Deals</h2><input type='checkbox' onChange={() => { this.setState({ deals: !deals }) }} checked={deals} />
                                    <h2>NSL.com</h2><input type='checkbox' onChange={() => { this.setState({ com: !com }) }} checked={com} />
                                </div>
                                <button onClick={() => { this.handleChangeNewsletters(); this.changeSelected('account-options-home') }}>Submit Changes</button>
                            </div>
                            :
                            null
                    }
                    {
                        this.state.selected === 'account-options-email-alerts' ?
                            <div className='account-options-email-alerts-parent'>
                                <h2>List of Current Alerts</h2>
                                <div>
                                    <h1>Location</h1>
                                    <h1>Details</h1>
                                    <h1>Reviews</h1>
                                    <h1>Photos</h1>
                                    <h1>Events</h1>
                                    <h1>Bulletins</h1>
                                    <h1>Highlights</h1>
                                    <h1>Offers</h1>
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        this.state.selected === 'account-options-enrollment' ?
                            <div>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState.user
}

export default connect(mapStateToProps, { updateUser })(Home)