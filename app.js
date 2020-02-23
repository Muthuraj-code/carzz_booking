const express = require("express");
const bodyParser = require("body-parser");
const request= require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');

let drivers = ["Jhon","Lohith","Tony"];
let bookOption ={
  from_City:"",
  to_City:"",
  dateJ:"",
  first_Name:"",
  last_Name:"",
  user_name:"",
  Address:"",
  eMail:""
}

app.get("/",function(req,res){
  res.render("index");
})
app.post("/",function(req,res){
res.redirect("/");
});
app.get("/booking", function(req,res){
  // bookOption.from_City= res.body.frm;
  // bookOption.to_City=res.body.to;
  // console.log(bookOption);
});

app.post("/booking",function(req,res){
  bookOption.from_City= req.body.frm;
  bookOption.to_City=req.body.to;
  bookOption.dateJ=req.body.dpt_date;
  console.log(bookOption);
  res.render("booking",{driver:drivers});
});

app.get("/confirm",function(req,res){


});

app.post("/confirm",function(req,res){
  bookOption.first_Name=req.body.fName;
  bookOption.last_Name=req.body.lName;
  bookOption.user_name=req.body.uName;
  bookOption.Address=req.body.addr;
  bookOption.eMail=req.body.eMail;

  let randomKM=Math.round((Math.random()*100));
  console.log(randomKM);
  let totalPrice=randomKM*15;
  res.render("confirm",{fName:bookOption.first_Name,lName:bookOption.last_Name,uName:bookOption.user_name,dOJ:bookOption.dateJ,add:bookOption.Address,tPrice:totalPrice,frm:bookOption.from_City,to:bookOption.to_City});
});
app.listen(process.env.PORT || 3000,function(){
  console.log("Server started at port 3000");
})

