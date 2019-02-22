import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

import TopHeadline from './../Articles/TopHeadline/TopHeadline'
import SecondaryHeadline from './../Articles/SecondaryHeadline/SecondaryHeadline'
import ThirdHeadline from './../Articles/ThirdHeadlines/ThirdHeadlines'

import './Home.scss'

class Home extends Component {
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
                    newsObj: res.data.utahNewsObj
                })
                console.log(res.data.utahNewsObj)
            })
            .catch(() => {})
    }

    render() {
        const { articles } = this.state. newsObj
        let otherArticles
        try {
            otherArticles = articles.map((article, index) => {
                return <ThirdHeadline key={index} imgURL={article.urlToImage} title={article.title} publishedAt={article.publishedAt}/>
            })
        } catch {}

        return (
            <div className='home-component'>
                <h1 className='rick-roll-warning'>If you click on things I didn't tell you to click on it is probably a Rick Roll</h1>
                {
                    articles && articles.length >= 3 ?
                    <main className='home-grid'>
                        <TopHeadline imgURL={articles[0].urlToImage} title={articles[0].title} />
                        <div className='home-secondary-headers'>
                            <SecondaryHeadline imgURL={articles[1].urlToImage} title={articles[1].title}/>
                            <SecondaryHeadline imgURL={articles[2].urlToImage} title={articles[2].title}/>
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
export default connect(mapStateToProps, {updateUser})(Home)