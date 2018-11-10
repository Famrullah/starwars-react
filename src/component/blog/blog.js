import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import List from './blog-list'
import axios from 'axios'
import Loading from '../hoc/withLoading'
import './_blog-style.scss'

class blog extends Component {
    state={
        posts:[],
        loading:true
    }
   
    componentDidMount(){
        axios.get(`https://swapi.co/api/films/`)
        .then(response => {
            this.setState({
                posts:response.data.results,
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
            let template = this.state.posts.map(item => item)
            const sortEpisode = template.sort(function(obj1, obj2) {
                return obj1.episode_id - obj2.episode_id;
            });
            return (
                <div className="container">
                    <div className="grid-3">
                        {sortEpisode.map((item,index)=>{
                            return <List 
                            key={index}
                            title={item.title}
                            crawl={item.opening_crawl}
                            episode={item.episode_id}
                            character={item.characters}
                            />
                        })}
                    </div>
                </div>
        );
        }
    }
}


export default withRouter(blog);