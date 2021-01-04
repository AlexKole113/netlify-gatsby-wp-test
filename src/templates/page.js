import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import {graphql, Link, StaticQuery} from "gatsby";
import PostCollection from "../components/PostCollection";

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

