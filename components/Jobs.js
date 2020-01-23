import React from 'react'

const Jobs = ( p ) => {

  const {slug, jobTitle, key, from, to, description, company} = p.fields

  return (
    <div className="container">
      <div className="text">
        <h2>{jobTitle}</h2>
        <h4>{company}</h4>
        <p className="date">{from} - {to}</p>
        <p>{description}</p>
      </div>
      <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
          background: red;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
        p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          margin-top: 8px;
        }
      `}</style>
    </div>
  )
}

export default Jobs
