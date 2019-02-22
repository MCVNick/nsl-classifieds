import React, { Component } from 'react'
import axios from 'axios'

import './Article.scss'

class Article extends Component {
    constructor() {
        super()

        this.state = {
            article: {}
        }
    }

    async componentDidMount() {
        let objName = this.props.match.params.objName
        let time = this.props.match.params.time
        let obj = await axios.get('/news/handleGetNews')
        obj = obj.data[objName]
        obj = obj.articles.filter((article) => {
            return article.publishedAt === time
        })
        obj = obj[0]
        this.setState({
            article: obj
        })
    }

    fixDate(date) {
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr',
            'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ]
        
        const month = monthNames[Number(date.slice(5, 7) - 1)]
    
        let day = date.slice(8, 10)
        if (day.slice(day.length - 1) === '1') {
            day = `${day}st`
        } else if (day.slice(day.length - 1) === '2') {
            day = `${day}nd`
        } else if (day.slice(day.length - 1) === '3') {
            day = `${day}rd`
        } else {
            day = `${day}th`
        }
    
        let time = date.slice(11, 16)
        let hours = Number(date.slice(11, 13))
        let minutes = date.slice(14, 16)
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

    render() {
        const { article } = this.state
        const { urlToImage, title, publishedAt, content } = article
        return (
            <div className='article-component'>
                {
                    article.content
                    ?
                    <div>
                        <img src={urlToImage} alt='img' />
                        <h2>{title}</h2>
                        <h3>{this.fixDate(publishedAt)}</h3>
                        <p>{content}</p>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default Article