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
        const { urlToImage, title, publishedAt, content, author, description, url } = article
        return (
            <div className='article-component'>
                {
                    article.content
                    ?
                    <div>
                        <a href={`${url}`}><img src={urlToImage ? urlToImage : 'https://via.placeholder.com/350x150'} alt='img' /></a>
                        <a href={`${url}`}><h1>{title}</h1></a>
                        <div className='sub-header-article'>
                            <h2>By {author} |</h2>
                            <h2>&nbsp;{this.fixDate(publishedAt)}</h2>
                        </div>
                        <p>{description}</p>
                        <a href={`${url}`}><p>{content}</p></a>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default Article