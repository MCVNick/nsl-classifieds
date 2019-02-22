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
            <div className='classifieds-component classifieds-grid'>
                <h1 style={{color: 'red'}}>I decided to do the housing part first</h1>
                <div>
                    {/* the circle with a plus */}
                    <p>Create Listing</p>
                </div>
                <div>
                    {/* The Listings Icon */}
                    <p>My Listings</p>
                </div>
                <div>
                    {/* The Heart */}
                    <p>Favorites</p>
                </div>
                <button>Categories</button>
                <button>Search</button>
                <button>Newest</button>
                <h1>Find Category Search <span>[?]</span></h1>
                <div className='none'>
                    {/* The Question Mark with a blue circle */}
                    <p>Enter the category you are looking for in the Find Category Search to easily view related listings.</p>
                    {/* The X Button */}
                </div>
                <ul>
                    {/* List of Categories */}
                </ul>
                <h1>Newest Listings <span>Refresh Listings >></span></h1>
                <div>
                    {/* <Listing></Listing> */}
                </div>
                <button>See More Listings</button>
                <h1>All Categories</h1>
                <ul>
                    {/* List of Categories */}
                </ul>
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