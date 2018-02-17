const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/about', (req,res)=>{
    res.send("Website coded by robbinson");
});


app.listen(port);
