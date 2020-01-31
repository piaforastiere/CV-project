import React, { useState, useEffect } from 'react'

import {Edit, AddJobForm, EditJobForm, Menu} from '../components'

import "./styles.scss"


const EditPage = () => {

  const objects = [
    {
      id:'0',
      jobTitle:'Front-end Developer',
      company:'Publicist Sapient',
      from: 'Mar 2019',
      to:'Present',
      jobDescription:"Working side by side in teams with Graphic Designers, XZ and Backend Developers. Requirement Analysis. Configuration, content migration, customization and creation of websites. Customization of templates and extensions for the implementation of thematic web sites, based on best practices for the design and development. Convert PSD, Sketch and (eplin mock-ups into responsive and pixel perfect sites. Re-factoring webpages with ReactJS, SCSS, JQuery, Javascript, HTML5, PHP, Laravel. Headless CMS Management.",
    },
    {
      id:'1',
      jobTitle:'Web Developer',
      company:'Lighuen Desanto',
      from: 'Dec 2019 ',
      to:'Jan 2020',
      jobDescription:'Web Portfolio - ReactJS, Dropbox API, isotope, scss.',
    },
    {  id:'2',
      jobTitle:'Web Developer',
      company:'Sport Illustrated Play',
      from: 'Nov 2016',
      to:'Aug 2019',
      jobDescription:"Leading the site and content creation for Sports Illustrated Play new sites. Conqguration, content migration and customization of pages. Customization of templates and extensions for the implementation of thematic web sites, based on best practices for the design and development.",
    },
    {
      id:'3',
      jobTitle:'Web Developer and Designer',
      company:'Diga ah!',
      from: 'Apr 2019',
      to:'Apr 2019',
      jobDescription:'Discussing with clients on their re—uirements. Analyzed the job and provided a timeline for completion. Implementation of the new corporate image on the main site. Implementing HTML, CSS, JavaScript, and uploading content upon re—uest. Stripe implementation for payments. Collaborate with clients to make sure the website met their needs and satisfaction. Provide support to the client as needed after the website is launched.',
    },
    {
      id:'4',
      jobTitle:'Web Developer',
      company:'Mandala cAPITAL',
      from: 'Sep 2018',
      to:'Oct 2018',
      jobDescription:'Discussing with clients on their re—uirements. Analyzed the job and provided a timeline for completion. Implementation of the new corporate image on the main site. Implementing HTML, CSS, JavaScript, and uploading content upon re—uest. Provide support to the client as needed after the website is launched.',
    },
    {
      id:'5',
      jobTitle:'Graphic Designer',
      company:'Nolii',
      from: 'Aug 2018',
      to:'Sep 2018',
      jobDescription:'Set of cards, tote bags and postcards design for :The Design Junction:, London.',
    },
    {
      id:'6',
      jobTitle:'Web Developer and Designer',
      company:'San Isidro Empresa de Pintura SRL',
      from: 'Apri 2018',
      to:'Jul 2018',
      jobDescription:'Discussing with clients on their re—uirements. Analyzed the job and provided a timeline for completion. Designing the layout and architecture of the websites, as well as the graphic elements, and the website to be compliant with mobile devices. Implementation of the new corporate image on the main site. Implementing HTML, CSS, JavaScript, and uploading content upon re—uest. Collaborate with clients to make sure the website met their needs and satisfaction. Provide support to the client as needed after the website is launched. SEO implementation',
    },
  ]


  const [jobs, setJobs] = useState(objects)
  const [editing, setEditing] = useState(false)


  const addJob = job => {
    job.id = jobs.length + 1
    setJobs([job, ...jobs])
  }


  const deleteJob = id => {
    console.log(jobs);
    setJobs(jobs.filter(job => job.id !== id))
    console.log(jobs);
  }

  const initialFormState = {
    id: null,
    jobTitle: '',
    company: '',
    from: '',
    to: '',
    jobDescription: '' }

  const [currentJob, setCurrentJob] = useState(initialFormState)

  const editRow = (job) => {
    setEditing(true)

    setCurrentJob({ id: job.id,
                    jobTitle: job.jobTitle,
                    company: job.company,
                    from: job.from,
                    to: job.to,
                    jobDescription: job.jobDescription })
  }

  const updateJob = (id, updatedJob) => {
    setEditing(false)

    setJobs(jobs.map(job => (job.id === id ? updatedJob : job)))

  }


  return (

        <div className="">
          <Menu />
          <div className="container">
            <div className="col-md-6 float-left col-sm-12">
              <div className="flex-large">
                {editing ? (
                  <div>

                    <EditJobForm
                      editing={editing}
                      setEditing={setEditing}
                      currentJob={currentJob}
                      updateJob={updateJob}
                    />
                  </div>
                ) : (
                  <div>
                    <h2>Add Job</h2>
                      <AddJobForm addJob={addJob}/>
                  </div>
                )}
              </div>


            </div>
            <div className="col-md-6 float-right col-sm-12">
              <table>
                <thead>
                  <tr>
                    <th>EMPLOYMENT HISTORY</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    jobs.length > 0 ?
                       jobs.map((job, index)=> (
                        <Edit job={job} index={index} id={index} deleteJob={deleteJob} key={index} editRow={editRow}/>
                      ))
                    : null
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )

  }

export default EditPage
