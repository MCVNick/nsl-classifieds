import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Classifieds from './components/Classifieds/Classifieds'
import Member from './components/Member/Member'
import DeleteProfile from './components/Member/Delete/Delete'
import Article from './components/Articles/Article/Article'
import Articles from './components/Articles/Articles/Articles'

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register} />
        <Route path='/classifieds' component={Classifieds} />
        <Route path='/member/profile/delete' component={DeleteProfile} />
        <Route path='/member/profile/' component={Member} />
        <Route path='/news/:objName/:time' component={Article} />
        <Route path='/news/:objName' component={Articles} />
    </Switch>
)