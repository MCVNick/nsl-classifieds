import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateUser } from './../../../ducks/reducer'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Delete.scss'

class Delete extends Component {
    constructor() {
        super()

        this.state = {
            errorList: [],
            password: '',
            passwordVer: ''
        }
    }

    componentDidMount() {
        const { id } = this.props;


        if (id) {
            
        } else {
            axios.get('/user/getSessionUser')
                .then(res => {
                    this.props.updateUser(res.data)
                })
                .catch(() => { this.props.history.push('/') })
        }

    }

    handleChange(e, name) {
        const { value } = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate() {
        let errors = document.getElementById('auth-box-error')

        if (this.state.errorList.length > 0) {
            errors.classList.remove('none')
        }
        else {
            errors.classList.add('none')
        }
    }

    handleDeleteAccount() {
        let errors = []

        if (this.state.password !== this.state.passwordVer) {
            errors.push('Password Mismatch')
        }
        if (!this.state.password && !this.state.passwordVer) {
            errors.push('Fields Require Input')
        }

        this.setState({
            errorList: errors
        })

        if (errors.length > 0) {
            return
        }

        axios.post('/auth/verifyPassword', { password: this.state.password, id: this.props.id })
            .then(res => {
                axios.delete(`/user/delete/${this.props.id}`)
                    .then(res => {
                        this.props.updateUser({ id: 0 })
                        this.props.history.push('/')
                    })
            })
            .catch(error => { this.setState({ errorList: ['Incorrect Password'] }) })
    }

    render() {
        const errors = this.state.errorList.map((error, index) => {
            return (
                <li key={index}>ERROR :<span>{error}</span></li>
            )
        })
        const { password, passwordVer } = this.state
    
        return (
            <div className='user-auth-container-master delete-account-component'>
                <div className='user-auth-container-parent'>
                    <div className='user-auth-box'>
                        <div id='auth-box-error' className='auth-box-error none'>
                            {
                                this.state.errorList ?
                                    <ul>{errors}</ul> :
                                    null
                            }
                        </div>
                        <div className='auth-box-header'>
                            <h1>Delete Account</h1>
                        </div>
                        <div className='auth-box-content'>
                            <h2 className='margin-fix'>Password:</h2>
                            <input id='register-password-input' type='password' maxLength="50" value={password} onChange={(e) => this.handleChange(e, 'password')} />
                            <h2 className='margin-fix'>Confirm Password:</h2>
                            <input id='register-password-ver-input' type='password' maxLength="50" value={passwordVer} onChange={(e) => this.handleChange(e, 'passwordVer')} />
                            <button className='userContainerButton' onClick={() => this.handleDeleteAccount()}>Delete Account</button>
                            <p>Changed your mind?<Link className='sign-up-now' to='/member/profile'>Go back</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState.user
}

export default connect(mapStateToProps, { updateUser })(Delete)