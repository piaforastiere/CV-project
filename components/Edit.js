import React, { useState, useEffect} from 'react'
import JobEdition from '../components/JobEdition'

import "../pages/styles.scss"


const Edit = ({job, index, editRow, deleteJob, id}) => {


const {jobTitle, key, from, to, jobDescription, company} = job


  return(

            <tr id={id}>
                <td className="">
                  <div className="text">
                    <h2 className="jobTitle">{jobTitle}, {company}</h2>
                    <p className="date">{from} - {to}</p>
                    <p className="jobDescription">{jobDescription}</p>
                  </div>
                </td>
                <td className="">
                  <button onClick={() => { editRow(job) }} className="button btn btn-secundario btn-lock" >
                    Edit
                  </button>
                  <button onClick={() => deleteJob(job.id)} className="button btn btn-secundario btn-lock">
                    Delete
                  </button>
                  </td>
              </tr>



  )
}

export default Edit
