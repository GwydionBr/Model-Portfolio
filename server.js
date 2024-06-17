import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;
env.config();

const email_service_provider = process.env.EMAIL_SERVICE || 'your_email_service_provider';
const email_address = process.env.EMAIL_ADDRESS || 'your_email_address';
const email_password = process.env.EMAIL_PASSWORD || 'your_email_password';


const personalInforamtion = {
  title: process.env.TITLE || 'Title',
  fullName: process.env.FULL_NAME || 'Full Name',
  instagram: process.env.INSTAGRAM_URL || 'https://www.instagram.com',
  pictureNames: [
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18],
    [19,20,21,22,23,24,25,26,],
    [27,28,29,30,31,32,33,34,35],
  ]
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index.ejs', personalInforamtion);
});

app.get('/contact', (req, res) => {
  const message = req.query.message;
  res.render('contact.ejs', { ...personalInforamtion, message: message || ''});
});


// POST route from contact form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter object with your email service provider details
  const transporter = nodemailer.createTransport({
    service:  email_service_provider,
    auth: {
      user: email_address, 
      pass: email_password,
    }
  });

  // Define the email options
  const mailOptions = {
    from: email_address,
    to: email_address,
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.redirect('/contact?message=Error+sending+email');
    } else {
      console.log('Email sent:', info.response);
      res.redirect('/contact?message=Email+sent+successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
