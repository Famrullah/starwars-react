import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './_blog-style.scss'

const list = (props)=>{
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
            <Link to={{pathname: '/'+ props.episode ,query: {data: props} }}>More Detail</Link>
        </div>
    )
}

export default withRouter(list);