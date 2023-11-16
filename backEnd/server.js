import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mysql from 'mysql';
import multer from 'multer';
import path from 'path';


const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//database connection
const con1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
})
//saving images
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})


//calling database
con1.connect(function(err) {
  if(err) {
    console.log('Error in connection')
  }else {
    console.log('Connection established')
  }
})

//route
app.post('/login', (req, res) => {
  const sql = "SELECT * from users WHERE email = ? and password = ?";
  con1.query(sql, [req.body.email, req.body.password],(err, result) => {
    if(err) return res.status(404).json({error: "Email doesn't exists!"})
    if(result.length > 0) {
      return res.status(200).json({Status: 'Success'})
    }else {
      return res.status(404).json({status: 'Error', Error: 'Wrong email or password'}) 
    }
  })
})

app.post('/create',upload.single('image'), (req,res) => {
  const sql = 'INSERT INTO student(`name`, `email`, `password`,`image`) VALUES (?)';
  bcrypt.hash(req.body.password.toString(), 10,(err, hash) => {
    if(err) return res.json({Error: 'Something went wrong'});
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.file.filename
    ]
    con1.query(sql, [values], (err, result) => {
      if(err) return res.json({Error: 'Something went wrong'});
      return res.json({Status: 'Success'})
    })
  })
  //console.log(req.file)
  //console.log(req.body)
})

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})
