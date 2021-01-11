import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './signup.css'
import TextError from '../texterror/TextError'
import Header from '../header/Header'
import signupFunc from "./SignupFunc"

function Signup(props) {
  const initialValues = {
    firstname: "",
    lastname:"",
    username: "",
    email: "",
    password: "",
    gender: "",
    jobrole:"",
    location: ""
  }
  
  const onSubmit = (values, submitProps) => {
    
    console.log("form value", values)
    signupFunc(values, props);
    // submitProps.resetForm()
  }

  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required').min(6, "Passwword should be at least 6 characters"),
    gender: Yup.string().required('Required'),
    jobrole: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
  })

  return (
    <div className="signup-container">
    <Header /> 
    <div className="title-div">
      <p>Create an account</p>
    </div>     
    <div className="signup-form">
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        <Form>
        <div className='form-control'>
          <label htmlFor='firstname'>
            First Name
            <span className="required-star"> *</span>
          </label>
          <Field
            type='text'
            id='firstname'
            name='firstname'
          />
         <ErrorMessage name="firstname" component={TextError}/>
 
        </div>

        <div className='form-control'>
          <label htmlFor='lastname'>
            Last Name
            <span className="required-star"> *</span>
          </label>
          <Field
            type='text'
            id='lastname'
            name='lastname'
          />
          <ErrorMessage name="lastname" component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='username'>
            User Name
            <span className="required-star"> *</span>
          </label>
          <Field
            type='text'
            id='username'
            name='username'
          />
          <ErrorMessage name="username" component={TextError}/>
        </div>

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

        <div className='form-control'>
          <label htmlFor='gender'>
            Gender
            <span className="required-star"> *</span>
          </label>
          <label>
          <Field
            type='radio'
            value='Male'
            name='gender'
          />
          </label>
          <label>
          <Field
            type='radio'
            value='Female'
            name='gender'
          />
          </label>
          <ErrorMessage name="gender" component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='jobrole'>
            Job Role
            <span className="required-star"> *</span>
          </label>
          <Field
            type='jobrole'
            id='jobrole'
            name='jobrole'
          />
        <ErrorMessage name="jobrole" component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='location'>
            Location
            <span className="required-star"> *</span>
          </label>
          <Field
            type='location'
            id='location'
            name='location'
          />
        <ErrorMessage name="location" component={TextError}/>
        </div>

        
        <div className="btn-div">
          <button type="submit" className="btn" >Submit</button>
        </div>
    </Form>
    </Formik>
      </div>
    </div>
  )
}

export default Signup;
