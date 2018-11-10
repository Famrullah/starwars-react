import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './_blog-style.scss'
import axios from 'axios';
import Character from './character'

class blogdetail extends Component {

    state={
        posts:[],
        characters:[]
    }

    async componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`https://swapi.co/api/films/${id}`)
            .then(item => {
                this.setState({
                    posts:item.data.characters,
                    characters:item.data
                })
            })
    }
    render() {
        const {characters} = this.state.characters
        if(!characters) return null
        const {title,episode_id,opening_crawl,director,producer} = this.state.characters
        
        console.log(this.state.json)
        return (
            <div className="container">
                <div className="starwars-film__detail">
                    <div className="starwars-film__detail__main-content">
                        <h1 className="title">{title}</h1>
                        <p>Episode :{episode_id} </p>
                        <p>{opening_crawl}</p>
                        <p className="director">DIRECTOR :{director} </p>
                        <p className="producer">PRODUCER :{producer} </p>
                        <Character data={this.state.posts}/>
                    </div>
                </div>
            </div>
        )
    }
};


export default withRouter(blogdetail);