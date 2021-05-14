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
import Tabs from '../components/Tabs' 

export default function Home({ allStateIds, natData }){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Description</p>
      </section>

      <section>
        <MapChart allStateIds={allStateIds} setTooltipContent={""}></MapChart>
        <ReactTooltip></ReactTooltip>

      </section>

      <section>
        <Tabs></Tabs>

      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allStateIds = getAllStateData()
  
  const data = require('../public/data/allBills.json'); // pull data field from response w/ {}
  const natData = data.filter(element => element.state === 'US');
  return {
    props: {
      allStateIds,
      natData
    },
  }
}
