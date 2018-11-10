import React, { Component } from 'react';
import Blog from '../component/blog/blog'
import BlogDetail from '../component/blog/blog-detail'
import Layout from '../component/container/layout'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.scss';


class App extends Component {
  state={
    loading:true
  }
  render() {
    return (
      <div className="App">
          <Layout>
            <Router>
              <Switch>
                <Route path='/' exact component={Blog}/>
                <Route path='/:id' component={BlogDetail}/>
              </Switch>  
            </Router>
          </Layout>
      </div>
    );
  }
}

export default App;
