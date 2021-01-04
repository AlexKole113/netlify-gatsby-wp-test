import React from "react"

import Layout from "../components/Layout/index.js"
import Seo from "../components/Seo/index.js"
import PostCollection from "../components/PostCollection/index.js";

const NotFoundPage = () => (<>
    <Seo title="404: Not found" />
    <Layout>
        <section className={'container'}>
            <div className={`page`}>
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                <PostCollection />
            </div>
        </section>
    </Layout>
</>
)

export default NotFoundPage



