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
import { getAllStateData } from '../lib/state'
import { IBillBasics, IBillDetails, BillStatus } from '../models/data'

export default function Home({ data, allStateIds }){

  // overview of all states in the sidebar
  const billData: IBillBasics = 
    {
      numPro: 200,
      numAnti: 100,
      bestStates: ['NY'],
      worstStates: ['TX']
    }
  
  // national bills displayed below map
  const natBills: IBillDetails[] = [
    {
      id: 5,
      status: BillStatus.PASSED,
      title: 'Mock Bill',
      description: 'Mock description',
      url: 'http://localhost:3000/',
      date: '2021-02-12',
      state: 'NJ',
      party: 'D'
    }
  ]

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
  const allStateIds = getAllStateData()
  return {
    props: {
      allStateIds,
    },
  }
}
