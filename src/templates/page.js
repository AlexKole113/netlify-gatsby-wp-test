import React from "react";
import Layout from "../components/Layout/index.js";
import Seo from "../components/Seo/index.js";
import {graphql, Link, StaticQuery} from "gatsby";
import PostCollection from "../components/PostCollection/index.js";

export default ({pageContext}) => {
    console.log(pageContext)
    return(
    <>
        <Seo title={'test'} />
        <Layout>
            <section className={'container'}>
                <div className={`page`}>
                    <div className={'content'} dangerouslySetInnerHTML={{__html: pageContext.content}}/>
                    <PostCollection />
                </div>
            </section>
        </Layout>
    </>
    );
}

