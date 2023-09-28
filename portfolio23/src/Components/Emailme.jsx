import React from 'react'
import { useFormik, Formik, Form, Field } from 'formik'
import { SignupValidation } from './SignupValidation'

const initialValues = {
  name: '',
  number: '',
  email: '',
  content: ''
}


function Emailme() {

  // const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: SignupValidation,
  //   onSubmit: (values) => {
  //     console.log(values);

  //   }
  // })



  return (
    <div className='flex bg-[#6E3CF5]  h-screen mt-[90px]  overflow-y-auto w-[445px] justify-center items-start'>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupValidation}>
        {({ errors }) => (
          <Form >
            <div className="mb-[50px] ">
              <label className='block text-sm font-bold mb-2'>Full Name</label>
              <Field type="text" name='name' className='w-full p-3 rounded-lg border border-gray-200 mb-4'></Field>
              {/* <input type="text" placeholder="John Doe" name='name' className='w-full p-3 rounded-lg border border-gray-200 mb-4' value={values.name}
            onBlur={handleBlur} onChange={handleChange} /> */}
              {errors.name && <small className='m-0 p-0 text-red-700 font-bold'>{errors.name}</small>}

              <label className='block text-sm font-bold mb-2' >Number</label>
              <Field type="number" name='number' className='w-full p-3 rounded-lg border border-gray-200 mb-4'></Field>
              {errors.number && <small className='m-0 p-0 text-red-700 font-bold'>{errors.number}</small>}
              {/*  */}
              <label className='block text-sm font-bold mb-2' >Email</label>
              <Field type="email" name='email' className='w-full p-3 rounded-lg border border-gray-200 mb-4'></Field>
              {errors.email && <small className='m-0 p-0 text-red-700 font-bold w-full h-2'>{errors.email}</small>}
              {/*  */}
              <label className='block text-sm font-bold mb-2' >Text Me</label>
              <Field type="text" name='content' className='w-full h-[100px] p-3 rounded-lg border border-gray-200 mb-4'></Field>
              {errors.content && <small className='m-0 p-0 text-red-700 font-bold'>{errors.content}</small>}

              <button type='submit' className='w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500'>Submit</button>
            </div>

          </Form>
        )}

      </Formik>
    </div>
  )
}

export default Emailme