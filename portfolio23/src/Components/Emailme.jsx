import  React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useFormik, Formik, Form, Field } from 'formik';
import { SignupValidation } from './SignupValidation';

const initialValues = {
    name: '',
    number: '',
    email: '',
    message: ''
};

function Emailme() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xw3j42s', 'template_119bt0n', form.current, 'YKVaKZLARdCQ3k1OM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
    // const formik = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: SignupValidation,
    //     onSubmit: async (values) => {
    //       values.preventDefault()
    //         try {
    //             const response = await axios.post('http://localhost:3001/sendmail', values);
    //       console.log(values);

    //             console.log(response.data);
    //             alert("Email sent successfully!");  // Optionally, notify the user
    //         } catch (error) {
    //             console.log("Error sending email:", error);
    //             alert("There was an error sending the email.");  // Optionally, notify the user
    //         }
    //     }
    // });

    return (
        <div className='flex bg-[#6E3CF5] h-screen mt-[90px] overflow-y-auto w-[445px] justify-center items-start'>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupValidation}>
                {({ errors }) => (
                    <Form ref={form} onSubmit={sendEmail} >  {/* Make sure to use formik's handleSubmit */}
                        <div className="my-[50px] ">
                            <label className='block text-sm font-bold mb-2'>Full Name</label>
                            <Field type="text" name='name' className='w-full p-3 rounded-lg border border-gray-200 mb-4'></Field>
                            {errors.name && <small className='m-0 p-0 text-red-700 font-bold'>{errors.name}</small>}

                            <label className='block text-sm font-bold mb-2'>Number</label>
                            <Field type="number" name='number' className='w-full p-3 rounded-lg border border-gray-200 mb-4'></Field>
                            {errors.number && <small className='m-0 p-0 text-red-700 font-bold'>{errors.number}</small>}

                            <label className='block text-sm font-bold mb-2'>Email</label>
                            <Field type="email" name='email' className='w-full p-3 rounded-lg border border-gray-200 mb-4'></Field>
                            {errors.email && <small className='m-0 p-0 text-red-700 font-bold w-full h-2'>{errors.email}</small>}

                            <label className='block text-sm font-bold mb-2'>Text Me</label>
                            <Field type="text" name='message' className='w-full h-[100px] p-3 rounded-lg border border-gray-200 mb-4'></Field>
                            {errors.message && <small className='m-0 p-0 text-red-700 font-bold'>{errors.message}</small>}

                            <button type='submit' className='w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500'>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}


export default Emailme;
