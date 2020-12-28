import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../formComponents/FormikControl'
import '../login/login.css'
import Header from '../header/Header'
import Nav from '../Nav'

function Login () {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required!'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <div className="container">
           <Nav />
            <div>
              <Form>
                <FormikControl
                  control='input'
                  type='email'
                  label='Email'
                  name='email'
                />
                <FormikControl
                  control='input'
                  type='password'
                  label='Password'
                  name='password'
                />
                <div className="btn-div">
                  <button type='submit' disabled={!formik.isValid} className="btn">Submit</button>
                </div>
              </Form>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}

export default Login;
