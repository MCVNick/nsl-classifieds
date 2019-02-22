import React from 'react'

function SecondaryHeadline(props) {
    return (
        <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ'>
            <img src={props.imgURL} alt='first_secondary_header' />
            <h2>{props.title}</h2>
        </a>
    )
}

export default SecondaryHeadline