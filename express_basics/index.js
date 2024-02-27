const express = require("express");

// new application
const app = express();

const products = [
    {id: "101", name: "Shirt", category: "Clothing", price: 2000},
    {id: "102", name: "saree", category: "Clothing", price: 4000},
    {id: "103", name: "watch", category: "accessories", price: 3000},
]

// create a get endpoint and execute any cb when a req is received
app.get("/", (req, res) => {
    console.log("req", req.url);
    console.log("req", req.headers);
    res.send("<h1>Home Page</h1>");
})

app.post("/", (req, res) => {
    res.status(201);
    res.send("created success")
})

app.get("/product", (req, res) => {
    // const data = JSON.stringify(products);
    res.send(products);
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`express server running at ${PORT}`);
})