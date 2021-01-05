import React from "react"
import {graphql , StaticQuery, Link} from "gatsby";
import './index.css'

export default class PostCollection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<StaticQuery query={graphql`{
                              allWordpressPost(limit: 6) {
                                edges {
                                  node {
                                    id
                                    title
                                    excerpt
                                    link
                                    slug
                                    featured_media {
                                      source_url
                                    }
                                  }
                                }
                              }
                            }`} render={props => (<div>
                    <h2>Last Posts</h2>
                    <div className={`post-collection`}>
                        {props.allWordpressPost.edges.map( elm => <div key={elm.node.id} className={`post-onHome`} >
                            <Link className={`post-collection__link`} to={`/post/${elm.node.slug}`}>
                                <div style={{backgroundImage:`url(${ (elm.node.featured_media) ? (elm.node.featured_media.source_url ) : ''})`}} className={`post-collection__img`}></div>
                                <p>{elm.node.title}</p>
                            </Link>
                            <p dangerouslySetInnerHTML={{__html:elm.node.excerpt}} />
                       </div> )}
                    </div>
                </div>
            )} />
        )

    }
}