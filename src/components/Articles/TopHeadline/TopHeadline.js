import React from 'react'
import { Link } from 'react-router-dom'

function TopHeadline(props) {
    return (
        <Link to={`/news/${props.objName}/${props.publishedAt}`} className='home-front-header'>
            <img src={props.imgURL !== null ? props.imgURL : 'https://via.placeholder.com/350x150'} alt='main_header' />
            <div>
                <h1>{props.title}</h1>
            </div>
        </Link>
    )
}

export default TopHeadline