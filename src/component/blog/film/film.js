import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import List from './film-list'
import axios from 'axios'
import Loading from '../../hoc/withLoading'
import './_film-style.scss'

class blog extends Component {
    state={
        posts:[],
        loading:true
    }
   
    componentDidMount(){
        axios.get(`https://swapi.co/api/films/`)
        .then(response => {
            const sort = response.data.results.sort(function(obj1, obj2) {
                return obj1.episode_id - obj2.episode_id;
            });
            this.setState({
                posts:sort,
                loading:false
            })
        })

    }

    render() {
        if(this.state.loading){
           return(
               <div className="container">
                    <Loading/>
               </div>
           )
        }else{
            let data = this.state.posts.map(item => item)
            let template = data.map((item,index)=>{
                return <List 
                key={index}
                title={item.title}
                crawl={item.opening_crawl}
                episode={item.episode_id}
                character={item.characters}
                url={item.url}
                />
            })
            return (
                <div className="container">
                    <div className="grid-3">
                        {template}
                    </div>
                </div>
        );
        }
    }
}


export default withRouter(blog);