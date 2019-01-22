import React from 'react';

import Article from '../Article.jsx';
import './style.css';

class ArticleList extends React.PureComponent {
    state = {
        openArticleId: null
    }
    render() {
        const ArticleElements = this.props.articles.map((article, index) => 
            <li key = {article.id} className='article-list__li'>
                <Article article={article}
                    isOpen = {this.state.openArticleId === article.id}
                    onButtonClick = {this.handleClick.bind(this, article.id)}
                />
            </li>
        )
        return (
            <ul>
                {ArticleElements}
            </ul>
        )
    }
    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })
}

export default ArticleList;