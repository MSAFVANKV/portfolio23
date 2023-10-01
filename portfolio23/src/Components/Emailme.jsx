import  React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useFormik, Formik, Form, Field } from 'formik';
import { SignupValidation } from './SignupValidation';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 2));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}


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
        alert("mail sended to User!")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const imagePaths = [
    "/nodejslogo.png",
    "/re.png",
    "/mongo.png",
    "/js.png",
    "/boostrap.png",
    "/css.png"
];
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
      <>
        <div className=' bg-[#6E3CF5] h-[100%] '>
          <div className="flex justify-center items-start mt-[90px] overflow-y-auto w-[445px] ">
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
            {/* <div className="hidden md:block">
        <img src="/nodejslogo.png" className='w-20 ms-5 my-5' />
        <img src="/re.png" className='w-[100px] ms-[6rem] my-5' />
        <img src="/mongo.png" className='] ms-[6rem] my-5' />
        <img src="/js.png" className='] ms-[6rem] my-5' />

        </div> */}
            {/* <div className="hidden md:block">
                {imagePaths.map((path, index) => (
                    <img key={index} src={path} className={getImageClass(path)} alt="" />
                ))}

              
                {imagePaths.map((path, index) => (
                    <img key={index + 4} src={path} className={getImageClass(path)} alt="" />  
                ))}
            </div> */}
            
            <div className="hidden md:block ">
                {shuffleArray([...imagePaths]).map((path, index) => (
                    <img key={index} src={path} className={getImageClass(path)} alt="" />
                ))}

                {shuffleArray([...imagePaths]).map((path, index) => (
                    <img key={index + 4} src={path} className={getImageClass(path)} alt="" />
                ))}
            </div>

        </div>

        </>
    );
}
function getImageClass(path) {
  if (path === "/nodejslogo.png") return 'w-20 ms-5 my-5 ';
  if (path === "/re.png") return 'w-[100px] ms-[6rem] my-5';
  if (path === "/boostrap.png") return 'w-[12rem] ms-[6rem] my-5';

  // Add other conditions if you have more specific class names for other images
  return 'w-[13rem] ms-[6rem] my-5 shadow';  // default class
}

export default Emailme;
