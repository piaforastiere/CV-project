import React, { useState, useEffect } from 'react'

const EditJobForm = (props) => {

  const [job, setJob] = useState(props.currentJob)

  const handleInputChange = event => {
    const { name, value } = event.target

    setJob({ ...job, [name]: value })
  }

  useEffect(() => {
      setJob(props.currentJob)
    }, [props])


  return (
    <div  className="">
        <div className="container-form shadow-dark">
          <h1>Edit Job</h1>
          <form
            onSubmit={event => {
                event.preventDefault()
                console.log(job)
                props.updateJob(job.id, job)
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
              <div className="form-field">
                <button className="btn btn-primario btn-lock" >Update Job</button>
              </div>
              <div className="form-field">
                <button className="btn btn-primario btn-lock"  onClick={() => props.setEditing(false)}>
                  Cancel
                </button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default EditJobForm
