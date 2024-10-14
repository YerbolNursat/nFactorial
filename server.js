const express = require('express');
const app = new express();

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}

app.use(allowCrossDomain);
app.get("/", function(request, response){
    response.send({
      firstName : 'Nursat',
      lastName : 'Yerbol'
    });
});
app.get("/about", function(request, response){
     
    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){
     
    response.send("<h1>Контакты</h1>");
});
app.listen(3000);