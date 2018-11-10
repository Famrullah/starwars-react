import React, { Component } from 'react';
import Loading from '../hoc/withLoading'
import './_blog-style.scss'

export default class test extends Component {
    state={
        character:[],
        loading:true
    }

    componentDidMount(){
       this.fetchData()
    }

    fetchData(){
        const data = this.props.data;
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
            console.log(this.state.character)
            let test = this.state.character.map((item,index)=>{
                return <div className="character__box" key={index}>
                            <p>Name : {item.name}</p>
                            <p>Height : {item.height}</p>
                            <p>Hair Color : {item.hair_color}</p>
                        </div>
            })
            return (
                <div className="wrapper">
                    <h1>Character</h1>
                    <div className="character">
                        {test}
                    </div>
                </div>
            );
        }
    }
};