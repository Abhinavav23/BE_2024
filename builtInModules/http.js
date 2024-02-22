
/*
URL
https://facebook.com/signup
http://localhost.com/signup
http://127.20.60.7:4000/login
http://flipkart.com/shop/shirts
item--> shirt // param
query params --> ?userId=M&color=red
*/

// make a server listen on some local ports

const http = require("http");

const server = http.createServer((req, res) => {
    // console.log("req method", req.method);
    console.log("req url", req.url);
    // console.log('req recieved');
    
    
    if(req.url === "/login"){
        res.write("Welcome to login Page!!");
    }else if(req.url === "/signup"){
        res.write("<h1>Welcome to signup Page!!</h1>");
    }else{
        res.write("Welcome to generic Page!!");
    }
    res.end();
})

server.listen(3000, () => {
    console.log("Server started on port 3000");
})