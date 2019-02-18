import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import './Classifieds.scss'

class Classifieds extends Component {
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
                <p>classifieds</p>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { id } = reduxState.user
    return {
        id
    }
}
export default connect(mapStateToProps, {updateUser})(Classifieds)