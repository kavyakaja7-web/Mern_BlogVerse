const express = require('express');
const app = express();
const cors =require('cors');
require("dotenv").config();

const connectDB =require('./config/db');
connectDB();

const postRoutes = require('./routes/postRoutes');
app.use('./api/posts',postRoutes);
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('API is Running......');
});
 app.listen(3000,()=>{
    console.log("server is running on port 3000");
});