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
import PartyTabs from '../components/PartyTabs' 
import { colors } from '@material-ui/core'
import { statusMap } from '../public/data/statusMap'

export default function Home({ allStateIds, natData, numBills }){
  const [content, setContent] = useState("");
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Description</p>
      </section>

      <section>
        <MapChart numBills={numBills} allStateIds={allStateIds} setTooltipContent={setContent}></MapChart>
        <ReactTooltip>{content}</ReactTooltip>

      </section>

      <section>
        <PartyTabs
          billsData={natData}
          stateName='the US'
        />

      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allStateIds = getAllStateData()
  const data = require('../public/data/allBills.json'); // pull data field from response w/ {}
  const natData: IBillDetails[] = data.filter(element => element.state === 'US');
  const numBills = {}

  allStateIds.forEach(function (item) {
    numBills[item['params']['id']] = data.filter(element => element.state === item['params']['id']).length
  });

  natData.forEach(function (item) {
    item['textStatus'] = statusMap[item['status']]
  });

  return {
    props: {
      allStateIds,
      natData,
      numBills
    },
  }
}
