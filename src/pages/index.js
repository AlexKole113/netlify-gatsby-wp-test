import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Seo from "../components/Seo"

import Hero from "../components/Hero";
import {graphql,StaticQuery} from "gatsby";
import {query} from "./using-typescript";
import PostCollection from "../components/PostCollection";

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
