import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import MapChart from '../components/MapChart'
import ReactTooltip from "react-tooltip";
import React, { useState } from 'react'
import useSWR from 'swr'

// const endpoint = `http://localhost:3000/api/test`
const legiscanEndpoint = `https://api.legiscan.com/?key=8dcb3de47fe70382df13df111e1b7d8e&op=search&state=NJ&query=LGBTQ`

export default function Home({ data }){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hiya, I'm Sam!</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>


      <section>
        <MapChart setTooltipContent={""}></MapChart>
        <ReactTooltip></ReactTooltip>

      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(legiscanEndpoint)
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}
