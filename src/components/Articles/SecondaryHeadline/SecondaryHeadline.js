import React from 'react'
import { Link } from 'react-router-dom'

function SecondaryHeadline(props) {
    return (
        <Link to={`/news/${props.objName}/${props.publishedAt}`}>
            <img src={props.imgURL} alt='first_secondary_header' />
            <h2>{props.title}</h2>
        </Link>
    )
}

export default SecondaryHeadline