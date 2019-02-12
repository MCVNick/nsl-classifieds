import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import axios from 'axios'

import './Login.css'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        const { username } = this.props;

        if (username) {
            this.props.history.push('/')
        } else {
            axios.get('/auth/getSessionUser')
                .then(res => {
                    this.props.history.push('/')
                })
        }
    }

    handleLogin() {
        let { username, password } = this.state
        username = username.toLowerCase()
        axios.post('/auth/login', { username, password })
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push('/')
            })
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='Login flex-row'>
                <div className='loginParent'>
                    <div className='loginHeaderInfo'>Log in here</div>
                    <div className='loginContent'>
                        <p className='loginInputInfo'>Display Name:</p>
                        <input className='loginInput' type='text' value={this.state.username} onChange={(e) => this.handleChange(e, 'username')}/>
                        <p className='loginInputInfo'>Password:</p>
                        <input className='loginInput' type='password' value={this.state.password} onChange={(e) => this.handleChange(e, 'password')}/>
                        <button className='loginButton' onClick={() => this.handleLogin()}>Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateUser })(Login)