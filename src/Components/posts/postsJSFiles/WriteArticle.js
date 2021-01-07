import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../postStyleFiles/writearticle.css'
import {checkToken} from "../../checkToken"
import TextError from "../../texterror/TextError";

const api = 'https://teamy-api.herokuapp.com/api/v1/posts';


function WriteArticle() {
  const initialValues = {
    title: "",
    article: ""
  }
  const onSubmit = values => {
    fetch (api, {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${checkToken()}`
      },
      body: JSON.stringify(values)
    })
    .then(data => data.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));
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
        <div className='article-div'>
          <label htmlFor="title">
            Title
            <span className="required-star"> *</span>
          </label>
          <Field
            type='title'
            id='title'
            name='title'
          />
          <ErrorMessage name="title" component={TextError}/>
        </div>

        <div className='article-div'>
          <label htmlFor='article'>
            Post
            <span className="required-star"> *</span>
          </label>
          <Field
            as="textarea"
            type='article'
            id='article'
            name='article'
          />
          <ErrorMessage name="article" component={TextError}/>
        </div>
        
        <div className="btn-gif-div">
          <div className="btn-div">
            <button type="submit" className="btn" >
              Post
            </button>
          </div>
        </div>
    </Form>
    </Formik>
      </div>
    </div>
  )
}

export default WriteArticle;
