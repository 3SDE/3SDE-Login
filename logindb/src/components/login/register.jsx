import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";


const RegisterValidation = object().shape({
  username: string().required("Required"),
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
});

const Input = ({ username, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold' for={field.username}>
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
        name={field.username}
        component='div'
        className='text-red-500 text-xs'
      />
    </div>
  );
};

function Register() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='form'>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidation}
      >
        {() => {
          return (
            <Form className='form-group'>
              <h1 className='header'>Register</h1>
              <Input
                className='form-group-username'
                name='username'
                label='User Name'
              />
              <Input className='form-group-email'
               name='email' 
               label='Email' />
              <Input
                className='form-group-password'
                name='password'
                label='Password'
                type='password'
              />
              <Input
                name='form-group-confirm-password'
                label='Confirm Password'
                type='password'
              />
              <div className='btn-location'>
                <button
                  className='btn'
                  type='submit'
                >
                  Register
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Register;
