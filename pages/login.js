import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import Router from 'next/router'

import {JobEdition} from '../components'

import "./styles.scss"

const FormValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Insert valid email'),
    name: Yup.string()
      .required('required'),
    password: Yup.string()
      .required('Password is required'),
})



const Login = () => {





  const [serverError, setServerError] = useState(false);
  const [serverSuccess, setServerSuccess] = useState(false)




  const handleSubmit = async (values, actions) => {
    try{
      let cloneValues = {...values}

      setServerSuccess(true);
    } catch(error) {
      setServerError(true);
    }
  }

const handleResetForm = () => {
  setServerSuccess(false);
  setServerError(false);

}


const initialValues = {
  name: '',
  email: '',
  password: ''
}

return (
  <div  className="">
      <div className="">

  {
    serverSuccess ?

      <JobEdition />
    :


    <div className="form-user">
      <div className="container-form shadow-dark">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={FormValidationSchema} >

          { ({values, errors, actions, dirty}) => (
            <Form id="">
              <h1>
                Login
              </h1>
              <div className="form-field">
                <fieldset>
                    <label>Name</label>
                    <Field type="text" name="name" id="name" />

                </fieldset>
              </div>
              <div className="status">
                <ErrorMessage name="name" />
              </div>
              <div className="form-field">
                <fieldset >
                    <label>Email</label>
                    <Field type="email" name="email" id="email" />

                </fieldset>
              </div>
              <div className="status">
                <ErrorMessage name="email" />
              </div>
              <div className="form-field">
                <fieldset>
                    <label>Password</label>
                    <Field type="password" name="password" id="password" />

                </fieldset>
              </div>
              <div className="status">
                <ErrorMessage name="name" />
              </div>
              <fieldset className="ta-c no-mb">
                <button type="submit" value="invia" id="invia" className="btn btn-primario btn-lock" data-value="send">Send</button>
              </fieldset>
            </Form>
          )}
          </Formik>
      </div>
    </div>
    }
    </div>
    </div>
      )
    }


export default Login;
