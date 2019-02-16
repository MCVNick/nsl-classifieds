import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import './Home.scss'

class Home extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentDidMount() {
        const { id } = this.props;

        if (id) {
            //stay here
        } else {
            axios.get('/user/getSessionUser')
                .then(res => {
                    this.props.updateUser(res.data)
                })
                .catch(error => {})
        }
    }

    render() {
        return (
            <div>
                <h1 className='rick-roll-warning'>This is only a clone of the classifieds part of KSL, all other links will result in a Rick Roll. Also things like logging in work because they are needed to do some stuff in the classifieds section</h1>
                <main className='home-grid'>
                    <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='home-front-header'>
                        <div>
                            <h1>High levels of lead, copper found in drinking water for 600 Sandy households, officials say</h1>
                        </div>
                    </a>
                    <div className='home-secondary-headers'>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ'>
                            <img src='https://img.ksl.com/slc/2709/270955/27095549.jpg?filter=ksl/responsive_toppicks' alt='https://img.ksl.com/slc/2709/270955/27095549.jpg?filter=ksl/responsive_toppicks'/>
                            <h2>2 small earthquakes shake Bluffdale area</h2>
                        </a>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ'>
                            <img src='https://img.ksl.com/slc/2567/256722/25672268.jpg?filter=ksl/responsive_toppicks' alt='https://img.ksl.com/slc/2567/256722/25672268.jpg?filter=ksl/responsive_toppicks'/>
                            <h2>Intermountain Healthcare gives its doctors OK to recommend medical marijuana</h2>
                        </a>
                    </div>
                    <div className='latest-news-header'>
                        <h1>LATEST NEWS & FEATURES</h1>
                    </div>
                    <div className='latest-other-headlines'>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='image-other-headline-a'><img src='https://img.ksl.com/slc/2570/257043/25704334.jpg?filter=ksl/responsive_180' alt='https://img.ksl.com/slc/2570/257043/25704334.jpg?filter=ksl/responsive_180'/></a>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='h2-other-headline-a'><h2>UHP: Utah police chief arrested in DUI was driving in highway median</h2></a>
                        <h3 className='h3-other-headline-a'> Feb 15th - 8:08pm</h3>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='image-other-headline-b'><img src='https://img.ksl.com/slc/2601/260123/26012329.jpg?filter=ksl/responsive_180' alt='https://img.ksl.com/slc/2601/260123/26012329.jpg?filter=ksl/responsive_180' /></a>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='h2-other-headline-b'><h2>Sponsor of Utah hate crimes bill struggling to get support in Senate</h2></a>
                        <h3 className='h3-other-headline-b'>Feb 15th - 7:35pm</h3>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='image-other-headline-c'><img src='https://img.ksl.com/slc/2709/270953/27095358.jpg?filter=ksl/responsive_180' alt='https://img.ksl.com/slc/2709/270953/27095358.jpg?filter=ksl/responsive_180' /></a>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='h2-other-headline-c'><h2>Gunman kills 5 people, wounds 5 police at Illinois business</h2></a>
                        <h3 className='h3-other-headline-c'> Feb 15th - 7:06pm</h3>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='image-other-headline-d'><img src='https://img.ksl.com/slc/2709/270955/27095582.jpg?filter=ksl/responsive_180' alt='https://img.ksl.com/slc/2709/270955/27095582.jpg?filter=ksl/responsive_180' /></a>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='h2-other-headline-d'><h2>Charges filed for Denver man who police say carried gun into Moab school, 'trashed' cafeteria</h2></a>
                        <h3 className='h3-other-headline-d'>Feb 15th - 7:02pm</h3>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='image-other-headline-e'><img src='https://img.ksl.com/slc/2708/270807/27080746.jpg?filter=ksl/responsive_180' alt='https://img.ksl.com/slc/2708/270807/27080746.jpg?filter=ksl/responsive_180' /></a>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='h2-other-headline-e'><h2>2-4 inches of snow expected for Wasatch Front as winter storm moves through Utah Friday</h2></a>
                        <h3 className='h3-other-headline-e'>Feb 15th - 6:45pm</h3>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='image-other-headline-f'><img src='https://img.ksl.com/slc/2709/270955/27095507.jpg?filter=ksl/responsive_180' alt='https://img.ksl.com/slc/2709/270955/27095507.jpg?filter=ksl/responsive_180' /></a>
                        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='h2-other-headline-f'><h2>Pleasant Grove teen tackles distracted driving through Eagle Scout Project</h2></a>
                        <h3 className='h3-other-headline-f'>Feb 15th - 6:32pm</h3>
                    </div>
                </main>
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
export default connect(mapStateToProps, {updateUser})(Home)