const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

const homeRouter = require('./routes/homeRoutes');
app.use("/",homeRouter)

app.use(cors());
app.use(bodyparser.json());

const authRoutes=require('./routes/authroutes.js');
app.use("/auth",authRoutes);

module.exports = {app};
