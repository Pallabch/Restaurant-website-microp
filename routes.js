var express = require('express');
var router = express.Router();

router.get(['/','/index'],(req,res)=>{
    res.render('index');
});

router.get(['/store'],(req,res)=>{
    res.render('stores');
});

router.get(['/restaurantform'],(req,res)=>{
    res.render('restaurantform'); 
});

module.exports = router;