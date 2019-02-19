import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'
import axios from 'axios'

import './Member.scss'

class Home extends Component {
    constructor () {
        super()

        this.state = {
            selected: 'account-options-home'
        }
    }
    componentDidMount() {
        const { id, first_name, last_name } = this.props;

        if (id) {
            //stay here
        } else {
            axios.get('/user/getSessionUser')
                .then(res => {
                    this.props.updateUser(res.data)
                })
                .catch(() => { this.props.history.push('/') })
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

    render() {
        const { first_name, last_name } = this.props
        return (
            <div className='member-home-grid'>
                <h1>Account Options</h1>
                <h3 id='account-options-home' onClick={() => {this.changeSelected('account-options-home')}} className='account-options-selected'>Home</h3>
                <h3 id='account-options-account' onClick={() => {this.changeSelected('account-options-account')}}>Account</h3>
                <h3 id='account-options-newsletters' onClick={() => {this.changeSelected('account-options-newsletters')}}>Newsletters</h3>
                <h3 id='account-options-email-alerts' onClick={() => {this.changeSelected('account-options-email-alerts')}}>Email Alerts</h3>
                <h3 id='account-options-enrollment' onClick={() => {this.changeSelected('account-options-enrollment')}}>Enrollment</h3>
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
                                <h1>Nick McQueen</h1>
                                {
                                    this.props.username ?
                                    <h3>this.props.username</h3> :
                                    null
                                }
                                <div className='personal-info-grid'>
                                    <h4>Account Type:</h4>
                                    <h5>Personal</h5>
                                    <h4>Account Created:</h4>
                                    <h5>{this.props.creation_time}</h5>
                                    <h4>Last Login:</h4>
                                    <h5>{this.props.last_log_in_time}</h5>
                                    <h4>Login Tally:</h4>
                                    <h5>{this.props.login_tally}</h5>
                                    <h4>Email:</h4>
                                    <h5>{this.props.email}</h5>
                                    <h4>Street Address:<span onClick={() => {this.showEdit('edit-address')}}>[Edit]</span></h4>
                                    <h5>{this.props.address} {this.props.address2}</h5>
                                    <h4>City, State, Zip:<span>[Edit]</span></h4>
                                    <h5>{this.props.city}, {this.props.state} {this.props.zipcode}</h5>
                                    <h4>Primary Phone:<span>[Edit]</span></h4>
                                    <h5>{this.props.primary_phone}</h5>
                                    <h4>Alt Phone:<span>[Edit]</span></h4>
                                    <h5>{this.props.alt_phone}</h5>
                                    <h4>Password:<span>[Edit]</span></h4>
                                    <h5 className='not-displayed-info'>(not displayed)</h5>
                                </div>
                                <h2 className='comment-history'>Comment History</h2>
                                <button>Load More Comment History</button>
                                <button>Load More Comment History</button>
                                <div className='bottom-line-personal-info'></div>
                            </div>
                            <div id='edit-address' className='edit-stuff none'>
                                <div>
                                    <h1>X</h1>
                                </div>
                                <h1>Address Line 1:</h1>
                                <input />
                                <h1>Address Line 2:</h1>
                                <input />
                                <button>Submit</button>
                            </div>
                            <div id='edit-city' className='edit-stuff none'>
                                <div>
                                    <h1>X</h1>
                                </div>
                                <h1>City:</h1>
                                <input />
                                <h1>State:</h1>
                                <input />
                                <h1>Zip:</h1>
                                <input />
                                <button>Submit</button>
                            </div>
                            <div id='edit-primary-phone' className='edit-stuff none'>
                                <div>
                                    <h1>X</h1>
                                </div>
                                <h1>Primary Phone:</h1>
                                <input />
                                <button>Submit</button>
                            </div>
                            <div id='edit-alt-phone' className='edit-stuff none'>
                                <div>
                                    <h1>X</h1>
                                </div>
                                <h1>Alt. Phone:</h1>
                                <input />
                                <button>Submit</button>
                            </div>
                            <div id='edit-alt-phone' className='edit-stuff none'>
                                <div>
                                    <h1>X</h1>
                                </div>
                                <h1>Old Password:</h1>
                                <input />
                                <h1>New Password:</h1>
                                <input />
                                <h1>Confirm New:</h1>
                                <input />
                                <button>Submit</button>
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
                                <h2>NSL Newsradio</h2><input type='checkbox' checked={this.props.nslnewsradio}/>
                                <h2>NSL 5 Television</h2><input type='checkbox' checked={this.props.nsl5television}/>
                                <h2>NSL Deals</h2><input type='checkbox' checked={this.props.nsldeals}/>
                                <h2>NSL.com</h2><input type='checkbox' checked={this.props.nslcom}/>
                            </div>
                            <button>Submit Changes</button>
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
    const { primary_phone, alt_phone, first_name, last_name, id, nslnewsradio, nsl5television, nsldeals, nslcom, username, creation_time, last_log_in_time, login_tally, email, address, address2, city, state, zipcode } = reduxState.user
    console.log(reduxState)
    return {
        first_name,
        last_name,
        id,
        nslnewsradio,
        nsl5television,
        nsldeals,
        nslcom,
        username,
        creation_time,
        last_log_in_time,
        login_tally,
        email,
        address,
        address2,
        city,
        state,
        zipcode,
        primary_phone,
        alt_phone
    }
}

export default connect(mapStateToProps, { updateUser })(Home)