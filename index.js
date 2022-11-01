  
  //Q1:- How do you create a simple Express.js application?
  const express = require('express')

const App = express();
App.get('/',(req,resp)=>{
 resp.send('this is Home page');
 console.log(req);
})

App.get('/About',(req,resp)=>{
    resp.send('this is About page');
    console.log(req);
   })



App.listen('5000',function() {
    console.log('Hi everyone ');
})





// Q2:-Create a middleware which will be applicable to all the routes

const express = require("express");
const app = express();
const port = process.env.port || 8080;

const middleWare1 = function (req,res,next ) {
  console.log("this is local middleware");
  next();
};

const middleWare2 = function (req,res,next ) {
  console.log("this is global middleware");
  next();
};

app.use(middleWare2);

app.get("/",  function (req, res) {
  res.send("<h1>Home page of this server<h1>");
  console.log(req);
});
app.get("/About", middleWare1, function (req, res) {
  res.send(
    "<h1>this is About page<h1>"
  );
  console.log(req);
});
app.get("/signup",middleWare1, function (req, res) {
  res.send("<h1>this is signup page<h1>");
  console.log(req);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});



//Q3:-Implement CORS.

const cors = require('cors')
app.use(cors())
app.get('/home',about,(req,res)=>{
    console.log('hellow');
})

//Q4:-Implementation of all type of exports in backend application

function defau(req,res){
    res.send("default exports")
}
function named(req,res) {
    res.send('named exports')
}
module.exports = defau;//default export
module.exports = {named};//named export
