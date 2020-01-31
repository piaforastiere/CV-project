import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import Router from 'next/router'

import {JobEdition} from '../components'



const FormValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Insert valid email'),
    name: Yup.string()
      .required('required'),
    phone: Yup.string()
      .required('phone is required'),
    message:Yup.string(),
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
  phone: '',
  message:'',
}

return (
  <div  className="">
      <div className="">

  {
    serverSuccess ?

    <div className="thank-you" style={{display: 'block'}}>
        <div className="thank-you__title">Thank you!</div>
        <div className="thank-you__desc" >Your message has been sent <br/> We will get back to you as soon as possible</div>
        <div className="thank-you__cta" id="restart" onClick={handleResetForm}>Write another message</div>
    </div>
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
                    <label>Phone</label>
                    <Field type="tel" name="phone" id="phone" />
                </fieldset>
              </div>
              <div className="status">
                <ErrorMessage name="phone" />
              </div>
              <div className="form-field">
                <fieldset>
                  <label>Leave a message</label>
                  <Field component="textarea" name="message" id="message" />
                </fieldset>
              </div>
              <div className="status">
                <ErrorMessage name="message" />
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
