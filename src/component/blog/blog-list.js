import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './_blog-style.scss'

const list = (props)=>{
    // console.log(props)
    let re = /([1-9][0-9]*)/g
    let str = props.url;
    let id = str.match(re)
    
    return(
        <div className="starwars-film">
            <div className="starwars-film__content">
                <h1 className="starwars-film__content__title">{props.title}</h1>
                <div className="starwars-film__content__crawl">
                    <p className="starwars-film__content__episode">Episode : {props.episode}</p>
                    <br/>
                    <p>{props.crawl}</p>
                </div>
            </div>
            <Link to={{pathname: '/'+ id ,query: {data: props} }}>More Detail</Link>
        </div>
    )
}

export default withRouter(list);