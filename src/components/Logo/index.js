import React, {Component} from "react"
import {graphql , StaticQuery, Link} from "gatsby"
import './index.css'


export default class Logo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (<div className={`logo-block`} >
                    <StaticQuery query={graphql`{
                                      wordpressWpLogo {
                                        url {
                                          source_url
                                        } 
                                        
                                      }
                                    }`}
                                 render={ props => (<Link to={`/`}><img src={props.wordpressWpLogo.url.source_url}/></Link>)
                                 }
                    />
                </div>)

    }


}
