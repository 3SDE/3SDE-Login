import React from "react";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { object, string } from "yup";
import Register from "../../components/login/register";

const LoginValidation = object().shape({
  email: string().required("Required").email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
});

const Input = ({ username, label, ...props }) => {
  const [field, meta] = useField(username);
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

function Login() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='form'>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
      >
        {() => {
          return (
            <Form className='form-group'>
              <Input 
              className='form-group-email' 
              name='email' 
              label='Email' />;
              <Input
                className='form-group-password'
                name='password'
                label='Password'
                type='password'
              />
              <div className='btn-location'>
                <button 
                className='btn' 
                type='submit'>
                  Login
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
