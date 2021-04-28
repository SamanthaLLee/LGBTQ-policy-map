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
import { getAllStateIds } from '../lib/state'

// const endpoint = `http://localhost:3000/api/test`
// const legiscanEndpoint = `https://api.legiscan.com/?key=8dcb3de47fe70382df13df111e1b7d8e&op=search&state=NJ&query=LGBTQ`
// const legiscanEndpoint = `https://api.legiscan.com/?key=8dcb3de47fe70382df13df111e1b7d8e&op=search&state=${params.id}&query=LGBTQ`
const legiscanEndpoint = 'https://api.legiscan.com/?key=8dcb3de47fe70382df13df111e';
export default function Home({ data, allStateIds }){
  // console.log(data)
  // console.log(allStateIds)

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
        <MapChart allStateIds={allStateIds} setTooltipContent={""}></MapChart>
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
  const res = await fetch(legiscanEndpoint)
  const data = await res.json()
  const allStateIds = getAllStateIds()
  return {
    props: {
      data,
      allStateIds,
    },
  }
}
