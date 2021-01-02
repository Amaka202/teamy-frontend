import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './writearticle.css'
import TextError from "../texterror/TextError";
import sendIcon from "./Img/transparentSendIcon.jpg";
import gifIcon from "./Img/gifIcon.png";

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
          <div>
            <button type="submit" className="send-btn">
              <img src={sendIcon} alt="send icon" />
            </button>
          </div>
          <div className="gif-div">
            <img src={gifIcon} alt="gifIcon"/>
          </div>
        </div>
    </Form>
    </Formik>
      </div>
    </div>
  )
}

export default WriteArticle;
