import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/index.js"
import Image from "../components/Image/index.js"
import Seo from "../components/Seo/index.js"

import Hero from "../components/Hero/index.js";
import {graphql,StaticQuery} from "gatsby";
import {query} from "./using-typescript";
import PostCollection from "../components/PostCollection/index.js";

const IndexPage = () => (

    <>
      <Seo title={'test'} />
      <Layout>
          <Hero />
          <section className={'container'}>
              <PostCollection />
          </section>
      </Layout>
    </>


)
export default IndexPage
