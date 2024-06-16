import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';

const app = express();
const port = 3000;
env.config();

const personalInforamtion = {
  title: process.env.TITLE || 'Title',
  fullName: process.env.FULL_NAME || 'Full Name',
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index.ejs', personalInforamtion);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
