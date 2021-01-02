import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';
import TextError from '../texterror/TextError'
import Header from "../header/Header";


function Signup() {
  const initialValues = {
    email: "",
    password: ""
  }
  const onSubmit = values => {
    console.log("form values", values)
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required').min(6, "Passwword should be at least 6 characters"),
  })

  return (
    <div className="login-container">
      <div className="header">
        <Header />
      </div>
      <div className="login-form">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        <Form>
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field
            type='email'
            id='email'
            name='email'
          />
          <ErrorMessage name="email" component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <Field
            type='password'
            id='password'
            name='password'
          />
          <ErrorMessage name="password" component={TextError}/>
        </div>
        
        
        <div className="btn-div">
          <button type="submit" className="btn">Submit</button>
        </div>
    </Form>
    </Formik>
      </div>
    </div>
  )
}

export default Signup