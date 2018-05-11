const express = require("express");
const app = express();
var session = require('express-session');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret:  'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

var counter = 0;

app.get('/', function(req, res){
    req.session['name'] = 'max';
    counter++;
    req.session['count'] = counter;
    console.log(req.session);
    
    var sup = req.session['count'];
    console.log(sup);
    res.render('index', {count: req.session['count']});
})

app.listen(8000, function(){
    console.log("listening on 8000");
})

