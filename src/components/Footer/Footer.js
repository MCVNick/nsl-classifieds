import React from 'react'
import { withRouter } from 'react-router-dom'

import './Footer.scss'

function Footer(props) {
    return (
        <div className='footer-component'>
            <footer className='footer header-grid'>
                    <h1 className='flex-row footer-name center'>
                        <div className='flex-row high-weight'>
                            <p>N</p>
                            <p>S</p>
                            <p>L</p>
                        </div>
                        <div className='footer-name-dot'><div></div></div>
                        <div className='flex-row low-weight'>
                            <p>c</p>
                            <p>o</p>
                            <p>m</p>
                        </div>
                    </h1>
                    <div className='footer-text'>
                        <span>
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Mobile Apps</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Advertise</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Feedback</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Contact Us</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Careers with DDM</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Careers with NSL</a>
                        </span>
                    </div>
                    <div className='footer-text'>
                        <span>
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Terms of use</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Privacy Statement</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>DMCA Notice</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>EEO Public File Report</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>NSL-TV FCC Public File</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>NSL FM Radio FCC Public File</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>NSL AM Radio FCC Public File</a>
                            |
                            <a className='rickRollRed' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Closed Captioning Assistance</a>
                        </span>
                    </div>
                    <div className='footer-text'>
                        <span className='dotted-line-above'>
                            <p>© 2019 NSLcom | NSL Broadcasting Salt Lake City UT | Site</p>
                            <p>hosted & managed by Deseret Digital Media - a</p>
                            <p>Deseret Media Company v25</p>
                        </span>
                    </div>
            </footer>
        </div>
    )
}

export default withRouter(Footer)