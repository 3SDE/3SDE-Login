import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import { Link } from "react-router-dom";
const RegisterValidation = object().shape({
  name: string().required("Required"),
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
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

function RegistrationForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='form-group'>
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
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
                placeholder='name'
                className='name'
                name='name'
                // label='Name'
              />
              <Input placeholder='email' 
               className='email'
               name='email'  
              />
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
                  Register
                </button>
                <h1 className="option">Or</h1>
                <p>If Account exist then</p><Link className='link' to='/login'><li>Login</li></Link>
                 
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
