import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './writearticle.css'
import TextError from "../texterror/TextError"

function WriteArticle() {
  const initialValues = {
    title: "",
    article: ""
  }
  const onSubmit = values => {
    console.log("form values", values)
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    article: Yup.string().required('Required')
  })

  return (
    <div className="write-container">
      <div className="write-form">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        <Form>
        <div className='form-control'>
          <label htmlFor="title">Title</label>
          <Field
            type='title'
            id='title'
            name='title'
          />
        <ErrorMessage name="title" component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='article'>Post</label>
          <Field
            as="textarea"
            type='article'
            id='article'
            name='article'
          />
        </div>
        <ErrorMessage name="article" component={TextError}/>
        
        <div className="btn-div">
          <button type="submit" className="btn">Submit</button>
        </div>
    </Form>
    </Formik>
      </div>
    </div>
  )
}

export default WriteArticle;
