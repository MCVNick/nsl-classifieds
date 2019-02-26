import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../../ducks/reducer'

import TopHeadline from './../TopHeadline/TopHeadline'
import SecondaryHeadline from './../SecondaryHeadline/SecondaryHeadline'
import ThirdHeadline from './../ThirdHeadlines/ThirdHeadlines'

import './Articles.scss'

class Articles extends Component {
    constructor() {
        super()

        this.state = {
            newsObj: {}
        }
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
                .catch(() => {})
        }

        axios.get('/news/handleGetNews')
            .then(res => {
                this.setState({
                    newsObj: res.data[this.props.match.params.objName]
                })
            })
            .catch(() => {})
    }

    componentDidUpdate() {
        axios.get('/news/handleGetNews')
            .then(res => {
                this.setState({
                    newsObj: res.data[this.props.match.params.objName]
                })
            })
            .catch(() => {})
    }

    render() {
        const { articles } = this.state.newsObj
        let otherArticles
        try {
            otherArticles = articles.map((article, index) => {
                return index > 3 ? <ThirdHeadline key={index} imgURL={article.urlToImage} title={article.title} objName={this.props.match.params.objName} author={article.author} publishedAt={article.publishedAt}/> : null
            })
        } catch {}

        return (
            <div className='home-component'>
                {
                    articles && articles.length >= 3 ?
                    <main className='home-grid'>
                        <TopHeadline description={articles[0].description} imgURL={articles[0].urlToImage} title={articles[0].title} objName={this.props.match.params.objName} author={articles[0].author} publishedAt={articles[0].publishedAt}/>
                        <div className='home-secondary-headers'>
                            <SecondaryHeadline imgURL={articles[1].urlToImage} title={articles[1].title} objName={this.props.match.params.objName} author={articles[1].author} publishedAt={articles[1].publishedAt}/>
                            <SecondaryHeadline className='middle-secondary-article' imgURL={articles[2].urlToImage} title={articles[2].title} objName={this.props.match.params.objName} author={articles[2].author} publishedAt={articles[2].publishedAt}/>
                            <SecondaryHeadline imgURL={articles[3].urlToImage} title={articles[3].title} objName={this.props.match.params.objName} author={articles[3].author} publishedAt={articles[3].publishedAt}/>
                        </div>
                        <div className='latest-news-header'>
                            <h1>LATEST NEWS & FEATURES</h1>
                        </div>
                        <div className='latest-other-headlines'>
                            {
                                otherArticles ?
                                otherArticles :
                                null
                            }
                        </div>
                    </main>
                    :
                    null
                }
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { id } = reduxState.user
    return {
        id
    }
}
export default connect(mapStateToProps, {updateUser})(Articles)