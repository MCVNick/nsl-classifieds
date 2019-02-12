import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
    </Switch>
)