import Layout from '../../components/layout'
import { getAllStateIds, getStateData, getAllStateData } from '../../lib/state'
import Head from 'next/head'
import Date from '../../components/date'
import Tabs from '../../components/Tabs'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { IBillDetails, BillStatus } from '../../models/data'

//import stateMappingData from '../../public/data/allStates'

const billData: IBillDetails[] = [
  {
    id: 5,
    status: 1,
    title: 'Mock Bill',
    description: 'Mock description',
    url: 'http://localhost:3000/',
    date: '2021-02-12',
    state: 'NJ',
    party: 'D'
  }
]

export default function StatePage({
  stateName,
  stateData
}){
  return (
    <Layout>
      <Head>
        <title>{stateName}</title>
      </Head>
      
      <article>
        <h1 className={utilStyles.headingXl}>{stateName}</h1>
        <div className={utilStyles.lightText}></div>

        <section>
      <Tabs></Tabs>

      </section>

        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllStateIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allStateData = await getAllStateData()
  const stateName = allStateData.find(element => element['params']['id'] === params.id)['params']['name'];
  
  const data = require('../../public/data/allBills.json'); // pull data field from response w/ {}
  const stateData = data.filter(element => element.state === params.id);

  console.log(stateData)
  return {
    props: {
      stateName,
      stateData
    }
  }
}
