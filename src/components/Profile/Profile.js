import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import axios from 'axios'
import './Profile.css'

class Profile extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    componentDidMount() {
        const { username } = this.props;

        if (username) {
            //stay here
        } else {
            axios.get('/auth/getSessionUser')
                .then(res => {
                    this.props.updateUser(res.data)
                })
                .catch(error => { this.props.history.push('/') })
        }
    }

    render() {
        return (
            <div>
                Profile Settings
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { username } = reduxState
    return {
        username
    }
}

export default connect(mapStateToProps, { updateUser })(Profile)