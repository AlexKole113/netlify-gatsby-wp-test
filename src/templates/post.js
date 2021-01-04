import React from "react";
import './style/post.css'
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostCollection from "../components/PostCollection";

export default ({pageContext}) => {

    return(
    <>
        <Seo title={'test'} />
        <Layout>
            <section className={'container'}>
                <div className={`post`}>
                    <h1>{pageContext.title}</h1>
                    <div className={'content'} dangerouslySetInnerHTML={{__html: pageContext.content}}/>
                    <PostCollection />
                </div>
            </section>
        </Layout>
    </>
    );
}