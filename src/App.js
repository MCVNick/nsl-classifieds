import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import routes from './routes'

import HeaderNav from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'

import './reset.css'
import './userContainer.scss'
import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {}

    this.expandAsideNav = this.expandAsideNav.bind( this )
  }

  expandAsideNav(bool = true) {
    let aside = document.getElementById('AsideNav')
    let main = document.getElementById('NavAndContent')

    if (aside.classList.contains('AsideNavExpand')) {
      aside.classList.remove('AsideNavExpand')
    }
    else if (bool) {
      aside.classList.add('AsideNavExpand')
    }

    if (main.classList.contains('main-content-slid')) {
      main.classList.remove('main-content-slid')
    }
    else if (bool) {
      main.classList.add('main-content-slid')
    }
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className='flex-row'>
              <div id='NavAndContent' className='main-content-parent'>
                <HeaderNav expandAsideNav={this.expandAsideNav}/>
                {routes}
              </div>
              <Aside expandAsideNav={this.expandAsideNav}/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
