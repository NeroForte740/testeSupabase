const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const userRouteV1 = require('./routes/routes');

const port = process.env.PORT || 3001;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
app.use(cors());

app.use('/rest/v1', userRouteV1);


app.listen(port, ()=>{
    console.log("executando...", port);
});
