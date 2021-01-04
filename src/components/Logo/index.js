import React, {Component} from "react"
import {graphql , StaticQuery, Link} from "gatsby"
import './index.css'


export default class Logo extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (<div className={`logo-block`} >
                    {/*<StaticQuery query={graphql``}*/}
                    {/*             render={ props => (<Link to={`/`}><img src={''}/></Link>)*/}
                    {/*             }*/}
                    {/*/>*/}
                </div>)

    }


}
