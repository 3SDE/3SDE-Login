import React from "react";
import { Formik, Form, Field } from "formik";
import {forgotPassword} from "../../apiCalls";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}
 const ForgotPassword = () => {
    const navigate = useNavigate()
    return (
   <div className='form-group'>
     <h1>Forgot Password</h1>
     <Formik className= "form"
       initialValues={{
         email: "",
       }}
       onSubmit={async (values) => {
        const confirmedPassword = await forgotPassword(values)
        if (confirmedPassword.error !== "user not found") navigate('/reset', {state: {id: confirmedPassword.id}})
        else alert(confirmedPassword.error)
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form className='rigster-form'>
           <Field
            type='email'
             placeholder='email'
             className='email'
             name='email'
             validate={validateEmail}
           />
           {errors.email && touched.email && <div>{errors.email}</div>}
           <button className='btn' type='submit'>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 )};
export default ForgotPassword