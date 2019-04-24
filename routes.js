var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const dbconfig = require('./dbms');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

router.get(['/','/index'],(req,res)=>{
    res.render('index');
});

router.get(['/store'],(req,res)=>{
    connection.query("Select * from tbl_name",function(err,result ){  
        res.render('stores',{'sql':result}); 
        });
});

router.get(['/restaurantform'],(req,res)=>{
    res.render('restaurantform'); 
});

router.get(['/restaurantpage','/restaurantpage/:resid'],(req,res)=>{
    var qwr="Select * from tbl_name where RestaurantID="+req.params.resid;
    console.log(qwr);
    connection.query(qwr,function(err,result){
        console.log(result);
    res.render('restaurantpage',{'sql':result});
    //res.send("You requested a page with id of " + req.param('resid'))
    });
});

router.get(['/checkout'],(req,res)=>{
    res.render('checkout'); 
});

router.get(['/test'],(req,res)=>{
    connection.query("Select * from tbl_name where RestaurantID=18217475",function(err,result){
        console.log(result)
        res.render('test',{'sql':result});
    });
    
});

module.exports = router;