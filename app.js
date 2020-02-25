const express = require("express");
const bodyParser = require("body-parser");
const request= require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');

let drivers = [{
  dName:"Jhon",
  lan:"Kannada",
  price:18
},
{
  dName:"Lohith",
  lan:"Hindi",
  price:15
},
{
  dName:"Tony",
  lan:"English",
  price:20
}];
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
let filtrDriver=[];

app.get("/",(req,res)=>{
  res.render("index");
})
app.post("/",(req,res)=>{
res.redirect("/");
});
app.get("/booking",(req,res)=>{
  // bookOption.from_City= res.body.frm;
  // bookOption.to_City=res.body.to;
  // console.log(bookOption);
});

app.post("/booking",(req,res)=>{

  res.render("booking");
});

app.get("/confirm",(req,res)=>{


});

app.post("/confirm",(req,res)=>{
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

app.get("/driver",(req,res)=>{

  res.render("driver",{drivers:filtrDriver});
})
app.post("/driver",(req,res)=>{
  if(req.body.frm!=undefined){
  bookOption.from_City= req.body.frm;
  bookOption.to_City=req.body.to;
  bookOption.dateJ=req.body.dpt_date;
  console.log(bookOption);
}
  let langOption = req.body.lang;
  console.log(langOption);
  filtrDriver=drivers.filter((lan)=>{
    return lan.lan===langOption;
  })
  // console.log(filtrDriver);
res.redirect("/driver");
})
app.listen(process.env.PORT || 3000,()=>{
  console.log("Server started at port 3000");
})

