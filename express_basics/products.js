const express = require("express");

const app = express();
console.log("from products");
app.use(express.json());

const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
  { id: "104", name: "ring", category: "accessories", price: 1000 },
  { id: "105", name: "Shirt", category: "Clothing", price: 1500 },
];

app.get("/products", (req, res) => {
  // res.status(204);
  res.send({total: products.length, records: products});
});

app.get("/products/:productId/name/:name", (req, res) => {
  // res.status(204);
  console.log("req.params", req.params);
  const { productId } = req.params;
  console.log("id---", productId);
  //   find the el using ID and return that
  const product = products.find((el) => el.id === productId);
  console.log("product", product);
  if(product){
    res.status(200);
    res.send({status: "success", data: product});
  }else{
    res.status(400);
    res.send({status: "failed", message: "product not found"});
  }
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

app.post("/product/new", (req, res) => {̀
    // create a new product
    // need data from request
    console.log("body", req.body);
    // randomly generate a 6 digit ID; --> use Math.random
    products.push(req.body);
    res.status(201);
    res.send({message: "successfully created product"});
})

app.put("/product/update/:productId", (req, res) => {
    // need id to search product --> params
    // need complete data to update ---> req.body
    const {productId} = req.params;
    // steps --> find the el
    // then --> remove the existing 
    // add the new one 
    // 
})

app.delete("/product/:productId", (req, res) => {
    // steps --> find the el 
    // step - 1 --> delete el
})



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});

// npm i -g nodemon ===> install nodemon globally


// function add(a,b){
//     return a+b
// }

// add({}, {})