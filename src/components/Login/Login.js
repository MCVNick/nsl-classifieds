import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './../../user-auth-container.scss'
import './Login.scss'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            signInError: ''
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
                .catch(error => {})
        }
    }

    componentDidUpdate() {
        let errors = document.getElementById('auth-box-error')

        if (this.state.signInError) {
            errors.classList.remove('none')
        }
        else {
            errors.classList.add('none')
        }
    }

    handleLogin() {
        if (!this.state.password || !this.state.email) {
            this.setState({
                signInError: 'A Username and Password are Required'
            })
            return
        }

        let { email, password } = this.state
        email = email.toLowerCase()
        axios.post('/auth/login', { email, password })
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push('/')
            })
            .catch(() => {
                this.setState({signInError: 'Invalid E-mail Address or Password'})
            })
    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value,
            signInError: ''
        })
    }

    render() {
        return (
            <div className='user-auth-container-master'>
                <div className='user-auth-container-parent'>
                    <div className='user-auth-box'>
                        <div id='auth-box-error' className='auth-box-error none'>
                            {
                                this.state.signInError ?
                                <ul><li>ERROR :<span>{this.state.signInError}</span></li></ul> :
                                null
                            }
                        </div>
                        <div className='auth-box-header'>
                            <h1>Log in here</h1>
                        </div>
                        <div className='auth-box-content'>
                            <h2 className='margin-fix'>E-mail Address:</h2>
                            <input type='email' maxLength='255' value={this.state.email} onChange={(e) => {this.handleChange(e, 'email')}}/>
                            <h2 className='margin-fix'>Password:</h2>
                            <input type='password' maxLength='50' value={this.state.password} onChange={(e) => {this.handleChange(e, 'password')}}/>
                            <button className='transparent' onClick={() => {this.handleLogin()}}>Log In</button>
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Forgot your password?</a>
                            <p>Don't have an account?<Link className='sign-up-now' to='/register'>Sign up now</Link></p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, { updateUser })(Login)