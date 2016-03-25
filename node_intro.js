var port    = 9000,
    express = require('express'),
    app     = express();

var mysql = require('mysql')
    danydb = mysql.createConection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'danydb'
    });

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

/* /test?fname=Daniel&lname=Alvarez */
/* http://localhost:9000/test-man/ */
/* https://projecteuler.net/archives */
/*-------------------------------------------------------------------------------------------*/
// 1st part
app.get('/dir/other/thing', function(req, res){
    var str = "";
    for (var x  in req.query) {
        str += "<p>" + x + ", " + req.query[x] + "</p>"
    }
    res.writeHead(200, {"content-type": 'text/html'});
    res.end(str);
})

// 2nd part
app.post('/route/for/boobs', function(req, res){
    var myQuery "INSERT INTO users (name, age) VALUES (\'" + req.query.name + "\', " + req.query.age + ")";
    danydb.query(myQuery, function(err){
        console.log(err);
    })
    var str = "Posted" + req.query.name + "and" + req.query.age  + "to danydb.users./n/n" + myQuery;
    res.writeHead(200, {"content-type": 'text/html'});
    res.end(str);
});

// 3rd part
app.get('/ruta/lo/que/queremos', function(req, res){
    var myQuery = "SELECT * FROM boob_chart";
    danydb.query(myQuery, function(err, rows) {
        if(err) {
            console.log(err);
        } else {
            console.log(rows);
            res.end(JSON.stringify(rows));
        }
    });
});

/*  JSON: takes stuff from JS and turns them into stirngs so that you can send them via
          petitions.
    req: "request" this can be named anything you want.
    res: "response" This can also be called whatever you want. These names just make it easier to
                    read.
    req.query is the same as ===> {table: 'value('whatever values in here')}
    