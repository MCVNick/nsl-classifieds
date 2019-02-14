import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import './Home.scss'

class Home extends Component {
    constructor() {
        super()

        this.state = {}
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
                .catch(error => {})
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
    const { id } = reduxState
    return {
        id
    }
}
export default connect(mapStateToProps, {updateUser})(Home)