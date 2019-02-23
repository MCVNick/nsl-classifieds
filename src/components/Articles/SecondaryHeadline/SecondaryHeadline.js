import React from 'react'
import { Link } from 'react-router-dom'

function SecondaryHeadline(props) {
    return (
        <Link to={`/news/${props.objName}/${props.publishedAt}`}>
            <img src={props.imgURL !== null ? props.imgURL : 'https://via.placeholder.com/350x150'} alt='img'/>
            <h2>{props.title}</h2>
        </Link>
    )
}

export default SecondaryHeadline