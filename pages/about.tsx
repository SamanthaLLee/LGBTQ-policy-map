import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>About</title>
      </Head>

      <section>
        <h1 className={utilStyles.headingLg}>General</h1>
        <p>
          LGBTQ+ rights remain heavily contested across America, and the LGBTQ+ Policy Map is a
          React web app that provides a visual breakdown of relevant legislative activity by state. By
          clicking on a state, users can view the details of all bills in that state that affect the LGBTQ+
          community, grouped by party support. To build the app and fetch the data, I used Next.js,
          Python, and the <a href="https://legiscan.com/legiscan">LegiScan API</a>.
        </p>

        <p>
          This project was made possible by <a href="https://outintech.com/">Out in Tech</a> and its wonderful <a href="https://outintech.com/mentorship/">mentorship program</a>. A huge thank you to my amazing mentor, <a href="https://www.linkedin.com/in/josh-jiayi-wang/">Josh Wang</a>, and the OIT U team!
        </p>

        <p>
          For more about me, the developer/mentee, check out my <a href="https://samanthallee.me/">website</a>.
        </p>

      </section>

      <section>
        <h1 className={utilStyles.headingLg}>Methodology</h1>
        <p>
          I fetched all the data from <a href="https://legiscan.com/legiscan">LegiScan</a> via Python. After developing a list of keywords ("queer," "same-sex," "transgender," etc.), I, for each state, used the Search API to query bills that contained
          those words and had relevance scores of at least 85%. The Bill API provided further details for each bill, such as its description, its status, sponsors and their parties, and vote breakdowns. All bills were stored into a JSON file, which can updated with a simple run of the Python script, and the React app filters through the data to route pages and display visuals.
          More specifically, the app groups the bills by state, then examines sponsorship to group bills on the state level by party support.
        </p>
      </section>

      <section>
        <h1 className={utilStyles.headingLg}>Todos</h1>
        <p>
          The methodology above is imperfect. Here are some future edits and implementations!
        </p>
        <ul>
          <li>Parties were meant to serve as proxies for the negative or positive impacts of the bills, but Democrat support is not always pro-queer, and Republican support is not always anti-queer. I want to revise this logic.</li>
          <li>More keywords should be added to include asexual people, intersex people, non-binary people, and people of other identities.</li>
          <li><a href="https://docs.openstates.org/en/latest/api/v3/">Open States</a> has an API similar to LegiScan's, and I'd like to see if it can provide additional insights.</li>
          <li>The map is colored based on general legislative activity, but I'd like to add a scoring system to evaluate how much a state protects or harms LGBTQ+ people.</li>
        </ul>
      </section>

      <section>
        <h1 className={utilStyles.headingLg}>Similar Resources</h1>
        <p>
          If you're interested in queer legislation, here are some related sites I drew inspiration from!
        </p>
        <ul>
          <li><a href="https://www.aclu.org/legislation-affecting-lgbt-rights-across-country">ACLU - Legislation Affecting LGBT Rights Across the Country</a></li>
          <li><a href="https://www.lgbtmap.org/equality-maps">Movement Advancement Project - Equality Maps</a></li>
          <li><a href="https://freedomforallamericans.org/legislative-tracker/">Freedom for All Americans - Legislative Tracker</a></li>
          <li><a href="https://www.thetrevorproject.org/get-involved/trevor-advocacy/50-bills-50-states/progress-map/">The Trevor Project - Progress Map</a></li>
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
    }
  }
}