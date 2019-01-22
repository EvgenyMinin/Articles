import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import articles from './fixtures'
import ArticleList from './components/ArticleList';

class App extends React.PureComponent {

    state = {
        reverted: false
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>
                        Super App
                        <button className='btn btn-primary' onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        );
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App;