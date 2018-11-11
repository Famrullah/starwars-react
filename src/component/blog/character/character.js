import React, { Component } from 'react';
import Loading from '../../hoc/withLoading'
import './_character-style.scss'

export default class test extends Component {
    state={
        character:[],
        loading:true
    }

    async componentDidMount(){
       this.fetchData()
    }

    componentWillUnmount(){
        this.setState({
            loading:false
        })
    }

    fetchData(){
        const data = this.props.data;
        // console.log(data)
        Promise.all(data.map(url =>
            fetch(url).then(resp => resp.json())
        )).then(json => {
            this.setState({
                character:json,
                loading:false
            })
        })
    }

    render() {
        if(this.state.loading){
            return(
                <Loading/>
            )
        }else{
            // console.log(this.state.character)
            let character = this.state.character.map((item,index)=>{
                return <div className="starwars-character__box" key={index}>
                            <p>Name : {item.name}</p>
                            <p>Height : {item.height}</p>
                            <p>Hair Color : {item.hair_color}</p>
                        </div>
            })
            return (
                <div className="wrapper">
                    <h1>Character</h1>
                    <div className="starwars-character">
                        {character}
                    </div>
                </div>
            );
        }
    }
};