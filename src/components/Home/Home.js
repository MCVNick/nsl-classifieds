import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

class Home extends Component {
    constructor() {
        super()

        this.state = {}
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
        }
    }

    render() {
        return (
            <div>
                <p>This page is useless right now</p>
                <p>click the menu for functioning stuff</p>
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
export default connect(mapStateToProps, {updateUser})(Home)