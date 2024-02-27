const express = require("express");

const app = express();
console.log("from products");

const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
  { id: "104", name: "ring", category: "accessories", price: 1000 },
  { id: "105", name: "Shirt", category: "Clothing", price: 1500 },
];

app.get("/products", (req, res) => {
  // res.status(204);
  res.send(products);
});

app.get("/products/:id/name/:name", (req, res) => {
  // res.status(204);
  console.log("req.params", req.params);
  const { productId } = req.params;
  console.log("id---", productId);
  //   find the el using ID and return that
  console.log("inside product params");
  res.send("inside product params");
});

app.get("/product", (req, res) => {
  console.log("query params", req.query);
  const { category, name, maxPrice } = req.query;
  console.log("maxPrice", maxPrice);
  if (category) {
    const filteredBasedOnCategory = products.filter(
      (product) => product.category === category
    );
    res.send({
      total: filteredBasedOnCategory.length,
      records: filteredBasedOnCategory,
    });
  }

  if(maxPrice){

  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});

// npm i -g nodemon ===> install nodemon globally
