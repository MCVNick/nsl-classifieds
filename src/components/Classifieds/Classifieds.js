import React, { Component } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import './Classifieds.scss'

class Classifieds extends Component {
    constructor() {
        super()

        this.state = {}
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