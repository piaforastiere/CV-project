import React, { useState } from 'react'

const AddJobForm = ({addJob}) => {


  const initialFormState = {
    id: null,
    jobTitle: '',
    company: '',
    from: '',
    to: '',
    jobDescription: '' }

  const [job, setJob] = useState(initialFormState)


  const handleInputChange = event => {
  const { name, value } = event.target

    setJob({ ...job, [name]: value })
  }

  return (
    <div  className="">
        <div className="container-form shadow-dark">
          <form
            onSubmit={event => {
                event.preventDefault()
                if (!job.jobTitle || !job.company || !job.from || !job.to || !job.jobDescription ) return

                addJob(job)
                setJob(initialFormState)
              }}
            >
              <div className="form-field">
                <label>Job Title</label>
                <input type="text" name="jobTitle" value={job.jobTitle} onChange={handleInputChange} placeholder={job.jobTitle}/>
              </div>
              <div className="form-field">
                <label>Company</label>
                <input type="text" name="company" value={job.company} onChange={handleInputChange} />
              </div>
              <div className="form-field">
                <label>From</label>
                <input type="text" name="from" value={job.from} onChange={handleInputChange} />
              </div>
              <div className="form-field">
                <label>To</label>
                <input type="text" name="to" value={job.to} onChange={handleInputChange} />
              </div>
              <div className="form-field">
                <label>Job Description</label>
                <input type="text" name="jobDescription" value={job.jobDescription} onChange={handleInputChange} />
              </div>
            <button className="btn btn-primario btn-lock" >Add new job</button>
          </form>
    </div>
  </div>
  )
}

export default AddJobForm
