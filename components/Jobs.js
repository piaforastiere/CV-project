import React, { useState, useEffect} from 'react'
import Job from './Job'


const client = require('contentful').createClient({
  space: process.env.contentfulSpaceId,
  accessToken: process.env.contenfulAccessToken
})

const Jobs = ( ) => {

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
    <div className="container">
    <h2 className="title">EMPLOYMENT HISTORY</h2>
    {jobs.length > 0
      ? jobs.sort().map((job, index) => (
          <Job {...job} key={index}/>
        ))
      : null}
    </div>
  )
}

export default Jobs
