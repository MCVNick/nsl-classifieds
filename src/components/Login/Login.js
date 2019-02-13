import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'
import axios from 'axios'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
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
            <div className='userContainer flex-row'>
                <div className='userContainerParent'>
                    <div className='userContainerHeaderInfo'>Log in here</div>
                    <div className='userContainerContent'>
                        <p className='userContainerInputInfo'>Display Name:</p>
                        <input className='userContainerInput' type='text' value={this.state.username} onChange={(e) => this.handleChange(e, 'username')}/>
                        <p className='userContainerInputInfo'>Password:</p>
                        <input className='userContainerInput' type='password' value={this.state.password} onChange={(e) => this.handleChange(e, 'password')}/>
                        <button className='userContainerButton' onClick={() => this.handleLogin()}>Log in</button>
                    </div>
                </div>
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

export default connect(mapStateToProps, { updateUser })(Login)