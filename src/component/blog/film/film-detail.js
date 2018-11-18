import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './_film-style.scss'
import axios from 'axios';
import Loading from '../../hoc/withLoading'
import Character from '../character/character'

class blogdetail extends Component {

    state={
        posts:[],
        characters:[],
        loading:true
    }

    componentDidMount(){
        this.fetchData(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.setState({
            loading:false
        })
    }

    async fetchData(id){
        const response = await axios.get(`https://swapi.co/api/films/${id}`);
        const data = await response.data
       
        const character = await Promise.all(data.characters.map(async function(item){
            const characters = await axios.get(item)
            const charactersData = await characters.data
            return charactersData
        }))

        this.setState({
            posts:data,
            characters:character,
            loading:false
        })
    }

    render() {
        console.log(this.state.characters)
        if(this.state.loading){
            return (
                <div className="container">
                    <Loading/>
                </div>
            )
        }else{
            const {characters} = this.state
            const {title,episode_id,opening_crawl,director,producer} = this.state.posts
            return (
                <div className="container">
                    <div className="starwars-film__detail">
                        <div className="starwars-film__detail__main-content">
                            <h1 className="title">{title}</h1>
                            <p>Episode :{episode_id} </p>
                            <p>{opening_crawl}</p>
                            <br/>
                            <p className="director">DIRECTOR :{director} </p>
                            <p className="producer">PRODUCER :{producer} </p>
                        </div>
                    </div>
                    <Character data={characters}/>
                </div>
            )
        }
    }
};


export default withRouter(blogdetail);