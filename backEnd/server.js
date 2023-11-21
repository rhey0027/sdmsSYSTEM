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
app.use(cors(
  {
    origin:('http://localhost:3000'),
    methods: ["POST", "GET", "PUT"],
    credentials: true
  }
));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
//database connection
const con1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});
//calling database
con1.connect(function(err) {
  if(err) {
    console.log('Error in connection')
  }else {
    console.log('Connection to db established')
  }
});
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
//TOKEN verification
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) {
    return res.json({Error: 'Unauthorized!'});
  } else {
    jwt.verify(token, 'jwt-code', (err, decoded) => {
      if(err) return res.json({Error: 'Invalid key!'});
      next();
    })
  }
}
app.get('/dashboard', verifyUser, (req, res) => {
  return res.json({Status: 'Success'})
})
//route
//login route
app.post('/login', (req, res) => {
  const sql = "SELECT * from users WHERE email = ? and password = ?";
  con1.query(sql, [req.body.email, req.body.password],(err, result) => {
    if(err) return res.json({Status: 'Error', Error: "Email doesn't exists!"})
    if(result.length > 0) {
      const id = result[0].id;
      const token = jwt.sign({ id }, "jwt-code", { expiresIn: '1d' });
      res.cookie('token', token);
      return res.json({Status: 'Success'})
    }else {
      return res .json({status: 'Error', Error: 'Wrong email or password'}) 
    }
  })
});
//get all records
app.get('/getStudent', (req, res) => {
  const sql = 'SELECT * FROM student';
  con1.query(sql, (err, result) => {
    if(err) return res.json({Error: "No data found!"})
    return res.json({Status: "Success", Result: result})
  })
})

//adding new student account and image
app.post('/create',upload.single('image'), (req,res) => {
  // console.log(req.file) 
  // console.log(req.body)
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
  //console.log(req.body)
})
//GET data for UPDATE
app.get('/get/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM student WHERE id = ?';
  con1.query(sql, [id], (err, result) => {
    if(err) return res.json({Error: 'Something went wrong'});
      return res.json({Status: 'Success', Result: result})
  })
});
//UPDATE
app.put('/update/:id', (req, res) => {
  //console.log(req.body)
  const id = req.params.id;
  const sql = 'UPDATE student SET name = ? WHERE id = ?';
  con1.query(sql, [req.body.name, id], (err, result) => {
    if(err) return res.json({Error: 'Something went wrong'});
    return res.json({Status: 'Success'})
  })
})
 //DELETE a record
  app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM student WHERE id = ?';
    con1.query(sql, [id], (err, result) => {
      if(err) return res.json({Error: 'Something went wrong while deleting'});
      return res.json({Status: 'Success'})
  })
})

//LOGOUT dashboard
app.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({Status: 'Success'})
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})
