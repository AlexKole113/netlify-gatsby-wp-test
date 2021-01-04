import React from "react"
import {graphql , StaticQuery, Link} from "gatsby";
import './index.css'

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<nav className={`main-nav`}>
                    <ul className={`main-nav-list`}>
                        <StaticQuery query={graphql`{
                                  allWordpressWpApiMenusMenusItems(filter:{name:{eq:"new"}}){
                                    edges {
                                      node {
                                       items{                      
                                        title
                                        object_slug
                                        url
                                       }
                                      }
                                    }
                                  }
                                }`}
                                     render={props => (
                                             props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map( elm => <li key={elm.object_slug} className={`main-nav-list__item`}><Link to={`/${elm.object_slug}`} >{elm.title}</Link></li>)
                                     )}
                        />

                    </ul>
                </nav>
        )

    }
}