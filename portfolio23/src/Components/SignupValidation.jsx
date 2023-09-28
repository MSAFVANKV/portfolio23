import * as Yup from 'yup';

export const SignupValidation = Yup.object({
    name: Yup.string()
        .min(3, "Name should be at least 3 characters long")
        .required("Please Enter Name"),
    
    number: Yup.string()
        .min(10, "Please Enter a Valid Number")  // Assuming a valid number is at least 10 digits long
        .required("Please Enter a number"),
    
    email: Yup.string()
        .email("Please Enter a Valid Email") // This will validate the format of the email
        .min(3, "Email should be at least 3 characters long")
        .required("Please Enter Email"),
    
    content: Yup.string()
        .min(3, "Content should be at least 3 characters long")
        .required("Please Enter Content"),
});
