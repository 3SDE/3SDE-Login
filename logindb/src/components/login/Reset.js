import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerUsers, resetPassword } from "../../apiCalls";
import axios from 'axios';
const RegisterValidation = object().shape({
  password: string().min(8, "Required").required("Required"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
});
const Input = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold' htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`${
          meta.error && meta.touched ? "border-red-500" : ""
        } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component='div'
        className='text-red-500 text-xs'
      />
    </div>
  );
};
function Reset() {
    const location = useLocation();
    const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log(values)
    const passwordBody = {id: location.state.id, password: values.password}
    const newPassword = await resetPassword(passwordBody)
    navigate('/home')
  };
  //  if (this.state.reset){
  //     return <Redirect to={'/login'}  />
  //    }
  return (
    <div className='form-group'>
      <h1>Reset Password</h1>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidation}
      >
        {() => {
          return (
            <Form className='rigster-form'>
              <Input
                placeholder='password'
                className='password'
                name='password'
                type='password'
              />
              <Input
                placeholder='confirm password'
                className='confirm-password'
                name='confirmPassword'
                type='password'
              />
              <div className='form-btn'>
                <button className='btn' type='submit'>
                  submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default Reset;