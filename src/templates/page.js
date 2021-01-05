import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostCollection from "../components/PostCollection";

export default ({pageContext}) => {
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




