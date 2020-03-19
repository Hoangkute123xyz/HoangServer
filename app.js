let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let calculator = require('./Calculator');
let server=require("http").createServer(app).listen(process.env.PORT || 8080);
let hbs = require('express-handlebars');
let path = require('path');

app.use(express.static('view'));
app.get("/",function (req,res,next) {
    res.sendFile(__dirname+"/view/page/index.html");
});

app.engine('.hbs',hbs({extname: 'hbs', defaultLayout: 'result', layoutsDir: __dirname + '/view/page/'}));
app.set("view engine",".hbs");
app.set("views","./view/page");

app.post("/",urlencodedParser,function (req,res,next) {
    console.log(req.body);
    const body = req.body;
    res.render('result',{result: calculator.calculate(body.a,body.b,body.radOperator)});
});

