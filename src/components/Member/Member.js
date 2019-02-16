import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'
import axios from 'axios'

import './Member.scss'

class Home extends Component {
    constructor () {
        super()

        this.state = {
            selected: 'home'
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

    render() {
        const { first_name, last_name } = this.props

        return (
            <div className='member-home-grid'>
                <h1>Account Options</h1>
                <h3 id='account-options-home' className='account-options-selected'>Home</h3>
                <h3 id='account-options-account'>Account</h3>
                <h3 id='account-options-newsletters'>Newsletters</h3>
                <h3 id='account-options-email-alerts'>Email Alerts</h3>
                <h3 id='account-options-enrollment'>Enrollment</h3>
                {
                    this.state.selected === 'home' ?
                    <div>
                        <h1>{first_name} {last_name} : Account Home</h1>
                    </div>
                    :
                    null
                }
                {
                    this.state.selected === 'account' ?
                    <div>
                        <h6>My ksl Account</h6>
                        <h2>Profile</h2>
                        <p>(Your private information is kept confedential and cannot be viewed by other accounts)</p>
                        <h1>Nick McQueen</h1>
                        <h3>displayname</h3>
                        <h4>Account Type:</h4>
                        <h5>placeholder</h5>
                        <h4>Account Created:</h4>
                        <h5>placeholder</h5>
                        <h4>Last Login:</h4>
                        <h5>placeholder</h5>
                        <h4>Login Tally:</h4>
                        <h5>placeholder</h5>
                        <h4>Email:</h4>
                        <h5>placeholder</h5>
                        <h4>Street Address:<span>[Edit]</span></h4>
                        <h5>placeholder</h5>
                        <h4>City, State, Zip:<span>[Edit]</span></h4>
                        <h5>placeholder</h5>
                        <h4>Primary Phone:<span>[Edit]</span></h4>
                        <h5>placeholder</h5>
                        <h4>Alt Phone:<span>[Edit]</span></h4>
                        <h5>placeholder</h5>
                        <h4>Password:<span>[Edit]</span></h4>
                        <h5>placeholder</h5>
                        <h2>Comment History</h2>
                        <button>Load More Comment History</button>
                        <button>Load More Comment History</button>
                    </div>
                    :
                    null
                }
                {
                    this.state.selected === 'newsletters' ?
                    <div>
                        <h1>Newsletter Subscriptions</h1>
                        <h2>NSL Newsradio</h2><input type='checkbox'/>
                        <h2>NSL 5 Television</h2><input type='checkbox'/>
                        <h2>NSL Deals</h2><input type='checkbox'/>
                        <h2>NSL.com</h2><input type='checkbox'/>
                        <button>Submit Changes</button>
                    </div>
                    :
                    null
                }
                {
                    this.state.selected === 'email-alerts' ?
                    <div>
                        <h2>List of Current Alerts</h2><input type='checkbox'/>
                        <h1>Location</h1>
                        <h1>Details</h1>
                        <h1>Reviews</h1>
                        <h1>Photos</h1>
                        <h1>Events</h1>
                        <h1>Bulletins</h1>
                        <h1>Highlights</h1>
                        <h1>Offers</h1>
                    </div>
                    :
                    null
                }
                {
                    this.state.selected === 'enrollment' ?
                    <div>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { first_name, last_name, id } = reduxState
    return {
        first_name,
        last_name,
        id
    }
}

export default connect(mapStateToProps, { updateUser })(Home)