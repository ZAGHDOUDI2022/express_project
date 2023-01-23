const express = require('express');
const app = express();
app.use( express.static( "public" ) );

app.set('view engine', 'ejs');


const currentDate = new Date();
const day = currentDate.getDay();
const hours = currentDate.getHours();

app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 /*0*/ && hours < 17) {
    next();
  } else {
    res.render("serviceClose");
  }
});


 app.get('/', function(req, res){
    res.render("home");
 });
 

 app.get("/contacts", (req, res) => {
    res.render("contacts");
  });
  
  app.get("/services", (req, res) => {
    res.render("services");
  });

  app.listen(4010, (err) =>
  err ? console.log(err) : console.log("Server is running on port 3008")
);