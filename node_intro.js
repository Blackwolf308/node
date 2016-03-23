var port    = 9000,
    express = require('express'),
    app     = express();

app.use('/test-man', express.static('test-man'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', function(req, res) {
    res.end('Hello, loser!');
});

app.post("/test", function(req, res) {
    res.str = "Hello" + req.body.fname + " " + req.query.lname + "It's great to see you again!";
    res.end(str);
});

app.listen(port);
console.log("node listening on port" + port);

//   /test?fname=Daniel&lname=Alvarez
/* http://localhost:9000/test-man/ */
/* https://projecteuler.net/archives */