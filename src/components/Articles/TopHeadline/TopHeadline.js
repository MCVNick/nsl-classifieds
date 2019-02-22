import React from 'react'

function TopHeadline(props) {
    return (
        <a href={'https://m.youtube.com/watch?v=dQw4w9WgXcQ'} className='home-front-header'>
            <img src={props.imgURL} alt='main_header' />
            <div>
                <h1>{props.title}</h1>
            </div>
        </a>
    )
}

export default TopHeadline