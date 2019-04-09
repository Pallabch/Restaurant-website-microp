const express = require('express');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
app.set('view engine','ejs');

app.use(express.static('public'))

app.post(['/','/index'], urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    console.log(req.body);
    res.render('index');
  })

app.get(['/','/index'],(req,res)=>{
    res.render('index');
});

app.get(['/','/index'],(req,res)=>{
    res.render('index');
});

app.get(['/store'],(req,res)=>{
    res.render('stores');
});

app.get(['/restaurantform'],(req,res)=>{
    res.render('restaurantform');
    
});

app.listen(3000);