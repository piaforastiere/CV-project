import React from 'react'

const Job = (job) => {

const {slug, jobTitle, key, from, to, jobDescription, company} = job.fields
  return(
    <div className="text">
      <h2 className="jobTitle">{jobTitle}, {company}</h2>
      <p className="date">{from} - {to}</p>
      <p className="jobDescription">{jobDescription}</p>
    </div>
  )
}

export default Job
