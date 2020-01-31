import React from 'react'

const Job = (job) => {

console.log(job.fields);
const {slug, jobTitle, key, from, to, jobDescription, company, m} = job.fields

const chart = '\n'

const jobDescript = jobDescription.match(/[^\r\n]+/g)
const description = jobDescription.split(/\r?\n/)

  return(
    <div className="text">
      <h2 className="jobTitle">{jobTitle}, {company}</h2>
      <p className="date">{from} - {to}</p>
      <p className="jobDescription">{ description}</p>
    </div>
  )
}

export default Job
