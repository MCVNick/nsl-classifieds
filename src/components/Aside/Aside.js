import React from 'react'
// import { connect } from 'react-redux'
// import { withRouter, Link } from 'react-router-dom'
// import axios from 'axios'

import './Aside.scss'

function handleExpand(name1, name2) {
    let rotateArr = document.getElementsByClassName('aside-expand-arrow')
    let first = document.getElementById(name1)
    let second = document.getElementById(name2)
    
    for(let x = 0; x < rotateArr.length; x++) {
        if(rotateArr[x].classList.contains('rotate90')) {
            if(rotateArr[x].id !== name2) {
                rotateArr[x].classList.remove('rotate90')
            }
        }
    }

    if(second.classList.contains('rotate90')) {
        second.classList.remove('rotate90')
    }
    else {
        second.classList.add('rotate90')
    }

    if(first.classList.contains(name1)) {
        first.classList.remove(name1)
    }
    else {
        first.classList.add(name1)
    }
}

function Aside(props) {
    return (
        <aside id='aside-nav' className='aside-nav aside-flex-row'>
            <div className='aside-flex-column'>
                <button className='transparent x-line' onClick={() => { props.expandAsideNav(); }}>
                    <div className='x-line-one'></div>
                    <div className='x-line-two'></div>
                </button>
                <div className='aside-content-parent'>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-news-h2s', 'aside-news-span')}>
                        <h1 className='aside-flex-row'>News <span id='aside-news-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-news-h2s'>
                            <h2>Utah</h2>
                            <h2>Southern Utah</h2>
                            <h2>Idaho</h2>
                            <h2>Features</h2>
                            <h2>U.S.</h2>
                            <h2>World</h2>
                            <h2>Politics</h2>
                            <h2>Traffic</h2>
                            <h2>Business</h2>
                            <h2>Entertainment</h2>
                            <h2>Outdoors</h2>
                            <h2>Latino</h2>
                        </div>
                    </div>
                    <div className='aside-content-single' onClick={() => handleExpand('aside-news-h2s', 'aside-news-span')}>
                        <h1 className='aside-flex-row'>News <span id='aside-news-span' className='aside-expand-arrow'>►</span></h1>

                        <div id='aside-news-h2s'>
                            <h2>Utah</h2>
                            <h2>Southern Utah</h2>
                            <h2>Idaho</h2>
                            <h2>Features</h2>
                            <h2>U.S.</h2>
                            <h2>World</h2>
                            <h2>Politics</h2>
                            <h2>Traffic</h2>
                            <h2>Business</h2>
                            <h2>Entertainment</h2>
                            <h2>Outdoors</h2>
                            <h2>Latino</h2>
                        </div>
                    </div>
                </div>
            </div>
        </aside >
    )
}

// function logout(props) {
//     axios.post('/auth/logout')
//         .then(res => {
//             props.updateUser({ id: 0 })
//             props.history.push('/')
//         })
// }

export default Aside
