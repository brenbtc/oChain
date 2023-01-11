// Dependencies \\
const methodOverride = require('method-override');
const express = require('express');
const PORT = process.env.PORT;
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware \\
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(meethodOverride('_method'))

// Controllers \\
app.use('/users', userCtrl);



// Listener \\
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})