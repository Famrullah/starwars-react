import React, { Component } from 'react';
import './_character-style.scss'


export default class test extends Component {
    render() {
        console.log(this.props.data)
        let character = this.props.data
        let characters = character.map((item,index)=>{
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
                    {characters}
                </div>
            </div>
        );
    }
};