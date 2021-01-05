import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';
import TextError from '../texterror/TextError'
import Header from "../header/Header";
import { Route, Redirect } from "react-router-dom";

const api = "https://teamy-api.herokuapp.com/api/v1/login";

async function checkSignIn(arr) {
  let token;
    try {
        const userObj = {
            email: arr.email,
            password: arr.password,
        }

        const response = await (await fetch(api, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })).json();

        console.log(response);
        if(response.message === "Login succesfull"){
            setTimeout(() => {
                alert('Login successfull')
            }, 200)
          window.localStorage.setItem(token, response.token)
        }else{
            setTimeout(() => {
                alert(response.message)
            }, 200)
        }
        return response;
    } catch (error) {
        console.log(error);
    }
}



function Login() {
  const initialValues = {
    email: "",
    password: ""
  }
  const onSubmit = values => {
    console.log("form values", values)
    checkSignIn(values)
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
          <label htmlFor='email'>
            E-mail
            <span className="required-star"> *</span>
          </label>
          <Field
            type='email'
            id='email'
            name='email'
          />
          <ErrorMessage name="email" component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='password'>
            Password
            <span className="required-star"> *</span>
          </label>
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

export default Login;