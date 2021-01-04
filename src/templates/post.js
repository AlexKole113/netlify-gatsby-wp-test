import React from "react";
import './style/post.css'
import Layout from "../components/Layout/index.js";
import Seo from "../components/Seo/index.js";
import PostCollection from "../components/PostCollection/index.js";


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