import React from 'react'

function fixDate(date) {
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ]

    const month = monthNames[Number(date.slice(5,7)-1)]
    
    let day = date.slice(8,10)
    if (day.slice(day.length - 1) === '1') {
        day = `${day}st`
    } else if (day.slice(day.length - 1) === '2') {
        day = `${day}nd`
    } else if (day.slice(day.length - 1) === '3') {
        day = `${day}rd`
    } else {
        day = `${day}th`
    }

    let time = date.slice(11,16)
    let hours = Number(date.slice(11,13))
    let minutes = date.slice(14,16)
    if (hours - 7 < 0) {
        hours = hours - 7 + 24
    } else {
        hours -= 7
    }
    if (hours > 12) {
        time = `${hours - 12}:${minutes}pm`
    } else {
        time = `${hours}:${minutes}am`
    }


    return `${month} ${day} - ${time}`
}

function ThirdHeadlines(props) {
    return (
        <div>
            <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='image-other-headline-a'><img src={props.imgURL} alt='img' /></a>
            <a href='https://m.youtube.com/watch?v=dQw4w9WgXcQ' className='h2-other-headline-a'><h2>{props.title}</h2></a>
            <h3 className='h3-other-headline-a'>{fixDate(props.publishedAt)}</h3>
        </div>
    )
}

export default ThirdHeadlines