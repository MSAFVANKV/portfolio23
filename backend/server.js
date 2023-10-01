// backend server.js
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config({path:'.env'})

const PORT = process.env.PORT ||8080

app.use(express.json());

app.use(
    cors({
      origin: [process.env.FRONTEND],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    })
  );


app.post('/sendmail', async (req, res) => {
    const { name, number, email, content } = req.body;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,  // use SSL
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.SECURITY_KEY
        }
    });
    

    let mailOptions = {
        from: process.env.EMAIL_NAME,
        to:email,
        subject: 'Form Submission Details',
        text: `Name: ${name}, Number: ${number}, Email: ${email}, Content: ${content}`

    };
    try {
        await transporter.sendMail(mailOptions);
        if (error) {
            console.log('Error sending mail:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    } catch (error) {
        console.error("Detailed Error:", error);
    res.status(500).send("Error sending email.");
    }
});

// app.get('/', (req, res) => {
//     res.send('Backend is working!');
// });

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});