const express = require('express'); // creating server
const app = express();
const mongoose = require('mongoose'); // connect with mongoDB
const dotenv = require('dotenv');  // env access DATABASE_ACCESS
const routesUrls = require('./routes/routes')
const cors = require('cors');
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database is connected'))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server is listening on 4000"))