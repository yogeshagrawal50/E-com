const express = require('express');
const app = express()
var morgan = require('morgan')
require("dotenv").config()
const mongoose = require('mongoose');

//importing middelware libraries
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const corsOpts = {
//   origin: '*',

//   methods: [
//     'GET',
//     'POST',
//     'PUT',
//     'DELETE'
//   ],

//   allowedHeaders: [
//     'Content-Type',
//   ],
// };

// app.use(cors(corsOpts));
//using midlleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))

const authRoutes =  require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")

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
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)


const port = process.env.PORT || 5000

app.listen(port ,()=>{
  console.log(`Server is running at ${port}`)
})
