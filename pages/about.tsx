import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'


import Image from 'next/image'
import styles from './layout.module.css'

export default function About({
    allPostsData
  }: {
    allPostsData: {
      date: string
      title: string
      id: string
    }[]
  }) {
    return (
      <Layout home>
        <Head>
          <title>About</title>
        </Head>

        <h1 className={utilStyles.headingLg}>General</h1>
        <section>
          <p>
            Yay Out in Tech U’s Mentorship Program
          </p>
        </section>

        <h1 className={utilStyles.headingLg}>Methodology</h1>
        <section>
          <p>
            Coming soon.
          </p>
        </section>

        <h1 className={utilStyles.headingLg}>Todos</h1>
        <section>
          <p>
            Coming soon.
          </p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </Layout>
    )
  }
  
  export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }