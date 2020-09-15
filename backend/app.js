const express = require('express');
const app = express()
require("dotenv").config()
const mongoose = require('mongoose');

//importing middelware libraries
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cookie-parser')

const authRoutes =  require("./routes/auth")
const userRoutes =  require("./routes/user")

//using midlleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// connecting DB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=>{
  console.log("DB Connected")
}).catch((err)=>{
  console.log(err)
});

// Routes
app.use("/api", authRoutes )
app.use("/api", userRoutes)


const port = process.env.PORT || 5000

app.listen(port ,()=>{
  console.log(`Server is running at ${port}`)
})
