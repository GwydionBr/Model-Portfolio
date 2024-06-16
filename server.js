import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';

const app = express();
const port = 3000;
env.config();


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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
