const express =require('express');
const  connect = require('./database/connection')

const app =express();
app.use(express.json());
connect();

app .use('/api',require('./router/Router'));

app.listen(3000,(err)=>{
    console.log('server is properly running on http://localhost:3000');
})