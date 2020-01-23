import { useEffect, useState } from 'react'
import Head from 'next/head'

import uuid from 'uuid'

import { Jobs } from '../components'

const client = require('contentful').createClient({
  space: process.env.contentfulSpaceId,
  accessToken: process.env.contenfulAccessToken
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    async function getJobs() {
      const allJobs = await fetchEntries()
      setJobs([...allJobs])
    }
    getJobs()


  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {jobs.length > 0
        ? jobs.map((p, index) => (
            <Jobs {...p} key={index}/>
          ))
        : null}

    </>
  )
}

export default HomePage
